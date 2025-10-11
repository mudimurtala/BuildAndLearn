import { Button } from "./ui/button";
import { Mail, ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-6">
          Ready to Transform Healthcare Together?
        </h2>
        <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          Partner with us to bring innovative healthcare solutions to your organization. Let's create healthier communities across Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
          >
            Become a Partner
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <p className="text-blue-100 text-sm mb-4">Trusted by healthcare providers across Africa</p>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <span>🏥 Hospitals</span>
            <span>🔬 Research Centers</span>
            <span>💊 Pharmacies</span>
            <span>🏛️ Government Agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
