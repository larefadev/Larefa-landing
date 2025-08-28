import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { ScrollAnimation } from "@/Components/Animations";

export const Partner = () => {
    return (
        <section className="bg-gray-50 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden shadow-lg rounded-lg">

                {/* Texto */}
                <div className="p-6 sm:p-8 md:p-12">
                    <ScrollAnimation animation="slideRight" delay={200}>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 w-full leading-tight">
                            Asóciate con LA REFA
                        </h3>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fadeIn" delay={400}>
                        <p className="text-gray-500 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed w-full">
                            Expande tu catálogo, vende sin inventario extra, y entrega más rápido con nuestra red digital.
                        </p>
                    </ScrollAnimation>

                    <ul className="space-y-4 sm:space-y-6 md:space-y-8">
                        <ScrollAnimation animation="slideUp" delay={600}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                                <span className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">Hemos construido un sistema poderoso que consigue piezas difíciles de encontrar — desde Estados Unidos hasta China — usando tecnología.</span>
                            </li>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="slideUp" delay={800}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                                <span className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">Solicita en minutos, recibe rápido. Sin tiempo perdido. Sin suposiciones.</span>
                            </li>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="slideUp" delay={1000}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0 text-lg sm:text-xl" />
                                <span className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">El sistema se adapta a las necesidades de tu taller, proporciona educación continua sobre marcas líderes, y te ayuda a enfocarte en reparar — no en buscar.</span>
                            </li>
                        </ScrollAnimation>
                    </ul>
                    
                    <ScrollAnimation animation="scaleIn" delay={1200}>
                        <button className="mt-6 sm:mt-8 md:mt-10 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded text-sm sm:text-base md:text-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                            Conviértete en Socio <span className="text-base sm:text-lg md:text-xl">→</span>
                        </button>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animation="slideLeft" delay={400}>
                    <div className="h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                        <Image
                            src={"/Frame362.png"}
                            width={400}
                            height={400}
                            alt="Asóciate con LA REFA"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};
