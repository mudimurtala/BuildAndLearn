import { useState } from "react";
import { Card } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Stethoscope, MapPin, X } from "lucide-react";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaGVhbHRoY2FyZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjAxNzgyODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Community Health Outreach",
    location: "Kano State",
    description: "Providing accessible healthcare services to underserved communities across Kaduna State",
    category: "Outreach"
  },
  {
    image: "https://images.unsplash.com/photo-1632054229892-21103035a686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Quality Patient Care",
    location: "Katsina State",
    description: "Delivering exceptional medical consultations and treatments to families in Katsina communities",
    category: "Care"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMEFmcmljYXxlbnwxfHx8fDE3NjAxNzgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "AI-Powered Healthcare Solutions",
    location: "Kaduna State",
    description: "Implementing cutting-edge technology to revolutionize healthcare delivery in Northern Nigeria",
    category: "Technology"
  },
  {
    image: "https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWVkaWNhbCUyMGNsaW5pY3xlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Medical Facilities",
    location: "Katsina State",
    description: "State-of-the-art diagnostic and treatment centers serving the people of Katsina",
    category: "Facilities"
  },
  {
    image: "https://images.unsplash.com/photo-1650153265880-889a8b60a10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhJTIwbWVkaWNhbCUyMG91dHJlYWNofGVufDF8fHx8MTc2MDE3ODI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Telemedicine Services",
    location: "Kano, Kaduna & Katsina States",
    description: "Bridging the gap in healthcare access through remote consultations and digital health services",
    category: "Telemedicine"
  },
  {
    image: "https://images.unsplash.com/photo-1696861308115-54a5e5a134b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhhcm1hY2V1dGljYWwlMjBzZXJ2aWNlcyUyMGluJTIwbm9ydGhlcm4lMjBuaWdlcmlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    title: "Pharmaceutical Services",
    location: "Kano State",
    description: "Ensuring access to quality medications and pharmaceutical care for all residents",
    category: "Pharmacy"
  }
];

const stats = [
  {
    icon: Users,
    value: "4,000+",
    label: "Patients Served",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Stethoscope,
    value: "80+",
    label: "Healthcare Professionals",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Heart,
    value: "30+",
    label: "Community Programs",
    color: "from-blue-600 to-teal-500"
  },
  {
    icon: MapPin,
    value: "3 States",
    label: "Kano, Kaduna & Katsina",
    color: "from-teal-600 to-blue-500"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-teal-600 mb-3 md:mb-4">Our Impact</h2>
          <h3 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            Transforming Healthcare in Northern Nigeria
          </h3>
          <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto px-4">
            Witness the positive change we're bringing to communities across Northern Nigeria through innovative healthcare solutions and compassionate service delivery.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 sm:p-8 text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-900">{item.category}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 bg-white">
                <h4 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mb-3 text-teal-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <Card className="p-6 sm:p-8 md:p-12 border-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-2xl">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-blue-50 sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Together, we can continue to expand access to quality healthcare services across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#telemedicine"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Involved
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-50"
              >
                <X className="w-5 h-5 text-gray-900" />
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-auto"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-gray-900 text-xl sm:text-2xl mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-teal-600">
                    <MapPin className="w-4 h-4" />
                    <span>{galleryItems[selectedImage].location}</span>
                  </div>
                  <p className="text-gray-600">
                    {galleryItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
