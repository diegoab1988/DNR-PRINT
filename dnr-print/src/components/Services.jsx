import React from 'react';
import { Printer, Palette, Wrench, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Printer className="h-12 w-12 text-violet-600" />,
      title: "Impressão 3D",
      description: "Impressão de alta qualidade em diversos materiais como PLA, ABS, PETG e materiais especiais.",
      features: ["Múltiplas cores", "Alta precisão", "Diversos materiais"]
    },
    {
      icon: <Palette className="h-12 w-12 text-violet-600" />,
      title: "Design 3D",
      description: "Criação e modelagem 3D personalizada para seus projetos e necessidades específicas.",
      features: ["Modelagem custom", "Otimização para impressão", "Revisões ilimitadas"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-violet-600" />,
      title: "Prototipagem",
      description: "Desenvolvimento rápido de protótipos funcionais para testes e validação de conceitos.",
      features: ["Prototipagem rápida", "Testes funcionais", "Iterações ágeis"]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-violet-600" />,
      title: "Consultoria",
      description: "Consultoria especializada em impressão 3D, materiais e otimização de processos.",
      features: ["Análise técnica", "Recomendações", "Suporte completo"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em impressão 3D para 
            atender todas as suas necessidades, desde prototipagem até produção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;