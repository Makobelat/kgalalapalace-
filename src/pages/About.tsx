import { Crown, Award, Users, Heart } from 'lucide-react';
import img1 from '../assets/KPimages/team-1.jpg';
import img2 from '../assets/KPimages/team-3.jpg';
import img3 from '../assets/KPimages/team-4.jpg';
import img4 from '../assets/KPimages/images.jpeg';
import profilePdf from '../data/profile.pdf';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-red-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Kgalala Palace</h1>
            <p className="text-xl text-red-300 max-w-2xl mx-auto">
              A legacy of excellence in creating unforgettable events and celebrations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Founded in 2018, Kgalala Palace has been at the forefront of luxury event venues in Vanderbijlpark Gauteng. 
            Our palace stands as a testament to elegance, combining traditional African heritage with modern luxury. 
            We've hosted countless memorable events, from royal celebrations to corporate gatherings, 
            always maintaining our commitment to excellence and exceptional service.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the highest standards in every aspect</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">Premium facilities and services that exceed expectations</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building lasting relationships with our clients and community</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">Dedicated to making every event truly special</p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Castor Hoyane ',
                role: 'Managing Director',
                image: img1,
                email: 'castor@kgalalapalace.co.za',
                phone: '078 510 4100',
                history:
                  'Castor founded Kgalala Palace in 2018 with a vision to blend tradition and luxury. She leads with a focus on guest experience and strategic growth.',
              },
              {
                name: 'Poppi Nkunyane',
                role: 'Hospitality Director',
                image: img2,
                email: 'poppi@kgalalapalace.co.za',
                phone: '083 698 2064',
                history:
                  'Poppi brings 5 years of hospitality direction experience, crafting large-scale and private ceremonies with meticulous planning.',
              },
              {
                name: 'Mpho Mohlidi',
                role: 'Operation Director',
                image: img3,
                email: 'mpho@kgalalapalace.co.za',
                phone: '063 093 5186',
                history:
                  'Mpho oversees ensuring every event at the palace delivers memorable visuals and atmosphere.',
              },
              {
                name: 'Mpho Mohlahleli',
                role: 'Manager',
                image: img4,
                email: 'info@kgalalapalace.co.za',
                phone: '073 056 6604',
                history:
                  'Mpho manages venue operations and logistics, maintaining high standards for service and facility readiness across all events.',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="group bg-white rounded-lg p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>

                  <div className="mt-3 text-sm text-gray-600 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-56 group-hover:opacity-100">
                    <p className="mb-2">{member.history}</p>
                    <p className="text-sm">
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${member.email}`} className="text-red-600 hover:underline">
                        {member.email}
                      </a>
                    </p>
                    <p className="text-sm">
                      <strong>Phone:</strong>{' '}
                      <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="text-red-600 hover:underline">
                        {member.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button to download PDF profile */}
        <div className="text-center mt-8">
          <a
            href={profilePdf}
            download="Kgalala-Palace-Profile.pdf"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Download Our Profile PDF
          </a>
        </div>
      </div>
    </div>
  );
}