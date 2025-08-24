import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ScrollAnimation } from "@/Components/Animations";
import { AnimatedNavbar } from "./AnimatedNavbar";

export const Header = () => {
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
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 w-full text-center max-w-7xl mx-auto">
                <ScrollAnimation animation="slideUp" delay={200}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 w-full max-w-6xl leading-tight px-4">
                        LA REFA – Hecho en México, para los que mueven a México.
                    </h1>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fadeIn" delay={600}>
                    <p className="text-gray-200 mb-8 text-lg md:text-xl max-w-4xl px-4">
                        Si no lo tenemos, lo conseguimos… aquí, en Estados Unidos, o en China.
                    </p>
                </ScrollAnimation>

                {/* Botones centrales */}
                <ScrollAnimation animation="scaleIn" delay={1000}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#quote"
                            className="border border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition flex items-center gap-2"
                        >
                            <span>📄</span> Obtener cotización rápida
                        </a>

                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                        >
                            <FaWhatsapp size={20} /> Chatear por WhatsApp
                        </a>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Sección de Logos en el borde inferior */}
            <div className="absolute bottom-0 left-0 right-0 z-30 ">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <ScrollAnimation animation="slideUp" delay={1400}>
                        <div className="flex flex-wrap items-center justify-center gap-20 md:gap-16 lg:gap-40">
                            {/* Logo 1 */}
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-1.png"
                                    alt="Logo Socio 1"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            {/* Logo 2 */}
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-2.png"
                                    alt="Logo Socio 2"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            {/* Logo 3 */}
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-3.png"
                                    alt="Logo Socio 3"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            {/* Logo 4 */}
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-4.png"
                                    alt="Logo Socio 4"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            
                            {/* Logo 5 */}
                            <div className="flex items-center justify-center w-24 h-16 md:w-28 md:h-20">
                                <Image
                                    src="/Images/Logos/Logo-5.png"
                                    alt="Logo Socio 5"
                                    width={112}
                                    height={80}
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </header>
    );
};
