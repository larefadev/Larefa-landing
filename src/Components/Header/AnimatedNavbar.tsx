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
                : 'bg-transparent py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image 
                        src="/Logo1.png" 
                        alt="Logo La Refa" 
                        width={isScrolled ? 100 : 120} 
                        height={isScrolled ? 35 : 40}
                        className="transition-all duration-300"
                    />
                </div>

                {/* Menú */}
                <ul className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-300 ${
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
                    className={`px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                        isScrolled 
                            ? 'bg-red-500 hover:bg-red-600 text-white shadow-md' 
                            : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                >
                    <FaWhatsapp size={18} /> 
                    <span className="hidden sm:inline">Escríbenos</span>
                </a>
            </div>
        </nav>
    );
};
