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
        <section className="bg-gray-50 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white">

                <div className="relative h-96 md:h-auto">
                    <Image
                        src={"/88.png"}
                        alt="Tienda Franquicia"
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg max-w-[563px] z-20">
                            Un Sistema Probado, Listo para Potenciar Tu Tienda.
                        </h2>
                    </div>
                </div>

                {/* Formulario */}
                <div className="p-12">
                    <h3 className="text-4xl font-bold mb-5 w-full">Obtén una Franquicia LA REFA</h3>
                    <p className="text-gray-500 mb-10 p-5">
                        Únete a una red creciente de proveedores locales de autopartes confiables. Te ayudamos a instalar, conseguir piezas,
                        y prosperar con soporte operacional diario.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2.5"
                        />
                        <input
                            name="city"
                            type="text"
                            placeholder="Ingresa tu ciudad"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2.5"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2.5"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Ingresa tu número de WhatsApp"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 mt-2.5"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded transition"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {success && <p className="text-green-500 mt-4">{success}</p>}
                </div>
            </div>
        </section>
    );
};
