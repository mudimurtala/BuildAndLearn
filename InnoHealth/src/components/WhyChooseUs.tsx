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
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-teal-600 mb-4">Why Choose Us</h2>
          <h3 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            Your Partner in Healthcare Excellence
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine innovation, quality, and impact to deliver healthcare solutions that make a real difference in African communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkzOTI0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
