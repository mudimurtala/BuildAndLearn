import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGFmcmljYXxlbnwxfHx8fDE3NTk1MDg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professionals"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 mb-4">About Us</h2>
              <h3 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
                Leading Healthcare Innovation in Africa
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                InnoHealth Africa Technology develops, manufactures, and supplies healthcare solutions that address the unique challenges facing African healthcare systems. We combine global expertise with local knowledge to deliver impactful, sustainable solutions.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-gray-900">Quality First</h4>
                <p className="text-gray-600 text-sm">Premium healthcare solutions</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-gray-900">Pan-African</h4>
                <p className="text-gray-600 text-sm">Serving the continent</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-gray-900">Expert Team</h4>
                <p className="text-gray-600 text-sm">Skilled professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
