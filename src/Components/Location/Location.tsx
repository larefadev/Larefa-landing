export const Location = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
                        Dónde Encontrarnos
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-6">
                        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
                            Visita nuestra tienda, conoce a nuestro equipo y explora nuestros productos — estamos listos para ayudarte
                            a encontrar exactamente lo que necesitas.
                        </p>
                        <button className="bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded text-sm sm:text-base md:text-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap self-start sm:self-auto">
                            Ver todas nuestras ubicaciones
                        </button>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
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