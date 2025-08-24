"use client";
import React from 'react';
import { 
  ScrollAnimation, 
  TextReveal, 
  CounterAnimation, 
  ParallaxElement, 
  MaskReveal 
} from './index';

export const AnimationShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation animation="slideUp" delay={200}>
          <h2 className="text-4xl font-bold text-center mb-16">
            🎭 Galería de Animaciones
          </h2>
        </ScrollAnimation>

        {/* ScrollAnimation Examples */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={400}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              ScrollAnimation - Diferentes Efectos
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeIn" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Fade In</h4>
                <p className="text-gray-600">Aparece gradualmente con opacidad</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={800}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Slide Up</h4>
                <p className="text-gray-600">Se desliza hacia arriba desde abajo</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Slide Left</h4>
                <p className="text-gray-600">Se desliza desde la derecha</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={1200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Slide Right</h4>
                <p className="text-gray-600">Se desliza desde la izquierda</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={1400}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Scale In</h4>
                <p className="text-gray-600">Aparece con efecto de escala</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="bounceIn" delay={1600}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h4 className="text-lg font-semibold mb-3">Bounce In</h4>
                <p className="text-gray-600">Aparece con rebote suave</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* TextReveal Example */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              TextReveal - Texto Progresivo
            </h3>
          </ScrollAnimation>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <TextReveal 
              text="Este texto se revela letra por letra, creando un efecto de escritura elegante y atractivo."
              delay={400}
              staggerDelay={50}
              className="text-xl text-gray-700 leading-relaxed"
            />
          </div>
        </div>

        {/* CounterAnimation Examples */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              CounterAnimation - Contadores Animados
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scaleIn" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CounterAnimation 
                  end={500} 
                  suffix="+" 
                  className="text-4xl font-bold text-red-600 mb-2"
                />
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CounterAnimation 
                  end={1000} 
                  suffix="+" 
                  className="text-4xl font-bold text-red-600 mb-2"
                />
                <p className="text-gray-600">Piezas Entregadas</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn" delay={800}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CounterAnimation 
                  end={50} 
                  suffix="%" 
                  className="text-4xl font-bold text-red-600 mb-2"
                />
                <p className="text-gray-600">Tiempo Ahorrado</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* ParallaxElement Example */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              ParallaxElement - Efecto de Profundidad
            </h3>
          </ScrollAnimation>

          <div className="relative h-64 bg-gradient-to-r from-red-500 to-red-600 rounded-lg overflow-hidden">
            <ParallaxElement speed={0.3} direction="up">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-2">Efecto Parallax</h4>
                  <p className="text-red-100">Mueve el scroll para ver el efecto</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* MaskReveal Examples */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              MaskReveal - Revelación con Máscara
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MaskReveal direction="left" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3">Máscara Izquierda</h4>
                <p className="text-gray-600">Se revela desde la izquierda con un efecto de máscara elegante</p>
              </div>
            </MaskReveal>

            <MaskReveal direction="right" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3">Máscara Derecha</h4>
                <p className="text-gray-600">Se revela desde la derecha con un efecto de máscara elegante</p>
              </div>
            </MaskReveal>
          </div>
        </div>

        {/* CSS Classes Showcase */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Clases CSS Personalizadas
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover-lift card-hover">
              <h4 className="text-lg font-semibold mb-3">Hover Lift</h4>
              <p className="text-gray-600">Pasa el mouse para ver el efecto de elevación</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover-scale card-hover">
              <h4 className="text-lg font-semibold mb-3">Hover Scale</h4>
              <p className="text-gray-600">Pasa el mouse para ver el efecto de escala</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover-glow card-hover">
              <h4 className="text-lg font-semibold mb-3">Hover Glow</h4>
              <p className="text-gray-600">Pasa el mouse para ver el efecto de brillo</p>
            </div>
          </div>
        </div>

        {/* Performance Optimizations */}
        <div className="mb-20">
          <ScrollAnimation animation="slideUp" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Optimizaciones de Rendimiento
            </h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md gpu-accelerated">
              <h4 className="text-lg font-semibold mb-3">GPU Accelerated</h4>
              <p className="text-gray-600">Optimizado para aceleración por hardware</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md smooth-scroll">
              <h4 className="text-lg font-semibold mb-3">Smooth Scroll</h4>
              <p className="text-gray-600">Scroll suave automático</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="scaleIn" delay={400}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Listo para implementar estas animaciones?
            </h3>
            <p className="text-gray-600 mb-6">
              Usa estos componentes en tu proyecto para crear una experiencia de usuario excepcional
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 btn-primary">
              ¡Empezar Ahora!
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
