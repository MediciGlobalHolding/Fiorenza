import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Download, Globe, Shield, Coins, Users } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header with subtle Renaissance background */}
      <header className="relative bg-[#BA0C2F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Renaissance+Pattern"
            alt="Renaissance Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Fiorenza Documentation</h1>
          <p className="text-xl opacity-90 mb-8">The Renaissance of Cryptocurrency</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-[#BA0C2F] hover:bg-gray-100 border border-gold-500">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Choose Your Wallet
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        {/* Quick Start Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Quick Start Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">1. Choose a Wallet</h3>
                <p className="mb-4">Select a wallet compatible with Fiorenza (FZAC) tokens.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  Wallet Guide
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">2. Get FZAC</h3>
                <p className="mb-4">Buy or trade for Fiorenza tokens on supported exchanges.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  How to Buy
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">3. Use and Store</h3>
                <p className="mb-4">Learn how to use and securely store your FZAC tokens.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  Usage Guide
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">4. Join Community</h3>
                <p className="mb-4">Connect with other Fiorenza enthusiasts and stay updated.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  Community Hub
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section with Renaissance-inspired divider */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Why Fiorenza?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Globe className="w-8 h-8 text-[#BA0C2F] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                <p>Access Fiorenza from anywhere in the world, bridging Renaissance ideals with modern finance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-[#BA0C2F] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p>State-of-the-art cryptography ensures your assets are protected like a Medici vault.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Coins className="w-8 h-8 text-[#BA0C2F] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Innovation</h3>
                <p>Experience DeFi solutions inspired by Renaissance financial innovations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-[#BA0C2F] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Community Governance</h3>
                <p>Participate in decision-making, echoing the civic engagement of Renaissance city-states.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Renaissance-inspired divider */}
        <div className="my-12 flex items-center justify-center">
          <div className="h-px bg-gold-300 w-1/4"></div>
          <Image
            src="/placeholder.svg?height=40&width=40&text=F"
            alt="Fiorenza Emblem"
            width={40}
            height={40}
            className="mx-4"
          />
          <div className="h-px bg-gold-300 w-1/4"></div>
        </div>

        {/* Resources Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Explore Fiorenza</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Whitepaper</h3>
                <p className="mb-4">Dive deep into the philosophy and technology behind Fiorenza.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  Read Whitepaper
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Developer Resources</h3>
                <p className="mb-4">Access tools and documentation to build on the Fiorenza network.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  Developer Portal
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gold-300 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">FAQs</h3>
                <p className="mb-4">Find answers to common questions about Fiorenza.</p>
                <Button
                  variant="outline"
                  className="w-full text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white"
                >
                  View FAQs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">Join the Fiorenza Community</h2>
          <div className="text-center">
            <p className="mb-8 text-xl">Be part of the New Age Renaissance in cryptocurrency.</p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-[#BA0C2F] hover:bg-[#BA0C2F]/90 text-white border border-gold-500">
                Forum
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-[#BA0C2F] border-[#BA0C2F] hover:bg-[#BA0C2F] hover:text-white">
                Social Media
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Renaissance-inspired border */}
      <footer className="bg-gray-100 py-12 mt-20 border-t-4 border-gold-500">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiorenzacoin-logo-emrryGCuvA4F21yOpi0XR8eaQGWf6v.png"
            alt="Fiorenza Logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <p className="text-[#BA0C2F] mb-4">&copy; 2025 Fiorenza Coin. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#BA0C2F]">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-[#BA0C2F]">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-[#BA0C2F]">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

