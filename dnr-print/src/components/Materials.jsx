import React from 'react';
import { Thermometer, Shield, Zap, Droplets, Wrench, Palette } from 'lucide-react';

const Materials = () => {
  const materials = [
    {
      name: "PLA",
      fullName: "Ácido Polilático",
      icon: <Palette className="h-8 w-8 text-green-600" />,
      description: "Material biodegradável, fácil de imprimir e ideal para iniciantes",
      properties: {
        temperature: "190-220°C",
        bed: "50-60°C",
        strength: "Baixa-Média",
        flexibility: "Rígido"
      },
      applications: ["Protótipos", "Decoração", "Brinquedos", "Miniaturas"],
      colors: ["Branco", "Preto", "Vermelho", "Azul", "Verde", "Amarelo", "Transparente"],
      pros: ["Fácil impressão", "Sem odor", "Biodegradável", "Boa qualidade superficial"],
      cons: ["Baixa resistência ao calor", "Quebradiço", "Não adequado para peças funcionais"]
    },
    {
      name: "ABS",
      fullName: "Acrilonitrila Butadieno Estireno",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      description: "Plástico resistente e durável, ideal para peças funcionais",
      properties: {
        temperature: "220-250°C",
        bed: "80-100°C",
        strength: "Alta",
        flexibility: "Flexível"
      },
      applications: ["Peças automotivas", "Carcaças", "Ferramentas", "Peças funcionais"],
      colors: ["Branco", "Preto", "Cinza", "Vermelho", "Azul"],
      pros: ["Alta resistência", "Resistente ao calor", "Usinável", "Durável"],
      cons: ["Odor durante impressão", "Warping", "Requer mesa aquecida"]
    },
    {
      name: "PETG",
      fullName: "Polietileno Tereftalato Glicol",
      icon: <Droplets className="h-8 w-8 text-purple-600" />,
      description: "Combina facilidade do PLA com resistência do ABS",
      properties: {
        temperature: "220-250°C",
        bed: "70-80°C",
        strength: "Alta",
        flexibility: "Semi-flexível"
      },
      applications: ["Recipientes", "Peças mecânicas", "Protótipos funcionais", "Embalagens"],
      colors: ["Transparente", "Branco", "Preto", "Azul", "Verde"],
      pros: ["Transparente", "Resistente quimicamente", "Reciclável", "Sem warping"],
      cons: ["Pode grudar na mesa", "Sensível à velocidade", "Mais caro que PLA"]
    },
    {
      name: "TPU",
      fullName: "Poliuretano Termoplástico",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      description: "Material flexível e elástico, similar à borracha",
      properties: {
        temperature: "210-230°C",
        bed: "40-60°C",
        strength: "Média",
        flexibility: "Muito flexível"
      },
      applications: ["Capas de celular", "Solas", "Vedações", "Brinquedos flexíveis"],
      colors: ["Preto", "Branco", "Vermelho", "Azul", "Transparente"],
      pros: ["Muito flexível", "Resistente à abrasão", "Durável", "Atóxico"],
      cons: ["Difícil impressão", "Lento", "Requer configuração específica"]
    },
    {
      name: "Nylon",
      fullName: "Poliamida",
      icon: <Wrench className="h-8 w-8 text-gray-600" />,
      description: "Material industrial de alta performance e resistência",
      properties: {
        temperature: "240-260°C",
        bed: "80-100°C",
        strength: "Muito alta",
        flexibility: "Resistente"
      },
      applications: ["Engrenagens", "Rolamentos", "Peças industriais", "Ferramentas"],
      colors: ["Natural", "Preto", "Branco"],
      pros: ["Extremamente resistente", "Usinável", "Resistente químico", "Durável"],
      cons: ["Difícil impressão", "Absorve umidade", "Requer equipamento avançado"]
    },
    {
      name: "Wood Fill",
      fullName: "Filamento com Fibra de Madeira",
      icon: <Thermometer className="h-8 w-8 text-amber-600" />,
      description: "PLA misturado com fibras de madeira real",
      properties: {
        temperature: "190-220°C",
        bed: "50-60°C",
        strength: "Média",
        flexibility: "Rígido"
      },
      applications: ["Decoração", "Móveis em miniatura", "Arte", "Protótipos"],
      colors: ["Madeira clara", "Madeira escura", "Bambu"],
      pros: ["Aparência de madeira", "Pode ser lixado", "Cheiro de madeira", "Único"],
      cons: ["Pode entupir bico", "Menos resistente", "Requer cuidados especiais"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Materiais Disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com uma ampla variedade de materiais para atender 
            diferentes necessidades e aplicações dos seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  {material.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{material.name}</h3>
                  <p className="text-sm text-gray-600">{material.fullName}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {material.description}
              </p>

              {/* Properties */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Propriedades:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temp:</span>
                    <span className="font-medium">{material.properties.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mesa:</span>
                    <span className="font-medium">{material.properties.bed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Força:</span>
                    <span className="font-medium">{material.properties.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flex:</span>
                    <span className="font-medium">{material.properties.flexibility}</span>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Aplicações:</h4>
                <div className="flex flex-wrap gap-1">
                  {material.applications.slice(0, 3).map((app, appIndex) => (
                    <span key={appIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {app}
                    </span>
                  ))}
                  {material.applications.length > 3 && (
                    <span className="text-gray-500 text-xs">+{material.applications.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Cores disponíveis:</h4>
                <div className="flex flex-wrap gap-1">
                  {material.colors.slice(0, 4).map((color, colorIndex) => (
                    <span key={colorIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                      {color}
                    </span>
                  ))}
                  {material.colors.length > 4 && (
                    <span className="text-gray-500 text-xs">+{material.colors.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Pros/Cons */}
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <h5 className="font-medium text-green-700 mb-1 text-xs">Vantagens:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {material.pros.slice(0, 2).map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-700 mb-1 text-xs">Limitações:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {material.cons.slice(0, 2).map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não sabe qual material escolher?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe pode te ajudar a escolher o material ideal para seu projeto.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Consultar Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;