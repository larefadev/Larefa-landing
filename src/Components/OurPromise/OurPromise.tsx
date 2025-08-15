"use client";
import { useState, useRef, useEffect } from "react";
import { Bolt, Globe, Wrench, Handshake } from "lucide-react";

export const OurPromise = () => {
    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef(null);

    const promises = [
        {
            icon: <Bolt className="w-8 h-8 text-red-500" />,
            title: "Entrega Ultra-Rápida (1–2 Horas)",
            description:
                "No esperes días — ofrecemos entrega ultra-rápida a tu taller o garage, usualmente en 1–2 horas. Porque cada hora ahorrada mantiene tu negocio funcionando.",
            bg: "bg-gray-50",
        },
        {
            icon: <Wrench className="w-8 h-8 text-white" />,
            title: "Especialistas en Suspensión, Dirección, Frenos y Balatas",
            description:
                "Mantenemos un inventario profundo obteniendo marcas confiables tanto localmente como en el extranjero. Sin importar el vehículo o modelo, hacemos lo imposible por conseguirte la pieza que necesitas — rápido y confiable.",
            bg: "bg-red-600 text-white",
        },
        {
            icon: <Globe className="w-8 h-8 text-red-500" />,
            title: "Conseguimos Piezas Local e Internacionalmente",
            description:
                "No somos generalistas — nos especializamos en las piezas que más importan para la seguridad y el rendimiento. Ya sea un trabajo de suspensión o cambio de frenos, manejamos las marcas en las que puedes confiar.",
            bg: "bg-gray-50",
        },
        {
            icon: <Handshake className="w-8 h-8 text-red-500" />,
            title: "Tu Socio de Confianza para Mecánicos",
            description:
                "Somos más que una tienda — somos tu sistema de apoyo. Desde conseguir piezas raras hasta brindar orientación rápida, trabajamos como una extensión de tu equipo para ayudarte a servir mejor a tus clientes.",
            bg: "bg-gray-50",
        },
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft:number = scrollContainerRef.current.scrollLeft;
            const cardWidth:number = scrollContainerRef.current.offsetWidth;
            const newSlide = Math.round(scrollLeft / cardWidth);
            setCurrent(newSlide);
        }
    };

    const scrollToSlide = (index : number) => {
        if (scrollContainerRef.current) {
            const cardWidth: number = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrent(index);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Nuestra Promesa Para Ti
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Cuando eliges LA REFA, no solo estás comprando piezas — estás
                    invirtiendo en confiabilidad, servicio y velocidad. Esto es lo que
                    entregamos cada día:
                </p>

                {/* Vista Desktop - Grid normal */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-6 mt-10">
                    {promises.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-md shadow-sm ${item.bg}`}
                        >
                            <div className="flex flex-col items-start gap-4">
                                {item.icon}
                                <div>
                                    <h3
                                        className={`text-lg font-semibold ${
                                            item.bg.includes("red")
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`mt-2 text-sm ${
                                            item.bg.includes("red")
                                                ? "text-red-100"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vista Móvil - Scroll horizontal */}
                <div className="sm:hidden mt-10">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {promises.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-[85vw] max-w-sm p-6 rounded-xl shadow-sm snap-center ${item.bg}`}
                            >
                                <div className="flex flex-col items-start gap-4">
                                    {item.icon}
                                    <div>
                                        <h3
                                            className={`text-lg font-bold mb-3 ${
                                                item.bg.includes("red")
                                                    ? "text-white"
                                                    : "text-gray-900"
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`text-sm leading-relaxed ${
                                                item.bg.includes("red")
                                                    ? "text-red-100"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Puntos de navegación */}
                    <div className="flex justify-center gap-2 mt-6">
                        {promises.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToSlide(i)}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    current === i ? "bg-red-500" : "bg-red-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
