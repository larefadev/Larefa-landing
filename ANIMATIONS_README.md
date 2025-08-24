# 🎭 Sistema de Animaciones de LA REFA

Este documento describe el sistema completo de animaciones implementado en el proyecto LA REFA, que proporciona transiciones suaves y elegantes durante el scroll.

## 🚀 Componentes de Animación Disponibles

### 1. ScrollAnimation
El componente principal para animaciones basadas en scroll.

```tsx
import { ScrollAnimation } from "@/Components/Animations";

<ScrollAnimation 
  animation="slideUp" 
  delay={200} 
  duration={600}
>
  <h2>Mi Título</h2>
</ScrollAnimation>
```

**Propiedades:**
- `animation`: Tipo de animación (`fadeIn`, `slideUp`, `slideLeft`, `slideRight`, `scaleIn`, `bounceIn`)
- `delay`: Retraso en milisegundos antes de iniciar la animación
- `duration`: Duración de la transición en milisegundos
- `threshold`: Umbral de visibilidad (0.0 a 1.0)
- `rootMargin`: Margen del viewport para activar la animación
- `triggerOnce`: Si la animación debe ejecutarse solo una vez

### 2. TextReveal
Revela texto letra por letra con un efecto de escritura.

```tsx
import { TextReveal } from "@/Components/Animations";

<TextReveal 
  text="Texto que se revela progresivamente"
  delay={300}
  staggerDelay={50}
>
  <h1>Mi Título</h1>
</TextReveal>
```

**Propiedades:**
- `text`: El texto a revelar
- `delay`: Retraso inicial en milisegundos
- `staggerDelay`: Retraso entre cada letra
- `threshold`: Umbral de visibilidad

### 3. CounterAnimation
Anima contadores numéricos que cuentan hacia arriba.

```tsx
import { CounterAnimation } from "@/Components/Animations";

<CounterAnimation 
  end={1000}
  duration={2000}
  delay={500}
  suffix="+"
  prefix="$"
/>
```

**Propiedades:**
- `end`: Número final del contador
- `duration`: Duración de la animación en milisegundos
- `delay`: Retraso antes de iniciar
- `suffix`: Texto después del número
- `prefix`: Texto antes del número

### 4. ParallaxElement
Efecto de parallax sutil para elementos de fondo.

```tsx
import { ParallaxElement } from "@/Components/Animations";

<ParallaxElement 
  speed={0.5}
  direction="up"
>
  <div>Contenido con parallax</div>
</ParallaxElement>
```

**Propiedades:**
- `speed`: Velocidad del efecto parallax (0.1 a 1.0)
- `direction`: Dirección del movimiento (`up`, `down`, `left`, `right`)

### 5. MaskReveal
Revela elementos con un efecto de máscara.

```tsx
import { MaskReveal } from "@/Components/Animations";

<MaskReveal 
  direction="left"
  duration={800}
  delay={200}
>
  <div>Contenido revelado con máscara</div>
</MaskReveal>
```

**Propiedades:**
- `direction`: Dirección de la máscara
- `duration`: Duración de la animación
- `delay`: Retraso antes de iniciar

## 🎨 Tipos de Animación Disponibles

### FadeIn
- **Descripción**: Aparece gradualmente
- **Uso**: Títulos, descripciones, elementos sutiles

### SlideUp
- **Descripción**: Se desliza hacia arriba desde abajo
- **Uso**: Tarjetas, secciones, contenido principal

### SlideLeft
- **Descripción**: Se desliza desde la derecha
- **Uso**: Imágenes, elementos laterales

### SlideRight
- **Descripción**: Se desliza desde la izquierda
- **Uso**: Texto, elementos de contenido

### ScaleIn
- **Descripción**: Aparece con un efecto de escala
- **Uso**: Botones, elementos interactivos

### BounceIn
- **Descripción**: Aparece con un rebote suave
- **Uso**: Elementos destacados, CTAs

## 🎯 Casos de Uso Recomendados

### Headers y Títulos
```tsx
<ScrollAnimation animation="slideUp" delay={200}>
  <h1>Título Principal</h1>
</ScrollAnimation>
```

### Tarjetas y Elementos de Lista
```tsx
{items.map((item, index) => (
  <ScrollAnimation 
    key={index}
    animation="slideUp" 
    delay={400 + index * 100}
  >
    <Card>{item.content}</Card>
  </ScrollAnimation>
))}
```

