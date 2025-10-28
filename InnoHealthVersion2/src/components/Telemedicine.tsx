import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Video, Clock, Users, Shield, Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner@2.0.3";

const benefits = [
  {
    icon: Video,
    title: "Remote Consultations",
    description: "Connect with specialists from anywhere"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book appointments at your convenience"
  },
  {
    icon: Users,
    title: "Expert Doctors",
    description: "Access to qualified healthcare professionals"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "HIPAA-compliant video consultations"
  }
];

export function Telemedicine() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Appointment request submitted successfully! We'll contact you shortly.");
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
    setIsSubmitting(false);
  };

  return (
    <section id="telemedicine" className="py-12 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-teal-600 mb-3 md:mb-4">Telemedicine Services</h2>
          <h3 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            Healthcare at Your Fingertips
          </h3>
          <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto px-4">
            Connect with our healthcare professionals remotely for consultations, follow-ups, and medical advice without leaving your home.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-4 sm:p-6 text-center border-0 bg-white/80 backdrop-blur-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Form Section */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-6 md:space-y-8">
          {/* Collapsible Trigger */}
          <div className="max-w-4xl mx-auto">
            <CollapsibleTrigger asChild>
              <Card className="p-6 sm:p-8 border-2 border-blue-200 hover:border-blue-400 transition-colors cursor-pointer bg-white group">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-gray-900 text-xl sm:text-2xl md:text-3xl mb-2 group-hover:text-blue-600 transition-colors">
                      Book Your Virtual Appointment
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Click to {isOpen ? 'hide' : 'show'} the appointment booking form
                    </p>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 sm:w-8 sm:h-8 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </Card>
            </CollapsibleTrigger>
          </div>

          {/* Collapsible Content - Form */}
          <CollapsibleContent className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Info */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Fill out the form to schedule a telemedicine consultation with one of our qualified healthcare professionals. We'll confirm your appointment within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Video Consultations</h4>
                      <p className="text-gray-600 text-sm">High-quality video calls with screen sharing capabilities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">Available Hours</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 8:00 PM<br />Saturday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <Card className="p-6 sm:p-8 border-0 shadow-xl bg-white">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Enter your full name" 
                  required 
                  className="bg-gray-50"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+234 xxx xxx xxxx" 
                    required 
                    className="bg-gray-50"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left bg-gray-50 hover:bg-gray-100"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select name="time" required>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-2">
                <Label htmlFor="type">Consultation Type *</Label>
                <Select name="type" required>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Consultation</SelectItem>
                    <SelectItem value="followup">Follow-up Appointment</SelectItem>
                    <SelectItem value="specialist">Specialist Consultation</SelectItem>
                    <SelectItem value="prescription">Prescription Refill</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Consultation *</Label>
                <Textarea 
                  id="reason" 
                  name="reason"
                  placeholder="Please describe your symptoms or reason for consultation" 
                  required 
                  className="bg-gray-50 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
              </Card>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
