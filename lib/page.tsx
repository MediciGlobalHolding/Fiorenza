import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, BookOpen, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-[#BA0C2F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiorenzacoin-logo-emrryGCuvA4F21yOpi0XR8eaQGWf6v.png"
              alt="Fiorenza Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold">Fiorenza</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gold-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300">
                  Community
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-[#BA0C2F]/5 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4 text-[#BA0C2F]">New Age Renaissance</h1>
              <p className="text-xl mb-8 text-gray-700">Where classical wisdom meets modern innovation.</p>
              <Button className="bg-[#BA0C2F] hover:bg-[#BA0C2F]/90 text-white font-bold">Join the Renaissance</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiorenzacoin-logo-emrryGCuvA4F21yOpi0XR8eaQGWf6v.png"
                alt="Fiorenza Coin"
                width={400}
                height={400}
                className="w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#BA0C2F]">The Future of Digital Currency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#BA0C2F]/20 hover:border-[#BA0C2F] transition-colors">
              <CardContent className="p-6">
                <Coins className="w-12 h-12 text-[#BA0C2F] mb-4" />
                <h3 className="text-xl font-bold mb-2">Modern Trading</h3>
                <p>Experience seamless transactions with Renaissance-inspired security.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#BA0C2F]/20 hover:border-[#BA0C2F] transition-colors">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-[#BA0C2F] mb-4" />
                <h3 className="text-xl font-bold mb-2">Classical Wisdom</h3>
                <p>Built on timeless principles for the modern age.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#BA0C2F]/20 hover:border-[#BA0C2F] transition-colors">
              <CardContent className="p-6">
                <Download className="w-12 h-12 text-[#BA0C2F] mb-4" />
                <h3 className="text-xl font-bold mb-2">Future Ready</h3>
                <p>Pioneering the next evolution of digital currency.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#BA0C2F] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of the New Age Renaissance</h2>
          <p className="text-xl mb-8">Join us in revolutionizing the future of digital currency.</p>
          <Button className="bg-white hover:bg-gray-100 text-[#BA0C2F] font-bold">Get Started Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiorenzacoin-logo-emrryGCuvA4F21yOpi0XR8eaQGWf6v.png"
            alt="Fiorenza Logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <p className="text-[#BA0C2F]">&copy; 2025 Fiorenza Coin. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-[#BA0C2F] hover:text-[#BA0C2F]/80 mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-[#BA0C2F] hover:text-[#BA0C2F]/80 mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-[#BA0C2F] hover:text-[#BA0C2F]/80 mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

