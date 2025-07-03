"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Sparkles,
  Rss,
  Bell,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-tech-blockchain-afr.png"
              alt="TechBlockchainAfr Logo"
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="font-bold text-lg">TechBlockchainAfr</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium text-orange-500">
              Blog
            </Link>
            <Link href="/#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">
                Écouter Maintenant
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-6 animate-pulse">
                📝 Blog TechBlockchainAfr
              </Badge>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Bientôt Disponible
                </span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Notre blog arrive bientôt avec des analyses approfondies, des actualités blockchain, et des guides
                exclusifs pour la communauté francophone africaine.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Youtube className="w-5 h-5 mr-2" />
                    Découvrir le Podcast
                  </Button>
                </Link>
                <Link href="/evenements">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Voir les Événements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />À Venir
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ce Qui Vous <span className="text-orange-500">Attend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez le contenu exclusif que nous préparons pour enrichir vos connaissances blockchain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <TrendingUp className="w-8 h-8 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Analyses de Marché</h3>
                <p className="text-gray-600">
                  Analyses techniques et fondamentales des cryptomonnaies avec un focus sur l'écosystème africain.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Rss className="w-8 h-8 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Actualités Blockchain</h3>
                <p className="text-gray-600">
                  Les dernières nouvelles du monde blockchain, DeFi, NFT et Web3 avec une perspective africaine.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Users className="w-8 h-8 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Interviews Exclusives</h3>
                <p className="text-gray-600">
                  Rencontres avec les leaders blockchain africains et les innovateurs du continent.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Guides Pratiques</h3>
                <p className="text-gray-600">
                  Tutoriels step-by-step pour débuter et maîtriser les outils blockchain et DeFi.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Bell className="w-8 h-8 text-red-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Alertes Projets</h3>
                <p className="text-gray-600">
                  Découvrez en avant-première les projets blockchain prometteurs en Afrique.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Sparkles className="w-8 h-8 text-yellow-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Contenu Exclusif</h3>
                <p className="text-gray-600">
                  Accès privilégié à des analyses et rapports exclusifs pour les abonnés newsletter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Soyez les Premiers Informés</h2>
              <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir une notification dès que notre blog sera lancé, ainsi
                que nos meilleurs contenus directement dans votre boîte mail.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <NewsletterForm source="blog" className="bg-white/10 backdrop-blur-sm border-white/20" />
            </div>

            <div className="mt-8 text-orange-100 text-sm">
              <p>🎁 Les premiers abonnés recevront un guide exclusif sur les opportunités blockchain en Afrique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">En attendant, suivez-nous sur nos réseaux sociaux</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Restez connectés avec notre communauté et ne manquez aucune actualité blockchain.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.youtube.com/@techblockchainaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
            >
              <Youtube className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors group"
            >
              <svg
                className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/techblockchainaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://x.com/tech_blockaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group"
            >
              <Twitter className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.instagram.com/techblockchainafr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors group"
            >
              <Instagram className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo-tech-blockchain-afr.png"
                  alt="TechBlockchainAfr Logo"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <span className="font-bold text-lg">TechBlockchainAfr</span>
              </div>
              <p className="text-gray-400 mb-6">
                La référence podcast blockchain en Afrique francophone. Éducation, innovation et communauté au cœur de
                notre mission.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/tech_blockaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/techblockchainafr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contenu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/@techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Tous les Podcasts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Épisodes Récents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Interviews Exclusives
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Analyses de Marché
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Guides Débutants
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Communauté</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="/evenements" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Partenariats
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">technologieblockchainafriquefr@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">+225 0758473042</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                  <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechBlockchainAfr. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
