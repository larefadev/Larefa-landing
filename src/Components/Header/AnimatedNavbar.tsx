"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export const AnimatedNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
                : 'bg-transparent py-3 sm:py-4 md:py-5'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image 
                        src="/Logo1.png" 
                        alt="Logo La Refa" 
                        width={isScrolled ? 80 : 100} 
                        height={isScrolled ? 28 : 35}
                        className="transition-all duration-300 sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[40px]"
                    />
                </div>

                {/* Menú */}
                <ul className={`hidden md:flex gap-6 sm:gap-7 md:gap-8 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                    <li className="hover:text-red-500 cursor-pointer transition-colors duration-200">Inicio</li>
                    <li className="hover:text-red-500 cursor-pointer transition-colors duration-200">Productos</li>
                    <li className="hover:text-red-500 cursor-pointer transition-colors duration-200">Servicios</li>
                    <li className="hover:text-red-500 cursor-pointer transition-colors duration-200">Acerca</li>
                    <li className="hover:text-red-500 cursor-pointer transition-colors duration-200">Contacto</li>
                </ul>

                {/* Botón WhatsApp */}
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-md flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-xs sm:text-sm md:text-base ${
                        isScrolled 
                            ? 'bg-red-500 hover:bg-red-600 text-white shadow-md' 
                            : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                >
                    <FaWhatsapp size={14} className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]" /> 
                    <span className="hidden sm:inline">Escríbenos</span>
                </a>
            </div>
        </nav>
    );
};
