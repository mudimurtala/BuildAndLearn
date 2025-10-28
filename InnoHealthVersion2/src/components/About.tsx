import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative px-4 sm:px-0">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGFmcmljYXxlbnwxfHx8fDE3NTk1MDg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professionals"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements - Hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-teal-500 rounded-xl md:rounded-2xl -z-10"></div>
            <div className="hidden sm:block absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-xl md:rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-blue-600 mb-3 md:mb-4">About Us</h2>
              <h3 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
                Leading Healthcare Innovation in Africa
              </h3>
              <p className="text-gray-600 sm:text-lg leading-relaxed">
                InnoHealth Africa Technology develops, manufactures, and supplies healthcare solutions that address the unique challenges facing African healthcare systems. We combine global expertise with local knowledge to deliver impactful, sustainable solutions.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 pt-2 md:pt-4">
              <div className="space-y-2 flex sm:flex-col items-start sm:items-start gap-3 sm:gap-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900">Quality First</h4>
                  <p className="text-gray-600 text-sm">Premium healthcare solutions</p>
                </div>
              </div>
              <div className="space-y-2 flex sm:flex-col items-start sm:items-start gap-3 sm:gap-0">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-gray-900">Pan-African</h4>
                  <p className="text-gray-600 text-sm">Serving the continent</p>
                </div>
              </div>
              <div className="space-y-2 flex sm:flex-col items-start sm:items-start gap-3 sm:gap-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Skilled professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
