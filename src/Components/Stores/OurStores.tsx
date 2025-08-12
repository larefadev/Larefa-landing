import Image from "next/image";

export const OurStores = () => {
    return (
        <section className="px-6 py-12">
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
                <div className=" z-20 absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-white text-4xl md:text-4xl font-bold mb-4">
                        Explora Nuestra Tienda en Monterrey
                    </h2>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
                        Visita Nuestra Tienda
                    </button>
                </div>
            </div>
        </section>
    );
};