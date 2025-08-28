import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export const Club = () => {
    return (
        <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">

                {/* Texto lado izquierdo */}
                <div className="mr-0 lg:mr-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
                        ÚNETE AL <br /> CLUB DE MECÁNICOS LA REFA
                    </h2>
                    <p className="text-gray-500 mt-3 sm:mt-4 max-w-md text-sm sm:text-base">
                        Gana puntos con cada compra, desbloquea descuentos y obtén acceso
                        prioritario — diseñado especialmente para mecánicos.
                    </p>

                    {/* Lista de beneficios */}
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                            <span className="ml-2 sm:ml-3 text-sm sm:text-base">
                                <strong>Gana Puntos</strong> — Obtén puntos en cada compra.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                            <span className="ml-2 sm:ml-3 text-sm sm:text-base">
                                <strong>Elige Recompensas</strong> — Explora herramientas, equipo y viajes.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                            <span className="ml-2 sm:ml-3 text-sm sm:text-base">
                                <strong>Canjea Fácilmente</strong> — Reclama tus premios sin complicaciones.
                            </span>
                        </li>
                    </ul>

                    {/* Botón */}
                    <button className="mt-4 sm:mt-6 bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-red-700 transition text-sm sm:text-base w-full sm:w-auto">
                        Regístrate Gratis
                    </button>
                </div>

                {/* Imagen lado derecho */}
                <div className="flex justify-center mt-6 lg:mt-0 lg:ml-12 order-first lg:order-last">
                    <Image
                        src="/Images/Frame433.png"
                        width={650}
                        height={650}
                        alt="Recompensas del Club"
                        className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
                    />
                </div>
            </div>
        </section>
    );
};
