"use client";
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const Catalogue = () => {
    const [currentPage, setCurrentPage] = useState(0);

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

    // Para mobile: dividir en grupos de 4 (2x2)
    const itemsPerPage = 4;
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const getCurrentPageItems = () => {
        const startIndex = currentPage * itemsPerPage;
        return categories.slice(startIndex, startIndex + itemsPerPage);
    };

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (page : number) => {
        setCurrentPage(page);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
            {/* Encabezado */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                <div className="mb-6 lg:mb-0 lg:max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Categorías Populares
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        Explora nuestras autopartes más demandadas — confiables diariamente por mecánicos y talleres por
                        su rendimiento, confiabilidad y disponibilidad rápida.
                    </p>
                </div>

                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 group self-start lg:self-auto">
                    Explorar todo
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>

            {/* Desktop Grid - Visible solo en lg+ */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group cursor-pointer"
                    >
                        {/* Contenedor de Imagen */}
                        <div className="relative bg-gray-50 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-gray-100 border border-gray-100">
                            {/* Imagen del Producto */}
                            <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="max-w-full max-h-full object-contain w-auto h-auto"
                                />
                            </div>

                            {/* Overlay del hover */}
                            <div className="absolute inset-0 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Nombre de la Categoría */}
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-center">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel - Visible solo en mobile/tablet */}
            <div className="lg:hidden">
                {/* Contenedor del carousel con controles */}
                <div className="relative">
                    {/* Grid 2x2 para mobile */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {getCurrentPageItems().map((category) => (
                            <div
                                key={category.id}
                                className="group cursor-pointer"
                            >
                                {/* Contenedor de Imagen */}
                                <div className="relative bg-gray-50 rounded-2xl p-4 sm:p-6 mb-3 h-40 sm:h-48 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-gray-100 border border-gray-100">
                                    {/* Imagen del Producto */}
                                    <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="max-w-full max-h-full object-contain w-auto h-auto"
                                        />
                                    </div>

                                    {/* Overlay del hover */}
                                    <div className="absolute inset-0 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Nombre de la Categoría */}
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-center px-1">
                                    {category.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Dots de navegación - Solo visible si hay más de una página */}
                    {totalPages > 1 && (
                        <div className="flex justify-center space-x-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        index === currentPage
                                            ? 'bg-red-500'
                                            : 'bg-red-300'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};