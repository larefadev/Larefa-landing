"use client";
import React, { useState } from 'react';

export const Opinion = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

    const goToTestimonial = (index : number) => {
        setCurrentTestimonial(index);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-black">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-base lg:text-lg">
                        Mecánicos, talleres y dueños de negocios confían en LA REFA para mantener sus operaciones en marcha.
                        Esto es lo que dicen sobre trabajar con nosotros:
                    </p>
                </div>

                {/* Desktop Grid - Visible solo en lg+ */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mx-auto object-cover"
                            />
                            <h3 className="mt-4 font-semibold text-black text-center">{testimonial.name}</h3>
                            <p className="text-gray-500 text-sm text-center">{testimonial.title}</p>
                            <p className="mt-4 text-gray-700 text-center leading-relaxed">
                                {testimonial.testimonial}
                            </p>
                            <span className="text-pink-400 text-4xl mt-4 block text-center">{'"'}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel - Visible solo en mobile/tablet */}
                <div className="lg:hidden">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                        <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-20 h-20 rounded-full mx-auto object-cover mb-6"
                        />
                        <h3 className="font-semibold text-black text-center text-lg">
                            {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-gray-500 text-sm text-center mb-6">
                            {testimonials[currentTestimonial].title}
                        </p>
                        <p className="text-gray-700 text-center leading-relaxed mb-6">
                            {testimonials[currentTestimonial].testimonial}
                        </p>
                        <span className="text-pink-400 text-6xl block text-center mb-8">{'"'}</span>
                    </div>

                    {/* Dots de navegación */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
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
