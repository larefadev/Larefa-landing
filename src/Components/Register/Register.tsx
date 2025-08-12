export const Register = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: "url('/FormBack.png')" }}
        >
            <div className="bg-white shadow-lg rounded-lg p-12 max-w-xl w-full">
                <h2 className="text-2xl font-bold text-black">Completa el Formulario</h2>
                <p className="text-gray-500 text-base mt-2">
                    Solo necesitamos algunos detalles para encontrar la pieza exacta que necesitas — rápido y sin complicaciones.
                </p>

                <form className="mt-8 space-y-5">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa el nombre de tu taller"
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tu número de WhatsApp"
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Vehículo (Año / Marca / Modelo)"
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="text"
                        placeholder="Pieza solicitada"
                        className="w-full border border-gray-300 rounded px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white text-lg font-semibold py-4 rounded hover:bg-red-700 transition"
                    >
                        Obtén tu Cotización en Minutos
                    </button>
                </form>
            </div>
        </section>
    );
};