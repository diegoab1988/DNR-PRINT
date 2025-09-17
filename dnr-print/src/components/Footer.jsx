import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Logo component reutilizado do Header
  const Logo = ({ size = 'small', className = '' }) => {
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

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Impressão 3D",
    "Design 3D",
    "Prototipagem",
    "Consultoria"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Logo size="small" className="mb-4" />
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Especialistas em impressão 3D, oferecendo soluções inovadoras 
              com tecnologia de ponta e atendimento personalizado.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@dnrprint.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DNR-PRINT. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;