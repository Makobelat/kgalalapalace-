export default function FacebookWidget() {
  const fbLink = 'https://www.facebook.com/profile.php?id=100063455351444';

  return (
    <a
      href={fbLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Kgalala Palace on Facebook"
      className="fixed right-6 bottom-20 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1877F2] hover:scale-105 transform transition-all shadow-lg"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="white" aria-hidden>
        <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.42 2 2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.9v-2.9h1.54V9.41c0-1.52.9-2.36 2.28-2.36.66 0 1.35.12 1.35.12v1.49h-.76c-.75 0-.98.47-.98.96v1.15h1.67l-.27 2.9h-1.4V22C18.34 21.25 22 17.09 22 12.07z" />
      </svg>
    </a>
  );
}
