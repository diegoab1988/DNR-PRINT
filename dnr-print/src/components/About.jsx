import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Equipe Especializada",
      description: "Profissionais experientes em impressão 3D e design"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Qualidade Premium",
      description: "Materiais de alta qualidade e acabamento perfeito"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Entrega Rápida",
      description: "Prazos otimizados sem comprometer a qualidade"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Garantia Total",
      description: "Garantia completa em todos os nossos serviços"
    }
  ];

  return (
    <section id="quem-somos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quem Somos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A DNR-PRINT é especializada em soluções de impressão 3D, oferecendo 
            serviços profissionais com tecnologia de ponta e atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;