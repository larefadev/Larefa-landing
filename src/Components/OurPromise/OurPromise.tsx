import { Bolt, Globe, Wrench, Handshake } from "lucide-react";

export const OurPromise = () => {
    const promises = [
        {
            icon: <Bolt className="w-10 h-10 text-red-500" />,
            title: "Entrega Ultra-Rápida (1–2 Horas)",
            description:
                "No esperes días — ofrecemos entrega ultra-rápida a tu taller o garage, usualmente en 1–2 horas. Porque cada hora ahorrada mantiene tu negocio funcionando.",
            bg: "bg-gray-50",
        },
        {
            icon: <Wrench className="w-10 h-10 text-white" />,
            title: "Especialistas en Suspensión, Dirección, Frenos y Balatas",
            description:
                "Mantenemos un inventario profundo obteniendo marcas confiables tanto localmente como en el extranjero. Sin importar el vehículo o modelo, hacemos lo imposible por conseguirte la pieza que necesitas — rápido y confiable.",
            bg: "bg-red-600 text-white",
        },
        {
            icon: <Globe className="w-10 h-10 text-red-500" />,
            title: "Conseguimos Piezas Local e Internacionalmente",
            description:
                "No somos generalistas — nos especializamos en las piezas que más importan para la seguridad y el rendimiento. Ya sea un trabajo de suspensión o cambio de frenos, manejamos las marcas en las que puedes confiar.",
            bg: "bg-gray-50",
        },
        {
            icon: <Handshake className="w-10 h-10 text-red-500" />,
            title: "Tu Socio de Confianza para Mecánicos",
            description:
                "Somos más que una tienda — somos tu sistema de apoyo. Desde conseguir piezas raras hasta brindar orientación rápida, trabajamos como una extensión de tu equipo para ayudarte a servir mejor a tus clientes.",
            bg: "bg-gray-50",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    Nuestra Promesa Para Ti
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Cuando eliges LA REFA, no solo estás comprando piezas — estás
                    invirtiendo en confiabilidad, servicio y velocidad. Esto es lo que
                    entregamos cada día:
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {promises.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-md shadow-sm ${item.bg}`}
                        >
                            <div className="flex flex-col items-start gap-4">
                                {item.icon}
                                <div>
                                    <h3
                                        className={`text-lg font-semibold ${
                                            item.bg.includes("red")
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`mt-2 text-sm ${
                                            item.bg.includes("red")
                                                ? "text-red-100"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};