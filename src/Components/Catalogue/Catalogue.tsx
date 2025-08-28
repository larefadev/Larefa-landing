"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const Catalogue = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const categories = [
        {
            id: 1,
            name: "Suspensión y Dirección",
            image: "/Images/Cata-1.jpeg"
        },
        {
            id: 2,
            name: "Refrigeración",
            image: "/Images/Cata-3.jpeg"
        },
        {
            id: 3,
            name: "Frenos",
            image: "/Images/Cata-2.jpeg"
        },
        {
            id: 4,
            name: "Transmisión",
            image: "/Images/th.jpeg"
        },
        {
            id: 5,
            name: "Eléctrico",
            image: "/Images/Cata-6.jpeg"
        },
        {
            id: 6,
            name: "Motor",
            image: "/Images/Cata-7.jpeg"
        },
        {
            id: 7,
            name: "Colisión",
            image: "/Images/Cata-4.jpeg"
        },
        {
            id: 8,
            name: "Accesorios",
            image: "/Images/Cata-5.jpeg"
        }
    ];

    // Para mobile: dividir en grupos de 4 (2x2)
    const itemsPerPage = 4;
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const getCurrentPageItems = () => {
        const startIndex = currentPage * itemsPerPage;
        return categories.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = scrollContainerRef.current.offsetWidth;
            const newPage = Math.round(scrollLeft / cardWidth);
            setCurrentPage(newPage);
        }
    };

    const scrollToPage = (page: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: page * cardWidth,
                behavior: "smooth",
            });
            setCurrentPage(page);
        }
    };

    const nextPage = () => {
        const next = (currentPage + 1) % totalPages;
        scrollToPage(next);
    };

    const prevPage = () => {
        const prev = (currentPage - 1 + totalPages) % totalPages;
        scrollToPage(prev);
    };

    const goToPage = (page: number) => {
        scrollToPage(page);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-white-400">
            {/* Encabezado */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12">
                <div className="mb-6 lg:mb-0 lg:max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight">
                        Categorías Populares
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        Explora nuestras autopartes más demandadas — confiables diariamente por mecánicos y talleres por
                        su rendimiento, confiabilidad y disponibilidad rápida.
                    </p>
                </div>

                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-medium transition-colors duration-200 group self-start lg:self-auto text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg">
                    Explorar todo
                    <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>

            {/* Desktop Grid - Visible solo en lg+ */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group cursor-pointer"
                    >
                        {/* Contenedor de Imagen */}
                        <div className="relative bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-gray-100 border border-gray-100">
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
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-center leading-tight">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel con Touch - Visible solo en mobile/tablet */}
            <div className="lg:hidden">
                {/* Contenedor del carousel con scroll horizontal y touch */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex-shrink-0 w-full snap-center"
                            >
                                {/* Grid 2x2 para cada página */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                    {categories.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((category) => (
                                        <div
                                            key={category.id}
                                            className="group cursor-pointer"
                                        >
                                            {/* Contenedor de Imagen */}
                                            <div className="relative bg-gray-50 rounded-2xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3 md:mb-4 h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-gray-100 border border-gray-100">
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
                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-center px-1 leading-tight">
                                                {category.name}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots de navegación - Solo visible si hay más de una página */}
                    {totalPages > 1 && (
                        <div className="flex justify-center space-x-2 sm:space-x-3 mt-6">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
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