### Imágenes
```tsx
<ScrollAnimation animation="slideLeft" delay={300}>
  <Image src="/image.jpg" alt="Descripción" />
</ScrollAnimation>
```

### Botones y CTAs
```tsx
<ScrollAnimation animation="scaleIn" delay={800}>
  <button className="btn-primary">
    Acción Principal
  </button>
</ScrollAnimation>
```

## 🎨 Clases CSS Personalizadas

### Efectos de Hover
- `.hover-lift`: Eleva el elemento al hacer hover
- `.hover-scale`: Escala el elemento al hacer hover
- `.hover-glow`: Añade un brillo rojo al hacer hover

### Animaciones de Entrada
- `.animate-fade-in-up`: Aparece deslizándose hacia arriba
- `.animate-fade-in-left`: Aparece deslizándose desde la izquierda
- `.animate-fade-in-right`: Aparece deslizándose desde la derecha
- `.animate-scale-in`: Aparece con escala

### Efectos Especiales
- `.card-hover`: Efecto de elevación para tarjetas
- `.text-gradient`: Texto con gradiente rojo
- `.border-animated`: Borde que se expande en hover

## ⚡ Optimizaciones de Rendimiento

### GPU Acceleration
```tsx
<div className="gpu-accelerated">
  Contenido optimizado para GPU
</div>
```

### Transiciones Suaves
```tsx
<div className="smooth-scroll">
  Scroll suave automático
</div>
```

### Carga Progresiva
```tsx
<div className="stagger-children">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

## 🔧 Configuración del Hook

El hook `useScrollAnimation` se puede configurar con diferentes opciones:

```tsx
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.1,        // 10% del elemento debe ser visible
  rootMargin: '0px 0px -50px 0px',  // Margen del viewport
  triggerOnce: true      // Solo se ejecuta una vez
});
```

## 📱 Responsive y Accesibilidad

- Todas las animaciones son responsivas
- Se respetan las preferencias de movimiento reducido del usuario
- Las animaciones no interfieren con la navegación por teclado
- Compatible con lectores de pantalla

## 🚀 Mejores Prácticas

1. **Usa delays escalonados** para crear secuencias fluidas
2. **Mantén las animaciones sutiles** - no distraigan del contenido
3. **Optimiza el rendimiento** usando `gpu-accelerated` cuando sea necesario
4. **Prueba en dispositivos móviles** para asegurar suavidad
5. **Reseta las animaciones** cuando sea apropiado

## 🎯 Ejemplos de Implementación

### Secuencia de Animación Completa
```tsx
<section>
  <ScrollAnimation animation="slideUp" delay={200}>
    <h2>Título de Sección</h2>
  </ScrollAnimation>
  
  <ScrollAnimation animation="fadeIn" delay={400}>
    <p>Descripción de la sección</p>
  </ScrollAnimation>
  
  <div className="grid grid-cols-3 gap-6">
    {features.map((feature, index) => (
      <ScrollAnimation 
        key={index}
        animation="slideUp" 
        delay={600 + index * 200}
      >
        <FeatureCard {...feature} />
      </ScrollAnimation>
    ))}
  </div>
</section>
```

### Animación de Contador
```tsx
<div className="stats-grid">
  <ScrollAnimation animation="scaleIn" delay={300}>
    <div className="stat-item">
      <CounterAnimation end={500} suffix="+" />
      <p>Clientes Satisfechos</p>
    </div>
  </ScrollAnimation>
  
  <ScrollAnimation animation="scaleIn" delay={500}>
    <div className="stat-item">
      <CounterAnimation end={1000} suffix="+" />
      <p>Piezas Entregadas</p>
    </div>
  </ScrollAnimation>
</div>
```

## 🔍 Troubleshooting

### Animación no se ejecuta
- Verifica que el elemento esté visible en el viewport
- Ajusta el `threshold` si es necesario
- Confirma que `triggerOnce` esté configurado correctamente

### Animación muy lenta o rápida
- Ajusta la propiedad `duration`
- Modifica el `delay` para sincronizar con otras animaciones

### Problemas de rendimiento
- Usa la clase `gpu-accelerated`
- Reduce la complejidad de las animaciones en móviles
- Considera usar `will-change` para elementos específicos

---

¡Con este sistema de animaciones, tu aplicación LA REFA tendrá una experiencia de usuario fluida y profesional! 🎉
