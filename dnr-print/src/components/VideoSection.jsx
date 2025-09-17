import { useState } from 'react';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';
import thumb1 from '../assets/thumbnails/thumb1.png';
import thumb2 from '../assets/thumbnails/thumb2.png';
import thumb3 from '../assets/thumbnails/thumb3.png';

const VideoSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const videos = [
    {
      src: "/images/hero/videos/hero_video.mp4",
      title: "Bambu Lab A1 - Impressão Multicolor",
      description: "Veja a A1 imprimindo em múltiplas cores automaticamente",
      duration: "2:30"
    },
    {
      src: "/images/hero/videos/hero_video2.mp4",
      title: "Bambu Lab A1 Mini - Compacta e Eficiente", 
      description: "A1 Mini em ação - perfeita para espaços menores",
      duration: "1:45"
    },
    {
      src: "/images/hero/videos/hero_video3.mp4",
      title: "Recursos Avançados - Bambu Lab",
      description: "Tecnologias e funcionalidades que fazem a diferença",
      duration: "3:15"
    }
  ];

  const openVideoModal = (index) => {
    setSelectedVideoIndex(index);
    setIsVideoModalOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Veja as Impressoras em Ação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Assista aos vídeos e descubra como as impressoras Bambu Lab podem 
            revolucionar seus projetos com tecnologia de ponta.
          </p>
        </div>

        {/* Cards com Play Button Menor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group"
            onClick={() => openVideoModal(0)}
          >
            <img 
              src={thumb1} 
              alt="Thumbnail 1"
              className="w-full h-auto transition-transform duration-300"
            />
            {/* Play Button Menor com Relevo e Brilho */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-lg opacity-50 scale-125"></div>
                {/* Botão menor com relevo */}
                <div className="relative text-violet-600 p-3 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300 border-3 border-violet-600 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm">
                  <Play className="h-8 w-8 ml-0.5 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group"
            onClick={() => openVideoModal(1)}
          >
            <img 
              src={thumb2} 
              alt="Thumbnail 2"
              className="w-full h-auto transition-transform duration-300"
            />
            {/* Play Button Menor com Relevo e Brilho */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-lg opacity-50 scale-125"></div>
                {/* Botão menor com relevo */}
                <div className="relative text-violet-600 p-3 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300 border-3 border-violet-600 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm">
                  <Play className="h-8 w-8 ml-0.5 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group"
            onClick={() => openVideoModal(2)}
          >
            <img 
              src={thumb3} 
              alt="Thumbnail 3"
              className="w-full h-auto transition-transform duration-300"
            />
            {/* Play Button Menor com Relevo e Brilho */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-lg opacity-50 scale-125"></div>
                {/* Botão menor com relevo */}
                <div className="relative text-violet-600 p-3 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300 border-3 border-violet-600 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm">
                  <Play className="h-8 w-8 ml-0.5 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Impressionado com a Tecnologia?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato e descubra como essas impressoras podem transformar seus projetos.
            </p>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videos={videos}
        initialIndex={selectedVideoIndex}
      />
    </section>
  );
};

export default VideoSection;