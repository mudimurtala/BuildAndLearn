import React from "react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";
import type { TeamMember } from "../types/team";
import aminaImg from "../assets/amina.jpg";


export const team: TeamMember[] = [
  {
    name: "Dr. Yusuf Hamisu",
    role: "Chief Medical Officer",
    bio: "Leading clinical strategy and partnerships across Africa.",
    img: aminaImg
  },
  {
    name: "Eng. Murtala Mudi",
    role: "Head of Engineering",
    bio: "Builds scalable health-tech systems and AI pipelines.",
  img: aminaImg
  },
  {
    name: "Comrade Nasir Yusuf Ahmad",
    role: "Product Lead",
    bio: "Designing patient-first experiences and clinical workflows.",
  img: aminaImg
  },
  {
    name: "Mr. Abubakar Haruna",
    role: "Operations Manager",
    bio: "Ensures smooth deployment and local operations.",
  img: aminaImg
  }
]

export function Team() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="team" className="py-12 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-blue-600 mb-3 md:mb-4">Our Team</h2>
          <h3 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight px-4">
            People behind InnoHealth
          </h3>
          <p className="text-gray-600 sm:text-lg max-w-3xl mx-auto px-4">
            A diverse team of clinicians, engineers, and operators working together to improve healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            >
              <div className="w-36 h-44 rounded-lg overflow-hidden mb-4">
                <ImageWithFallback src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-gray-900 font-medium">{member.name}</h4>
              <p className="text-sm text-teal-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </button>
          ))}
        </div>

        <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl p-0">
            {selected !== null && (
              <div className="relative bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-8 right-0 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-50"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
                <div className="md:flex">
                  <div className="md:w-1/2 h-80 md:h-auto">
                    <ImageWithFallback src={team[selected].img} alt={team[selected].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <h3 className="text-gray-900 text-xl sm:text-2xl mb-2">{team[selected].name}</h3>
                    <p className="text-sm text-teal-600 mb-4">{team[selected].role}</p>
                    <p className="text-gray-700">{team[selected].bio} {/* Extended bio can be added here. */}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
