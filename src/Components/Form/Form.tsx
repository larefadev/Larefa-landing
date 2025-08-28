"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useEmail } from "@/Hooks/useEmail";

export const Form = () => {
    const { sendFranchisee, loading, error, success } = useEmail();
    const [form, setForm] = useState({
        name: "",
        city: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendFranchisee(form);
    };

    useEffect(() => {
        if (success) {
            setForm({
                name: "",
                city: "",
                email: "",
                phone: "",
            });
        }
    }, [success]);

    return (
        <section id="form-section" className="bg-gray-50 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-lg">

                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto">
                    <Image
                        src={"/88.png"}
                        alt="Tienda Franquicia"
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 text-center">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg max-w-[563px] z-20">
                            Un Sistema Probado, Listo para Potenciar Tu Tienda.
                        </h2>
                    </div>
                </div>

                {/* Formulario */}
                <div className="p-6 sm:p-8 md:p-12">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 w-full leading-tight">
                        Obtén una Franquicia LA REFA
                    </h3>
                    <p className="text-gray-500 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
                        Únete a una red creciente de proveedores locales de autopartes confiables. Te ayudamos a instalar, conseguir piezas,
                        y prosperar con soporte operacional diario.
                    </p>

                    <form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                        />
                        <input
                            name="city"
                            type="text"
                            placeholder="Ingresa tu ciudad"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Ingresa tu número de WhatsApp"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 sm:py-4 md:py-5 rounded text-sm sm:text-base md:text-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-3 sm:mt-4 text-sm sm:text-base">{error}</p>}
                    {success && <p className="text-green-500 mt-3 sm:mt-4 text-sm sm:text-base">{success}</p>}
                </div>
            </div>
        </section>
    );
};
