import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">InnoHealth Africa Technology</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 max-w-md">
              Innovating Healthcare Across Africa through cutting-edge technology, quality products, and expert consultancy services.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors touch-manipulation" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors touch-manipulation" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors touch-manipulation" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors touch-manipulation" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-teal-400 transition-colors inline-block py-1">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors inline-block py-1">Services</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors inline-block py-1">Products</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors inline-block py-1">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors inline-block py-1">News & Updates</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Email</p>
                  <a href="mailto:info@innohealthafrica.com" className="hover:text-teal-400 transition-colors break-all">
                    info@innohealthafrica.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                  <a href="tel:+2341234567890" className="hover:text-teal-400 transition-colors">
                    +234 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Location</p>
                  <p>Kaduna & Katsina States, Nigeria</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 InnoHealth Africa Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
