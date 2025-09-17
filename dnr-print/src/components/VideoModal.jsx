import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!isOpen || !videos || videos.length === 0) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors duration-200 z-10"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Video Info */}
        <div className="absolute -top-12 left-0 text-white z-10">
          <h3 className="text-lg font-semibold">{currentVideo.title}</h3>
          <p className="text-sm opacity-80">{currentVideoIndex + 1} de {videos.length}</p>
        </div>

        {/* Navigation Arrows */}
        {videos.length > 1 && (
          <>
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}

        {/* Video Container */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <video
            key={currentVideo.src} // Force re-render when video changes
            className="w-full h-auto max-h-[80vh] rounded-lg"
            controls
            autoPlay
            muted
            preload="metadata"
          >
            <source src={currentVideo.src} type="video/mp4" />
            <p className="text-white p-4 bg-black rounded-lg">
              Seu navegador não suporta o elemento de vídeo.
            </p>
          </video>
        </div>

        {/* Video Indicators */}
        {videos.length > 1 && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;