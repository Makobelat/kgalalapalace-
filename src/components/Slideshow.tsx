import { useState, useEffect } from 'react';

import img1 from '../assets/KPimages/Kgalala images  13.jpg';
import img2 from '../assets/KPimages/Kgalala images  2.jpg';
import img3 from '../assets/KPimages/Kgalala images  3.jpg';
import img4 from '../assets/KPimages/Kgalala images  4.jpg';
import img5 from '../assets/KPimages/small lapa.jpg';
import img6 from '../assets/KPimages/Kgalala images  6.jpg';

const images = [
  img1,  img2,  img3,  img4, img5,  img6
];
export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}

      {/* Arrow controls removed per request */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
