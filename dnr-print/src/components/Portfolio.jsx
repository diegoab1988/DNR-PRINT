import React, { useState } from 'react';
import { Eye, Download, Clock, User } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'prototipos', name: 'Protótipos' },
    { id: 'decoracao', name: 'Decoração' },
    { id: 'funcional', name: 'Peças Funcionais' },
    { id: 'miniatura', name: 'Miniaturas' }
  ];

  const projects = [
    {
      id: 1,
      title: "Protótipo de Drone",
      category: "prototipos",
      image: "/api/placeholder/400/300",
      description: "Chassi completo para drone de corrida em fibra de carbono",
      client: "TechDrone Ltd",
      duration: "3 dias",
      material: "PETG Carbon Fiber"
    },
    {
      id: 2,
      title: "Luminária Decorativa",
      category: "decoracao",
      image: "/api/placeholder/400/300",
      description: "Luminária personalizada com padrões geométricos complexos",
      client: "Design Studio",
      duration: "2 dias",
      material: "PLA Translúcido"
    },
    {
      id: 3,
      title: "Engrenagens Industriais",
      category: "funcional",
      image: "/api/placeholder/400/300",
      description: "Conjunto de engrenagens para máquina industrial",
      client: "Indústria XYZ",
      duration: "5 dias",
      material: "Nylon PA12"
    },
    {
      id: 4,
      title: "Miniatura Arquitetônica",
      category: "miniatura",
      image: "/api/placeholder/400/300",
      description: "Maquete detalhada de edifício comercial",
      client: "Arquitetura & Cia",
      duration: "7 dias",
      material: "PLA Branco"
    },
    {
      id: 5,
      title: "Carcaça Eletrônica",
      category: "funcional",
      image: "/api/placeholder/400/300",
      description: "Case protetor para dispositivo eletrônico personalizado",
      client: "StartupTech",
      duration: "2 dias",
      material: "ABS Preto"
    },
    {
      id: 6,
      title: "Peça Artística",
      category: "decoracao",
      image: "/api/placeholder/400/300",
      description: "Escultura decorativa com múltiplas cores",
      client: "Galeria Arte",
      duration: "4 dias",
      material: "PLA Multicolor"
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que já realizamos. Cada peça é única 
            e desenvolvida com precisão e cuidado.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              {/* Imagem */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Eye className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Projeto: {project.title}</p>
                  </div>
                </div>
                
                {/* Overlay com ações */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Detalhes */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Material */}
                <div className="flex items-center justify-between">
                  <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-medium">
                    {project.material}
                  </span>
                  <button className="text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors duration-200">
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Portfolio;