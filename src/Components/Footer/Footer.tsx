"use client";
import {FormEvent, useState} from 'react';
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";
import {SiFacebook, SiInstagram, SiTiktok, SiWhatsapp} from 'react-icons/si';

export const Footer = () => {
    const [email, setEmail] = useState('');


    const handleSubscribe = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Suscribirse con email:', email);
        setEmail('');
    };




    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black mb-4">Contáctanos</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            ¿Tienes una pregunta o estás listo para iniciar tu negocio? ¡Contáctanos!
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    📞
                                </div>
                                <span className="text-gray-700">811-86-49201</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    ✉️
                                </div>
                                <span className="text-gray-700">info@larefa.com</span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                                    📍
                                </div>
                                <span className="text-gray-700 text-sm">
                                    José Vasconcelos 210,<br />
                                    San Pedro Garza García, Nuevo León
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-red-600 transition text-sm">
                                    Catálogo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-red-600 transition text-sm">
                                    Cotización Rápida
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-red-600 transition text-sm">
                                    Asociaciones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-red-600 transition text-sm">
                                    Franquicia
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-red-600 transition text-sm">
                                    Programa de Lealtad
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black mb-4">Horarios</h3>
                        <div className="space-y-2">
                            <div className="text-sm">
                                <span className="text-gray-700 font-medium">Lun-Sáb:</span>
                                <span className="text-gray-600 ml-2">8-8</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-gray-700 font-medium">Dom:</span>
                                <span className="text-gray-600 ml-2">9-2</span>
                            </div>
                        </div>
                    </div>

                    {/* Stay Updated Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-black mb-4">Mantente Actualizado</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Únete a nuestro boletín para recibir las últimas noticias e información importante
                            directamente en tu bandeja de entrada
                        </p>

                        <form onSubmit={handleSubscribe} className="flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingresa tu dirección de email"
                                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-r hover:bg-red-700 transition"
                            >
                                Suscribirse
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-4">
                            {/* Facebook */}
                            <a href="#" className="text-blue-600 hover:text-blue-700 transition">
                                <SiFacebook className="w-6 h-6" />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="text-pink-600 hover:text-pink-700 transition">
                                <SiInstagram className="w-6 h-6" />
                            </a>

                            {/* TikTok */}
                            <a href="#" className="text-black hover:text-gray-700 transition">
                                <SiTiktok className="w-6 h-6" />
                            </a>

                            {/* WhatsApp */}
                            <a href="#" className="text-green-600 hover:text-green-700 transition">
                                <SiWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-6">
                        <div className="font-bold text-xl">LA REFA</div>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="text-gray-600 hover:text-red-600 transition">
                                Términos y Condiciones
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-600 transition">
                                Política de Privacidad
                            </a>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                        © 2025 LA REFA. Todos los Derechos Reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};