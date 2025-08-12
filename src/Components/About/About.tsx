import { FaStore, FaTruck } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { MdTrackChanges, MdInventory } from "react-icons/md";
import { FaCube } from "react-icons/fa";

export const About = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            {/* Título */}
            <h2 className="text-3xl font-bold mb-2">Acerca de LA REFA</h2>
            <p className="text-gray-600 max-w-2xl mb-10">
                Una refaccionaria impulsada por tecnología construida para velocidad, confianza y entrega sin complicaciones—local o internacional.
            </p>
            <span className="text-sm font-medium text-gray-500 mb-4">Flujo de Proceso</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Flujo de Proceso */}

                <div className="grid grid-cols-3 gap-4">
                    {/* Tarjeta */}
                    <div className="bg-gray-100 p-6 flex flex-col items-center text-center">

                        <FaStore className="text-red-600 text-5xl mb-2" />
                        <p className="font-medium text-red-600">Tienda</p>
                        <span className="text-red-600 mt-1">→</span>
                    </div>

                    <div className="bg-gray-100 p-6 flex flex-col items-center text-center">
                        <MdOutlineSettings className="text-red-600 text-5xl mb-2" />
                        <p className="font-medium text-red-600">Sistema Digital</p>
                        <span className="text-red-600 mt-1">→</span>
                    </div>

                    <div className="bg-gray-100 p-6 flex flex-col items-center text-center">
                        <FaTruck className="text-red-600 text-5xl mb-2" />
                        <p className="font-medium text-red-600">Entrega Rápida</p>
                        <span className="text-red-600 mt-1">→</span>
                    </div>
                </div>

                {/* Texto Descriptivo */}
                <div>
                    <h3 className="text-xl font-bold mb-4">
                        Combinamos una tienda física de autopartes con una red logística impulsada por tecnología.
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>
                            LA REFA entrega más rápido que cualquiera, dando a los mecánicos la confianza para terminar trabajos a tiempo.
                        </li>
                        <li>
                            Si no tenemos una pieza, la conseguiremos – localmente, nacionalmente, o desde China – sin complicaciones.
                        </li>
                    </ul>

                    {/* Ventajas Tecnológicas */}
                    <h4 className="text-lg font-bold mb-4">Ventajas Tecnológicas</h4>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-100 p-4 flex flex-col items-center text-center rounded">
                            <MdTrackChanges className="text-2xl mb-2" />
                            <p className="font-medium">Rastreo en Tiempo Real</p>
                        </div>
                        <div className="bg-gray-100 p-4 flex flex-col items-center text-center rounded">
                            <MdInventory className="text-2xl mb-2" />
                            <p className="font-medium">Inventario Predictivo</p>
                        </div>
                        <div className="bg-red-600 text-white p-4 flex flex-col items-center text-center rounded">
                            <FaCube className="text-2xl mb-2" />
                            <p className="font-medium">Abastecimiento Automatizado</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};