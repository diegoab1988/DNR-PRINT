import React, { useState } from 'react'
import { Menu, X, Phone, Users, Home } from 'lucide-react'

export function Header({ 'data-id': dataId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Logo dentro do Header
  const Logo = ({ size = 'medium', className = '' }) => {
    const sizeClasses = {
      small: 'text-xl',
      medium: 'text-3xl',
      large: 'text-5xl',
    }
    const iconSizes = {
      small: 'w-8 h-8',
      medium: 'w-10 h-10',
      large: 'w-14 h-14',
    }
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`relative ${iconSizes[size]}`}>
          <div className="absolute bottom-0 w-full h-1/4 bg-blue-700 rounded-b"></div>
          <div className="absolute bottom-1/4 w-full h-1/2 bg-blue-600 rounded-sm"></div>
          <div className="absolute top-0 w-full h-1/4 bg-gray-700 rounded-t-sm">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1/2 bg-gray-900"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 bg-blue-300"></div>
          <div className="absolute left-1/6 top-1/4 bottom-1/4 w-1 bg-gray-400"></div>
          <div className="absolute right-1/6 top-1/4 bottom-1/4 w-1 bg-gray-400"></div>
        </div>
        <div className="relative">
          <h1 className={`font-bold tracking-tight ${sizeClasses[size]} font-poppins`}>
            <span className="text-blue-600">DNR</span>
            <span className="relative px-1 -mx-1">
              <span className="absolute inset-0 bg-blue-100 transform -skew-x-12 rounded-md -z-10"></span>
              <span className="relative text-blue-800">-</span>
            </span>
            <span className="text-gray-800">PRINT</span>
          </h1>
          <div className="absolute -top-1 -right-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full absolute -right-1 -top-1"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header data-id={dataId} className="bg-white shadow-lg border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo size="medium" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              <Home className="h-4 w-4" /><span>Home</span>
            </a>
            <a href="#quem-somos" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              <Users className="h-4 w-4" /><span>Quem Somos</span>
            </a>
            <a href="#contato" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              <Phone className="h-4 w-4" /><span>Contato</span>
            </a>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
              Solicitar Orçamento
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                <Home className="h-4 w-4" /><span>Home</span>
              </a>
              <a href="#quem-somos" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                <Users className="h-4 w-4" /><span>Quem Somos</span>
              </a>
              <a href="#contato" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                <Phone className="h-4 w-4" /><span>Contato</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}