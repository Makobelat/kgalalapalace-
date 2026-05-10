import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  setIndex: (i: number | null) => void;
  onClose: () => void;
}

export default function GalleryLightbox({ images, index, setIndex, onClose }: LightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  };

  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((index + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        onClick={goPrev}
        className="absolute left-6 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`Gallery ${index + 1}`}
          className="w-full h-auto max-h-[90vh] object-contain rounded-md"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <button
        onClick={goNext}
        className="absolute right-6 text-white p-2 rounded-full bg-black/40 hover:bg-black/60"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
