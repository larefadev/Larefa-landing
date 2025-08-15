"use client";
import { useState, useEffect } from "react";
import { useEmail } from "@/Hooks/SendEmail";

export const Register = () => {
    const { sendBuyer, loading, error, success } = useEmail();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        workshop: "",
        vehicle: "",
        piece: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendBuyer(form);
    };

    // 🔹 Limpiar formulario cuando el envío sea exitoso
    useEffect(() => {
        if (success) {
            setForm({
                name: "",
                email: "",
                phone: "",
                workshop: "",
                vehicle: "",
                piece: "",
            });
        }
    }, [success]);

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-12"
            style={{ backgroundImage: "url('/FormBack.png')" }}
        >
            <div className="bg-white shadow-lg rounded-lg p-12 max-w-xl w-full">
                <h2 className="text-2xl font-bold text-black">Completa el Formulario</h2>
                <p className="text-gray-500 text-base mt-2">
                    Solo necesitamos algunos detalles para encontrar la pieza exacta que necesitas — rápido y sin complicaciones.
                </p>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="workshop"
                        type="text"
                        placeholder="Ingresa el nombre de tu taller"
                        value={form.workshop}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Ingresa tu número de WhatsApp"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="vehicle"
                        type="text"
                        placeholder="Vehículo (Año / Marca / Modelo)"
                        value={form.vehicle}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="piece"
                        type="text"
                        placeholder="Pieza solicitada"
                        value={form.piece}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 text-white text-lg font-semibold py-4 rounded hover:bg-red-700 transition"
                    >
                        {loading ? "Enviando..." : "Obtén tu Cotización en Minutos"}
                    </button>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}
            </div>
        </section>
    );
};
