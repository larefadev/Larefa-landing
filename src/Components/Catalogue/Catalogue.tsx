import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from "next/image";

export const Catalogue = () => {
    const categories = [
        {
            id: 1,
            name: "Amortiguadores",
            image: "/Rectangle1.png"
        },
        {
            id: 2,
            name: "Balatas",
            image: "/Rectangle3.png"
        },
        {
            id: 3,
            name: "Bases de Amortiguador",
            image: "/Rectangle4.png"
        },
        {
            id: 4,
            name: "Rótulas",
            image: "/Rectangle5.png"
        },
        {
            id: 5,
            name: "Terminales de Dirección",
            image: "/Rectangle7.png"
        },
        {
            id: 6,
            name: "Cubos de Rueda",
            image: "/Rectangle1.png"
        },
        {
            id: 7,
            name: "Flechas CV",
            image: "/Rectangle4.png"
        },
        {
            id: 8,
            name: "Brazos de Control",
            image: "/Rectangle3.png"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
            {/* Encabezado */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                <div className="mb-6 lg:mb-0 lg:max-w-2xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Categorías Populares
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Explora nuestras autopartes más demandadas — confiables diariamente por mecánicos y talleres por
                        su rendimiento, confiabilidad y disponibilidad rápida.
                    </p>
                </div>

                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 group">
                    Explorar todo
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>

            {/* Grid de Categorías */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group cursor-pointer"
                    >
                        {/* Contenedor de Imagen */}
                        <div className="relative bg-white-100 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-gray-50">
                            {/* Imagen del Producto */}
                            <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={400}
                                    height={400}
                                    className="max-w-full max-h-full object-contain w-auto h-auto"
                                />
                            </div>

                            {/* Overlay del hover */}
                            <div className="absolute inset-0 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Nombre de la Categoría */}
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};