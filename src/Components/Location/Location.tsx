export const Location = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        Dónde Encontrarnos
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Visita nuestra tienda, conoce a nuestro equipo y explora nuestros productos — estamos listos para ayudarte
                            a encontrar exactamente lo que necesitas.
                        </p>
                        <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition whitespace-nowrap">
                            Ver todas nuestras ubicaciones
                        </button>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.5!2d-100.3897!3d25.6539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866296b5c4d4b9e3%3A0x1234567890abcdef!2sJos%C3%A9%20Vasconcelos%20210%2C%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%2066260%20N.L.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=José+Vasconcelos+210,+San+Pedro+Garza+García,+66260"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación: José Vasconcelos 210, San Pedro Garza García"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};