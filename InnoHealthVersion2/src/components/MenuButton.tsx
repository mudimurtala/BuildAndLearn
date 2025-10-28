"use client";

import { useState, lazy, Suspense } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Dialog, DialogContent } from "./ui/dialog";
import { Menu as MenuIcon, X } from "lucide-react";

const Team = lazy(() => import("./Team").then((m) => ({ default: m.Team })));
const Gallery = lazy(() => import("./Gallery").then((m) => ({ default: m.Gallery })));

export default function MenuButton() {
  const [openTeam, setOpenTeam] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="ghost" className="rounded-full">
            <MenuIcon className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={8} className="w-44">
          <DropdownMenuItem onClick={() => setOpenTeam(true)}>Team</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenGallery(true)}>Gallery</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={openTeam} onOpenChange={setOpenTeam}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative bg-white rounded-lg overflow-hidden max-h-[80vh] w-full">
            <button
              onClick={() => setOpenTeam(false)}
              className="absolute -top-10 right-0 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-50"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
            {/* Constrain inner content and allow vertical scroll. Reduce section padding when rendered inside dialog */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[76vh] w-full [&>section]:py-0 [&>section]:px-0">
              <Suspense fallback={<div className="p-6">Loading team...</div>}>
                <Team />
              </Suspense>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openGallery} onOpenChange={setOpenGallery}>
        <DialogContent className="max-w-5xl p-0">
          <div className="relative bg-white rounded-lg overflow-hidden max-h-[86vh] w-full">
            <button
              onClick={() => setOpenGallery(false)}
              className="absolute -top-10 right-0 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-50"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[82vh] w-full [&>section]:py-0 [&>section]:px-0">
              <Suspense fallback={<div className="p-6">Loading gallery...</div>}>
                <Gallery />
              </Suspense>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
