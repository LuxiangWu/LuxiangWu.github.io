import { Linkedin, Phone, Mail, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#2A2D3E] text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between sticky top-0 bg-[#2A2D3E] z-50">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p0wpRwjooFeiqbBUeGgNpQItHFEnuM.png"
              alt="WeCareer Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-3xl">WeCareer</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="hover:text-gray-300 cursor-pointer">
            About
          </Link>
          <Link href="#services" className="hover:text-gray-300 cursor-pointer">
            Services
          </Link>
          <Link href="#contact" className="hover:text-gray-300 cursor-pointer">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-8 pt-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
          WeCareer network building and talent solutions
        </h1>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">WE CAREER, WE TOGETHER, WE GO FURTHER</p>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 pt-12 pb-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            At WeCareer, we support each other for any kind of needs in professional development. We believe everyone
            who is hardworking and purpose driven deserves a career they love. We will be your closest partner either
            you aim to go to the next level of your career or have a brilliant idea to realize.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-20 bg-[#2F3244]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Founder</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aecd38c7895aca2a7ddd692b4917733.jpg-Y8AHzaqEtjMbTjsMRPDotxoL8kNdm5.jpeg"
                alt="Chenxi Qiao - Founder and President of WeCareer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Chenxi Qiao</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The founder and president of WeCareer. Chenxi has extensive talent solution experience across China, the
                US, and Canada. She is a true believer of 1+1 {">"} 2, especially under a healthy network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#2F3244] p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="w-10 h-10 text-[#B4E4E4] mr-4" />
              <h3 className="text-2xl font-semibold">Career Development</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Are you a professional worrying about where you will be for the next stage, or just want to talk about any
              types of career problems you have met? No problem! We are here to help!
            </p>
          </div>
          <div className="bg-[#2F3244] p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-10 h-10 text-[#FFB584] mr-4" />
              <h3 className="text-2xl font-semibold">Career Orientation</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Are you a student wondering where you will be in the future? Or being thirsty of having straightforward
              guidance to open the door of your dream career? No problem! We are always here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-[#2F3244] scroll-mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <a
              href="https://www.linkedin.com/company/wecareerconsulting/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-[#2A2D3E] rounded-lg hover:bg-[#333747] transition-colors"
            >
              <Linkedin className="w-8 h-8 text-[#B4E4E4] mr-4" />
              <span className="text-lg">WeCareer Consulting</span>
            </a>

            <div className="flex items-center p-4 bg-[#2A2D3E] rounded-lg">
              <Phone className="w-8 h-8 text-[#FFB584] mr-4" />
              <span className="text-lg">438 525 6004</span>
            </div>

            <div className="flex items-center p-4 bg-[#2A2D3E] rounded-lg">
              <Mail className="w-8 h-8 text-[#E9E5F5] mr-4" />
              <span className="text-lg">tchenxiqiao@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

