import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { ScrollAnimation } from "@/Components/Animations";

export const Partner = () => {
    return (
        <section className="bg-gray-50 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white">

                {/* Texto */}
                <div className={"p-12"}>
                    <ScrollAnimation animation="slideRight" delay={200}>
                        <h3 className="text-5xl font-bold mb-5 w-full p-5">Asóciate con LA REFA</h3>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animation="fadeIn" delay={400}>
                        <p className="text-gray-500 mb-8 p-5 w-full ">
                            Expande tu catálogo, vende sin inventario extra, y entrega más rápido con nuestra red digital.
                        </p>
                    </ScrollAnimation>

                    <ul className="space-y-6">
                        <ScrollAnimation animation="slideUp" delay={600}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-lg">Hemos construido un sistema poderoso que consigue piezas difíciles de encontrar — desde Estados Unidos hasta China — usando tecnología.</span>
                            </li>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="slideUp" delay={800}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-lg">Solicita en minutos, recibe rápido. Sin tiempo perdido. Sin suposiciones.</span>
                            </li>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animation="slideUp" delay={1000}>
                            <li className="flex items-start gap-3">
                                <FaCheck className="text-red-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-lg">El sistema se adapta a las necesidades de tu taller, proporciona educación continua sobre marcas líderes, y te ayuda a enfocarte en reparar — no en buscar.</span>
                            </li>
                        </ScrollAnimation>
                    </ul>
                    
                    <ScrollAnimation animation="scaleIn" delay={1200}>
                        <button className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-3 rounded transition">
                            Conviértete en Socio <span className="text-lg">→</span>
                        </button>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animation="slideLeft" delay={400}>
                    <div>
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
