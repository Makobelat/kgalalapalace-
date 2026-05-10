import { Link } from 'react-router-dom';
import { Building2, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import Slideshow from '../components/Slideshow';
import GalleryLightbox from '../components/GalleryLightbox';
import imgHall from '../assets/KPimages/hall.jpg';
import imgOutside from '../assets/KPimages/outside1.jpg';
import imgLapa from '../assets/KPimages/small lapa.jpg';
import imgTeam from '../assets/KPimages/outside 2.jpg';
import imgWood from '../assets/KPimages/outside1 - Copy.jpg';
import imgDownvip from '../assets/KPimages/downvip.jpg';

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = [imgHall, imgOutside, imgLapa, imgTeam, imgWood, imgDownvip];
  return (
    <div>
      {/* Hero Section with Slideshow */}
      <div className="relative">
        <Slideshow />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to </h1>
              <h1 className="text-5xl font-bold mb-4">Kgalala Palace</h1>
              <p className="text-xl mb-8">Experience luxury and elegance in our world-class venues</p>
              <Link 
                to="/venues"
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Explore Venues
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kgalala Palace</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Venues</h3>
              <p className="text-gray-600">galala Palace exemplify what “state-of-the-art facilities equipped with modern amenities” truly means. These spaces are designed not only for elegance but also for functionality, ensuring that every event—whether a gala, conference, or cultural celebration—runs seamlessly.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Concierge</h3>
              <p className="text-gray-600">A simple and secure booking system ensures that guests can reserve premium venues like Kgalala Palace with ease and confidence. By offering a streamlined interface, users can quickly check availability, select preferred dates, and confirm reservations without unnecessary delays.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
              <p className="text-gray-600">A dedicated professional support team is the backbone of any premium venue, ensuring that every detail of your event is flawlessly executed. From the initial planning stages to the final wrap-up, the team provides personalized guidance, technical expertise, and on-site coordination to guarantee a seamless experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Venue Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-6">Venue Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-md cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={src}
                  alt={`Venue ${i + 1}`}
                  className="w-full h-[448px] object-cover transform hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          {lightboxIndex !== null && (
            <GalleryLightbox
              images={galleryImages}
              index={lightboxIndex}
              setIndex={(i) => setLightboxIndex(i)}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}