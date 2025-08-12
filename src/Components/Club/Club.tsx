import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export const Club = () => {
    return (
        <section className="px-6 py-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

                {/* Texto lado izquierdo */}
                <div className={"mr-12"}>
                    <h2 className="text-4xl font-extrabold text-black leading-tight">
                        ÚNETE AL <br /> CLUB DE MECÁNICOS LA REFA
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-md">
                        Gana puntos con cada compra, desbloquea descuentos y obtén acceso
                        prioritario — diseñado especialmente para mecánicos.
                    </p>

                    {/* Lista de beneficios */}
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1" />
                            <span className="ml-3">
                                <strong>Gana Puntos</strong> — Obtén puntos en cada compra.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1" />
                            <span className="ml-3">
                                <strong>Elige Recompensas</strong> — Explora herramientas, equipo y viajes.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-red-600 mt-1" />
                            <span className="ml-3">
                                <strong>Canjea Fácilmente</strong> — Reclama tus premios sin complicaciones.
                            </span>
                        </li>
                    </ul>

                    {/* Botón */}
                    <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
                        Regístrate Gratis
                    </button>
                </div>

                {/* Imagen lado derecho */}
                <div className="flex justify-center ml-12">
                    <Image
                        src="/Frame433.png"
                        width={650} // más grande
                        height={650}
                        alt="Recompensas del Club"
                        className="w-full max-w-lg h-auto"
                    />
                </div>
            </div>
        </section>
    );
};
