"use client";
import {FormEvent, useState} from 'react';

import {SiFacebook, SiInstagram, SiTiktok, SiWhatsapp} from 'react-icons/si';
import { ScrollAnimation } from "@/Components/Animations";

export const Footer = () => {
    const [email, setEmail] = useState('');


    const handleSubscribe = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Suscribirse con email:', email);
        setEmail('');
    };




    return (
        <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10">
                    <ScrollAnimation animation="slideUp" delay={200}>
                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-5">Contáctanos</h3>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                ¿Tienes una pregunta o estás listo para iniciar tu negocio? ¡Contáctanos!
                            </p>

                            <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                        📞
                                    </div>
                                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">811-86-49201</span>
                                </div>

                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                                        ✉️
                                    </div>
                                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">info@larefa.com</span>
                                </div>

                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mt-0.5">
                                        📍
                                    </div>
                                    <span className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                        José Vasconcelos 210,<br />
                                        San Pedro Garza García, Nuevo León
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Quick Links Section */}
                    <ScrollAnimation animation="slideUp" delay={400}>
                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-5">Enlaces Rápidos</h3>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                                        Catálogo
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                                        Cotización Rápida
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                                        Asociaciones
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                                        Franquicia
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-xs sm:text-sm md:text-base">
                                        Programa de Lealtad
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimation>

                    {/* Hours Section */}
                    <ScrollAnimation animation="slideUp" delay={600}>
                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-5">Horarios</h3>
                            <div className="space-y-2 sm:space-y-3">
                                <div className="text-xs sm:text-sm md:text-base">
                                    <span className="text-gray-700 font-medium">Lun-Sáb:</span>
                                    <span className="text-gray-600 ml-2">8-8</span>
                                </div>
                                <div className="text-xs sm:text-sm md:text-base">
                                    <span className="text-gray-700 font-medium">Dom:</span>
                                    <span className="text-gray-600 ml-2">9-2</span>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Stay Updated Section */}
                    <ScrollAnimation animation="slideUp" delay={800}>
                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 md:mb-5">Mantente Actualizado</h3>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
                                Únete a nuestro boletín para recibir las últimas noticias e información importante
                                directamente en tu bandeja de entrada
                            </p>

                            <form onSubmit={handleSubscribe} className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Ingresa tu dirección de email"
                                    className="flex-1 px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-red-600 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-r hover:bg-red-700 transition-colors duration-200"
                                >
                                    Suscribirse
                                </button>
                            </form>

                            {/* Social Media Icons */}
                            <div className="flex space-x-3 sm:space-x-4 md:space-x-5 pt-3 sm:pt-4 md:pt-5">
                                {/* Facebook */}
                                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                    <SiFacebook className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                </a>

                                {/* Instagram */}
                                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors duration-200">
                                    <SiInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                </a>

                                {/* TikTok */}
                                <a href="#" className="text-black hover:text-gray-700 transition-colors duration-200">
                                    <SiTiktok className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                </a>

                                {/* WhatsApp */}
                                <a href="#" className="text-green-600 hover:text-green-700 transition-colors duration-200">
                                    <SiWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-6 sm:pt-8 md:pt-10 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
                        <div className="font-bold text-lg sm:text-xl md:text-2xl">LA REFA</div>
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-4 md:space-x-6 text-xs sm:text-sm md:text-base">
                            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                                Términos y Condiciones
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-200">
                                Política de Privacidad
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm md:text-base text-center sm:text-right">
                        © 2025 LA REFA. Todos los Derechos Reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};