// ...existing code...
import { Menu, X, Activity, Users, Heart, TrendingUp, Smartphone, Calendar, FileText, MessageSquare, Shield, Database, ChartBar, UserCheck, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);







  return (
    <div className="w-full">
      {/* Navigation */}
  <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="logo-text">InnoHealth</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-700">Our Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-700">Telemedicine Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-700">Our Impact</a>
              <a href="#" className="text-gray-700 hover:text-purple-700">Why Choose Us</a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-purple-700 hover:bg-purple-800" style={{opacity: 0.85}}>
                    Menu
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Our Team
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    About Us
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>


          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-purple-700">Our Services</a>
              <a href="#" className="block text-gray-700 hover:text-purple-700">Telemedicine Services</a>
              <a href="#" className="block text-gray-700 hover:text-purple-700">Our Impact</a>
              <a href="#" className="block text-gray-700 hover:text-purple-700">Why Choose Us</a>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-purple-700 hover:bg-purple-800 w-full">
                    Menu
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Our Team
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    About Us
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661690013376-9c1b73f0b16c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG5pZ2VyaWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            alt="Modern healthcare technology Nigeria"
            className="w-full h-full object-cover"
            style={{objectPosition: 'center'}}
          />
        </div>
        {/* Blue gradient overlay with reduced opacity */}
        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(135deg, #7c3aedcc 0%, #6d28d9cc 50%, #4c1d95cc 100%)', opacity: 0.85}} />
        {/* Decorative SVG overlay */}
        <div className="absolute inset-0 z-20 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,40 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-30">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              InnoHealth Africa Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Innovating Healthcare Across Africa
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Transforming healthcare delivery through innovative digital solutions, medical technology and comprehensive health information systems
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Leading Healthcare Innovation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGFmcmljYXxlbnwxfHx8fDE3NTk1MDg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare professionals"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Leading Healthcare Innovation in Africa
              </h2>
              <p className="text-gray-600 mb-6">
                InnoHealth Africa Technology develops, manufactures, and supplies healthcare solutions that address the unique challenges facing African healthcare systems. We combine global expertise with local knowledge to deliver impactful, sustainable solutions.
              </p>
              <p className="text-gray-600">
                Our comprehensive suite of digital health solutions also empowers healthcare providers to deliver better outcomes while reducing costs and improving efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Healthcare Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Comprehensive Healthcare Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="mb-3">
                Laboratory, Biomedical & Diagnostic Services
              </h3>
              <p className="text-gray-600">
                State-of-the-art diagnostic equipment, biomedical solutions, and comprehensive medical testing for accurate analysis and research.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-pink-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mb-3">
                Healthcare Consultancy Services
              </h3>
              <p className="text-gray-600">
                Expert guidance on healthcare system optimization, technology integration, and operational excellence.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="mb-3">
                Customer Experience Services
              </h3>
              <p className="text-gray-600">
                Enjoy good customer service experience with us, as we always do our best to make you happier. You are the most valuable asset we have, and we must serve you well.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-pink-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mb-3">
                Pharmaceutical Drugs & E-Pharmacy
              </h3>
              <p className="text-gray-600">
                High-quality pharmaceutical products and convenient online pharmacy services meeting international standards for patient care.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="mb-3">
                Telemedicine Services
              </h3>
              <p className="text-gray-600">
                Remote healthcare consultations and digital health platforms connecting patients with medical professionals across Africa.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 border border-transparent hover:border-pink-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="mb-3">
                High-Tech AI Healthcare Solutions
              </h3>
              <p className="text-gray-600">
                Cutting-edge artificial intelligence systems for diagnostics, patient management, and data analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare at Your Fingertips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Healthcare at Your Fingertips
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature Cards with Framer Motion */}
            <motion.div
              className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Mobile Access</h4>
              <p className="text-sm text-gray-600">Access healthcare services anytime, anywhere</p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Easy Scheduling</h4>
              <p className="text-sm text-gray-600">Book appointments with ease</p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">Digital Records</h4>
              <p className="text-sm text-gray-600">Secure and accessible health records</p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h4 className="mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Round-the-clock healthcare assistance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transforming Healthcare in Nigeria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Transforming Healthcare in Nigeria
            </h2>
            <p className="text-gray-600">
              Witness the positive change we're bringing to communities across Nigeria through innovative healthcare solutions and compassionate service delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Service Cards with Framer Motion */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Primary Care</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Specialized Care</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Health Informatics</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ChartBar className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">Analytics & Insights</p>
            </motion.div>
          </div>

          {/* Blog/News Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog/News Cards with Framer Motion */}
            {[
              {
                src: "https://images.unsplash.com/photo-1718010588689-9806ce642d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxkZXJseSUyMHBhdGllbnQlMjBjYXJlfGVufDF8fHx8MTc2MDc1Mzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Community Health Outreach",
                title: "Community Health Outreach",
                desc: "Providing accessible healthcare services to underserved communities across Kano State"
              },
              {
                src: "https://images.unsplash.com/photo-1632054229892-21103035a686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Senior Care Services",
                title: "Quality Patient Care",
                desc: "Delivering exceptional medical consultations and treatments to families in Katsina communities"
              },
              {
                src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMEFmcmljYXxlbnwxfHx8fDE3NjAxNzgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "AI-Powered Disease Detection",
                title: "AI-Powered Healthcare Solutions",
                desc: "Implementing cutting-edge technology to revolutionize healthcare delivery in Northern Nigeria"
              },
              {
                src: "https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWVkaWNhbCUyMGNsaW5pY3xlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Maternal Health Program",
                title: "Modern Medical Facilities",
                desc: "State-of-the-art diagnostic and treatment centers serving the people of Katsina"
              },
              {
                src: "https://images.unsplash.com/photo-1650153265880-889a8b60a10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhJTIwbWVkaWNhbCUyMG91dHJlYWNofGVufDF8fHx8MTc2MDE3ODI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Smart Health Records",
                title: "Telemedicine Services",
                desc: "Bridging the gap in healthcare access through remote consultations and digital health services"
              },
              {
                src: "https://images.unsplash.com/photo-1696861308115-54a5e5a134b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhhcm1hY2V1dGljYWwlMjBzZXJ2aWNlcyUyMGluJTIwbm9ydGhlcm4lMjBuaWdlcmlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
                alt: "Telemedicine Access",
                title: "Pharmaceutical Services",
                desc: "Ensuring access to quality medications and pharmaceutical care for all residents"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 border border-transparent hover:border-purple-300 transition-all duration-300 transform transition-transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ImageWithFallback 
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Partner in Healthcare Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Your Partner in Healthcare Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Innovation-Driven</h4>
                  <p className="text-sm text-gray-600">Pioneering next-generation healthcare technologies tailored for African markets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChartBar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Uncompromising Quality</h4>
                  <p className="text-sm text-gray-600">International standards with rigorous quality control and certification</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Reliable & Trusted</h4>
                  <p className="text-sm text-gray-600">Dependable solutions backed by comprehensive support and maintenance</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Local Expertise</h4>
                  <p className="text-sm text-gray-600">Deep understanding of African healthcare challenges and requirements</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Measurable Impact</h4>
                  <p className="text-sm text-gray-600">Proven track record of improving healthcare outcomes across the continent</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Rapid Deployment</h4>
                  <p className="text-sm text-gray-600">Efficient implementation processes minimizing downtime and disruption</p>
                </div>
              </div>
            </div>

            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1679134015772-943d09a750ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWwlMjBsYWJvcmF0b3J5JTIwd2l0aCUyMGFuJTIwYWZyaWNhbiUyMGxhYiUyMHByYWN0aXRpb25lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300"
                alt="Healthcare Excellence"
                className="w-full h-full min-h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
  <footer className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white dark:bg-gray-950 dark:text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer brand */}
          <div className="mb-6">
            <span className="logo-text logo-text--on-dark dark:text-purple-200">InnoHealth</span>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Solutions</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">EHR Systems</a></li>
                <li><a href="#" className="hover:underline">Telemedicine</a></li>
                <li><a href="#" className="hover:underline">Health Analytics</a></li>
                <li><a href="#" className="hover:underline">Mobile Health</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-200" />
                  <a href="mailto:info@innohealthafrica.com" className="hover:underline">info@innohealthafrica.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-200" />
                  <a href="tel:+2348042849572" className="hover:underline">+234 804 284 9572</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-200" />
                  <span>Kaduna & Katsina States, Nigeria</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
              <p className="text-sm opacity-90 mb-4">
                Stay updated with our latest innovations and healthcare insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <span className="sr-only">X</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
                    <path d="M18.244 2.25h3.194l-7.007 8.01 8.213 11.49H18.59l-5.21-7.28-6.1 7.28H3.999l7.489-8.93L3 2.25h5.817l4.708 6.844 4.719-6.844z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2025 InnoHealth Africa Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
