
import { useState, useEffect } from 'react';
import { Play, ArrowRight, Star, Zap, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: "/images/hero/hero.png",
      alt: "Bambu Lab A1 - Impressora 3D",
      title: "Bambu Lab A1",
      subtitle: "Multicolor & Inteligente",
      scale: "scale-150"
    },
    {
      src: "/images/hero/hero2.png", 
      alt: "Bambu Lab A1 Mini - Impressora 3D",
      title: "Bambu Lab A1 Mini",
      subtitle: "Compacta & Eficiente",
      scale: "scale-110"
    }
  ];

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "Impressão até 500mm/s" },
    { icon: <Shield className="h-5 w-5" />, text: "Auto-calibração inteligente" },
    { icon: <Clock className="h-5 w-5" />, text: "Entrega em 24-48h" }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">
                Tecnologia Bambu Lab Certificada
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Liberte sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                  Criatividade
                </span>
                com Impressão 3D
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transforme suas ideias em realidade com nossa tecnologia de ponta. 
                Impressão 3D profissional, multicolorida e de alta velocidade.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <div className="text-violet-400">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Ver Demonstração</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-gray-400">Entrega Média</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Hero Image Carousel */}
            <div className="relative">
              <div className="w-full h-[500px] flex items-center justify-center relative overflow-hidden">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full h-full object-contain drop-shadow-2xl ${image.scale} absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                  <h3 className="font-semibold">{images[currentImage].title}</h3>
                  <p className="text-sm opacity-80">{images[currentImage].subtitle}</p>
                </div>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-violet-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-violet-500 text-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-bold">Multicolor</div>
                <div className="text-xs opacity-80">16 cores simultâneas</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg">
                <div className="text-sm font-bold">Alta Velocidade</div>
                <div className="text-xs opacity-80">Até 500mm/s</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
