import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/Logo1.png" alt="Logo La Refa" width={120} height={40} />
                </div>

                {/* Menú */}
                <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
                    <li className="hover:text-red-500 cursor-pointer">Inicio</li>
                    <li className="hover:text-red-500 cursor-pointer">Productos</li>
                    <li className="hover:text-red-500 cursor-pointer">Servicios</li>
                    <li className="hover:text-red-500 cursor-pointer">Acerca</li>
                    <li className="hover:text-red-500 cursor-pointer">Contacto</li>
                </ul>

                {/* Botón WhatsApp */}
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition"
                >
                    <FaWhatsapp size={18} /> Escríbenos
                </a>
            </nav>

            {/* Contenido central */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    LA REFA – El Futuro de las Refaccionarias, Más Rápido e Inteligente
                </h1>
                <p className="text-gray-200 mb-8">
                    Si no lo tenemos, lo conseguimos… aquí, en Estados Unidos, o en China.
                </p>

                {/* Botones centrales */}
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
            </div>
        </header>
    );
};
