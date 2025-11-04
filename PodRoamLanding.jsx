import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Check,
  Flame,
  ShowerHead,
  Plug,
  Sun,
  ShieldHalf,
  MapPin,
  Leaf,
  ArrowRight,
} from "lucide-react";

// PodRoam logo (minimal pod + deck line)
function PodRoamLogo({ className = "w-9 h-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 40h48v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-6Z"
        fill="#0F1113"
      />
      <path
        d="M12 40V28c0-7 9-14 20-14s20 7 20 14v12"
        stroke="#0F1113"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M12 40h40" stroke="#C76A3A" strokeWidth="4" />
      <circle cx="46" cy="16" r="2" fill="#264A3A" />
      <circle cx="54" cy="20" r="2" fill="#264A3A" />
      <circle cx="40" cy="12" r="2" fill="#264A3A" />
    </svg>
  );
}

export default function PodRoamLanding() {
  const [email, setEmail] = useState("");

  const featureItems = [
    {
      icon: <ShieldHalf className="w-5 h-5" />,
      title: "Steel-built + secure",
      desc: "Converted ISO container with fold-down armored deck panel for transport.",
    },
    {
      icon: <ShowerHead className="w-5 h-5" />,
      title: "Private bath",
      desc: "Full shower + toilet module, RV-style hookups for water & sewer.",
    },
    {
      icon: <Plug className="w-5 h-5" />,
      title: "Power options",
      desc: "30/50A campground pedestal ready + solar-assist battery pack.",
    },
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Deck fire pit",
      desc: "Solo Stove cradle with heat shield and safe clearances.",
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Climate comfort",
      desc: "Insulated walls, low-E glass, quiet HVAC + fresh air ventilation.",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Low impact",
      desc: "Minimal footings, seasonal redeploy, upcycled materials.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4F0] text-[#0F1113]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F6F4F0]/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PodRoamLogo />
            <span className="font-semibold tracking-wider">PODROAM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">
              Features
            </a>
            <a href="#how" className="hover:opacity-80">
              How it works
            </a>
            <a href="#partners" className="hover:opacity-80">
              Partners
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button className="bg-[#264A3A] hover:bg-[#1f3d30] text-white">
              Join waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute right-[-10%] top-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#D9C8A9] opacity-40 blur-3xl" />
          <div className="absolute left-[-10%] bottom-[-20%] w-[36rem] h-[36rem] rounded-full bg-[#C76A3A] opacity-20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border px-3 py-1 text-xs mb-4">
              <MapPin className="w-3.5 h-3.5" /> A network of nature-first stays
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Roam light. <span className="text-[#264A3A]">Sleep right.</span>
            </h1>
            <p className="mt-4 text-neutral-700 text-lg max-w-prose">
              PodRoam turns campgrounds and private lands into instant glamping
              — fold-down decks, private baths, and panoramic glass without the
              RV hassle.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-[#264A3A] hover:bg-[#1f3d30] text-white"
              >
                Join the waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-[#0F1113]">
                Partner with us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What makes PodRoam different
        </h2>
        <p className="mt-2 text-neutral-700 max-w-prose">
          A portable, eco-modern micro-cabin with campground hookups and
          hotel-level comfort. Built rugged; lives refined.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {featureItems.map((f, i) => (
            <Card key={i} className="border-neutral-200">
              <CardHeader className="flex-row items-center gap-3">
                <div className="p-2 rounded-md bg-[#D9C8A9]/60">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                {f.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <PodRoamLogo className="w-6 h-6" />
            <span className="font-medium">PodRoam</span>
          </div>
          <p>© {new Date().getFullYear()} PodRoam, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
