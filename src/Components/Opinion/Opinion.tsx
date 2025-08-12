import Image from "next/image";

export const Opinion = () => {
    return (
        <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-black">
                    Lo Que Dicen Nuestros Clientes
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Mecánicos, talleres y dueños de negocios confían en LA REFA para mantener sus operaciones en marcha.
                    Esto es lo que dicen sobre trabajar con nosotros:
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Opinión 1 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <Image
                            src="/Sujeto1.jpeg"
                            alt="Carlos Méndez"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 font-semibold text-black">Carlos Méndez</h3>
                        <p className="text-gray-500 text-sm">Mecánico Independiente</p>
                        <p className="mt-4 text-gray-700">
                            Solía perder horas buscando las piezas correctas.
                            Ahora solo llamo a LA REFA y me las entregan en menos de una hora.
                            Es como tener un almacén sin los costos.
                        </p>
                        <span className="text-pink-400 text-4xl mt-4 block">“</span>
                    </div>

                    {/* Opinión 2 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <Image
                            src="/sujeto3.jpeg"
                            alt="Jorge Rivera"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 font-semibold text-black">Jorge Rivera</h3>
                        <p className="text-gray-500 text-sm">Gerente de Repuestos, Urban Drive</p>
                        <p className="mt-4 text-gray-700">
                            Saben exactamente lo que necesito, sin adivinanzas.
                            El equipo de LA REFA me trata como prioridad siempre.
                            Esa confianza marca toda la diferencia en mi trabajo.
                        </p>
                        <span className="text-pink-400 text-4xl mt-4 block">“</span>
                    </div>

                    {/* Opinión 3 */}
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <Image
                            src="/Sujeto4.jpeg"
                            alt="Sandra León"
                            width={60}
                            height={60}
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 font-semibold text-black">Sandra León</h3>
                        <p className="text-gray-500 text-sm">Dueña, Taller Méndez</p>
                        <p className="mt-4 text-gray-700">
                            Hemos trabajado con otros proveedores antes,
                            pero LA REFA está en otro nivel.
                            Su inventario, velocidad de entrega y soporte
                            los convierten en un verdadero socio de negocio.
                        </p>
                        <span className="text-pink-400 text-4xl mt-4 block">“</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
