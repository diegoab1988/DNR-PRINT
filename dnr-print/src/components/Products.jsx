import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Bambu Lab A1",
      subtitle: "Impressora 3D Multicolor",
      price: "A partir de R$ 2.999",
      image: "/api/placeholder/400/300",
      features: [
        "Impressão multicolor automática",
        "Velocidade até 500mm/s",
        "Auto-calibração",
        "Conectividade Wi-Fi",
        "Detecção de falhas"
      ],
      specs: {
        "Volume de Impressão": "256×256×256 mm",
        "Precisão": "±0.1mm",
        "Materiais": "PLA, PETG, ABS, TPU",
        "Conectividade": "Wi-Fi, USB"
      },
      badge: "Mais Popular",
      badgeColor: "bg-violet-500"
    },
    {
      name: "Bambu Lab X1 Carbon",
      subtitle: "Impressora 3D Profissional",
      price: "A partir de R$ 4.999",
      image: "/api/placeholder/400/300",
      features: [
        "Sistema AMS para 16 cores",
        "Velocidade até 500mm/s",
        "Câmera integrada",
        "Filtro de carvão ativado",
        "Detecção de espaguete"
      ],
      specs: {
        "Volume de Impressão": "256×256×256 mm",
        "Precisão": "±0.1mm",
        "Materiais": "PLA, PETG, ABS, PC, PA",
        "Conectividade": "Wi-Fi, Ethernet, USB"
      },
      badge: "Profissional",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossas Impressoras 3D
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilizamos as mais avançadas impressoras 3D do mercado para garantir 
            qualidade excepcional em todos os seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10`}>
                  {product.badge}
                </div>
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Zap className="h-12 w-12" />
                    </div>
                    <p className="text-sm">Imagem da {product.name}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{product.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-violet-600">
                      {product.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Principais Recursos:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Especificações:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(product.specs).map(([key, value], specIndex) => (
                      <div key={specIndex} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}:</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procura? Temos outras opções disponíveis.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Ver Todos os Equipamentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;