import axios from 'axios';

const PAYGATE_ID = import.meta.env.VITE_PAYGATE_ID;
const PAYGATE_SECRET = import.meta.env.VITE_PAYGATE_SECRET;
const PAYGATE_URL = 'https://secure.paygate.co.za/payweb3/initiate.trans';

interface PaymentRequest {
  amount: number;
  reference: string;
  email: string;
  returnUrl: string;
}

export async function initiatePayment({ amount, reference, email, returnUrl }: PaymentRequest) {
  const data = {
    PAYGATE_ID,
    REFERENCE: reference,
    AMOUNT: amount * 100, // Convert to cents
    CURRENCY: 'R',
    RETURN_URL: returnUrl,
    TRANSACTION_DATE: new Date().toISOString(),
    EMAIL: email,
    CHECKSUM: '', // Will be calculated
  };

  // Calculate checksum
  const checksum = calculateChecksum(data, PAYGATE_SECRET);
  data.CHECKSUM = checksum;

  try {
    const response = await axios.post(PAYGATE_URL, data);
    return response.data;
  } catch (error) {
    console.error('Payment initiation failed:', error);
    throw new Error('Payment initiation failed');
  }
}

function calculateChecksum(data: Record<string, any>, secret: string): string {
  const values = Object.values(data).join('');
  const stringToHash = values + secret;
  
  // Create MD5 hash
  return Array.from(
    new Uint8Array(
      new TextEncoder().encode(stringToHash)
    )
  ).map(b => b.toString(16).padStart(2, '0')).join('');
}