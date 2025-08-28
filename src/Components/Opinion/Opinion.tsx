"use client";
import React, { useState, useRef, useEffect } from 'react';

export const Opinion = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const testimonials = [
        {
            id: 1,
            name: "Carlos Méndez",
            title: "Mecánico Independiente",
            image: "/Sujeto1.jpeg",
            testimonial: "Solía perder horas buscando las piezas correctas. Ahora solo llamo a LA REFA y me las entregan en menos de una hora. Es como tener un almacén sin los costos."
        },
        {
            id: 2,
            name: "Jorge Rivera",
            title: "Gerente de Repuestos, Urban Drive",
            image: "/sujeto3.jpeg",
            testimonial: "Saben exactamente lo que necesito, sin adivinanzas. El equipo de LA REFA me trata como prioridad siempre. Esa confianza marca toda la diferencia en mi trabajo."
        },
        {
            id: 3,
            name: "Sandra León",
            title: "Dueña, Taller Méndez",
            image: "/Sujeto4.jpeg",
            testimonial: "Hemos trabajado con otros proveedores antes, pero LA REFA está en otro nivel. Su inventario, velocidad de entrega y soporte los convierten en un verdadero socio de negocio."
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = scrollContainerRef.current.offsetWidth;
            const newTestimonial = Math.round(scrollLeft / cardWidth);
            setCurrentTestimonial(newTestimonial);
        }
    };

    const scrollToTestimonial = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
            });
            setCurrentTestimonial(index);
        }
    };

    const goToTestimonial = (index: number) => {
        scrollToTestimonial(index);
    };

    const nextTestimonial = () => {
        const next = (currentTestimonial + 1) % testimonials.length;
        scrollToTestimonial(next);
    };

    const prevTestimonial = () => {
        const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        scrollToTestimonial(prev);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="text-gray-500 mt-3 sm:mt-4 md:mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        Mecánicos, talleres y dueños de negocios confían en LA REFA para mantener sus operaciones en marcha.
                        Esto es lo que dicen sobre trabajar con nosotros:
                    </p>
                </div>

                {/* Desktop Grid - Visible solo en lg+ */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mx-auto object-cover"
                            />
                            <h3 className="mt-3 sm:mt-4 md:mt-5 font-semibold text-black text-center text-base sm:text-lg md:text-xl">{testimonial.name}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center">{testimonial.title}</p>
                            <p className="mt-3 sm:mt-4 md:mt-5 text-gray-700 text-center leading-relaxed text-sm sm:text-base md:text-lg">
                                {testimonial.testimonial}
                            </p>
                            <span className="text-pink-400 text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-4 md:mt-5 block text-center">{'"'}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel con Touch - Visible solo en mobile/tablet */}
                <div className="lg:hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 w-[85vw] max-w-md snap-center"
                            >
                                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 h-full">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover mb-4 sm:mb-6 md:mb-8"
                                    />
                                    <h3 className="font-semibold text-black text-center text-base sm:text-lg md:text-xl mb-2 sm:mb-4 md:mb-6">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center mb-4 sm:mb-6 md:mb-8">
                                        {testimonial.title}
                                    </p>
                                    <p className="text-gray-700 text-center leading-relaxed mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                                        {testimonial.testimonial}
                                    </p>
                                    <span className="text-pink-400 text-4xl sm:text-5xl md:text-6xl block text-center">{'"'}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots de navegación */}
                    <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8 md:mt-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                                    index === currentTestimonial
                                        ? 'bg-red-500'
                                        : 'bg-red-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
