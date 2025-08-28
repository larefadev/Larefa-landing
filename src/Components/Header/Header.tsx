"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ScrollAnimation } from "@/Components/Animations";
import { AnimatedNavbar } from "./AnimatedNavbar";

export const Header = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="relative w-full h-screen text-white">
            {/* Imagen de fondo */}
            <Image
                src="/HeroSection.png"
                alt="Fondo del hero"
                layout="fill"
                objectFit="cover"
                priority
                className="z-0"
            />

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black/80 z-10" />

            {/* Navbar Animado */}
            <AnimatedNavbar />

            {/* Contenido central */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-2 sm:px-4 md:px-6 lg:px-8 w-full text-center max-w-7xl mx-auto">
                <ScrollAnimation animation="slideUp" delay={200}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-full max-w-6xl leading-tight px-2 sm:px-4 md:px-6">
                        LA REFA – Hecho en México, para los que mueven a México.
                    </h1>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fadeIn" delay={600}>
                    <p className="text-gray-200 mb-6 sm:mb-7 md:mb-8 lg:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl px-2 sm:px-4 md:px-6 leading-relaxed">
                        Si no lo tenemos, lo conseguimos… aquí, en Estados Unidos, o en China.
                    </p>
                </ScrollAnimation>

                {/* Botones centrales */}
                <ScrollAnimation animation="scaleIn" delay={1000}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                        <button
                            onClick={scrollToForm}
                            className="border border-red-500 text-red-500 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <span className="text-base sm:text-lg md:text-xl">📄</span> Obtener cotización rápida
                        </button>

                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium shadow-md hover:shadow-lg"
                        >
                            <FaWhatsapp size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> Chatear por WhatsApp
                        </a>
                    </div>
                </ScrollAnimation>
            </div>

            {/**<div className="absolute bottom-0 left-0 right-0 z-30 ">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <ScrollAnimation animation="slideUp" delay={1400}>
                        <div className="flex flex-wrap items-center justify-center gap-20 md:gap-16 lg:gap-40">
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-1.png"
                                    alt="Logo Socio 1"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-1.png"
                                    alt="Logo Socio 1"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-1.png"
                                    alt="Logo Socio 1"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                    <Image
                                        src="/Images/Logos/Logo-1.png"
                                        alt="Logo Socio 1"
                                        width={112}
                                        height={80}
                                        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-1.png"
                                    alt="Logo Socio 1"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>*/}
        </header>
    );
};
