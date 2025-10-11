import { Card } from "./ui/card";
import { Microscope, ShoppingBag, Cpu, Video, HeartPulse, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Laboratory, Biomedical & Diagnostic Services",
    description: "State-of-the-art diagnostic equipment, biomedical solutions, and comprehensive medical testing for accurate analysis and research.",
    color: "blue"
  },
  {
    icon: ShoppingBag,
    title: "Pharmaceutical Drugs & E-Pharmacy",
    description: "High-quality pharmaceutical products and convenient online pharmacy services meeting international standards for patient care.",
    color: "teal"
  },
  {
    icon: Cpu,
    title: "High-Tech AI Healthcare Solutions",
    description: "Cutting-edge artificial intelligence systems for diagnostics, patient management, and data analysis.",
    color: "blue"
  },
  {
    icon: Video,
    title: "Telemedicine Services",
    description: "Remote healthcare consultations and digital health platforms connecting patients with medical professionals across Africa.",
    color: "teal"
  },
  {
    icon: HeartPulse,
    title: "Healthcare Consultancy Services",
    description: "Expert guidance on healthcare system optimization, technology integration, and operational excellence.",
    color: "blue"
  }
];

export function Services() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Our Services</h2>
          <h3 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl mb-6">
            Comprehensive Healthcare Solutions
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide end-to-end healthcare technology and services designed to improve patient outcomes and healthcare delivery across Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-shadow duration-300 border-0 bg-white group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                service.color === 'blue' ? 'bg-blue-100' : 'bg-teal-100'
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.color === 'blue' ? 'text-blue-600' : 'text-teal-600'
                }`} />
              </div>
              <h4 className="text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
