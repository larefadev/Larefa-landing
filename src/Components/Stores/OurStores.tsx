import Image from "next/image";

export const OurStores = () => {
    return (
        <section className="px-2 sm:px-4 md:px-6 py-5 sm:py-8 md:py-12">
            <div className="relative rounded-lg overflow-hidden">
                {/* Imagen */}
                <Image
                    src={"/767Store.png"}
                    alt="Tienda Monterrey"
                    className="z-0"
                    width={2000}
                    height={2000}
                />

                {/* Capa oscura */}
                <div className="absolute inset-0 bg-black/80 z-10" />

                {/* Contenido centrado */}
                <div className="z-20 absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
                        Explora Nuestra Tienda en Monterrey
                    </h2>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Visita Nuestra Tienda
                    </button>
                </div>
            </div>
        </section>
    );
};