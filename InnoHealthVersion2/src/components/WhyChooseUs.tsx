import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbulb, Award, TrendingUp, Shield, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Pioneering next-generation healthcare technologies tailored for African markets"
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "International standards with rigorous quality control and certification"
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Proven track record of improving healthcare outcomes across the continent"
  },
  {
    icon: Shield,
    title: "Reliable & Trusted",
    description: "Dependable solutions backed by comprehensive support and maintenance"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Efficient implementation processes minimizing downtime and disruption"
  },
  {
    icon: CheckCircle,
    title: "Local Expertise",
    description: "Deep understanding of African healthcare challenges and requirements"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-teal-600 mb-3 md:mb-4">Why Choose Us</h2>
          <h3 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            Your Partner in Healthcare Excellence
          </h3>
          <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto px-4">
            We combine innovation, quality, and impact to deliver healthcare solutions that make a real difference in African communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2 md:space-y-3 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last px-4 sm:px-0">
            <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkzOTI0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gradient blob - Hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="hidden sm:block absolute -top-6 -right-6 md:-top-8 md:-right-8 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
