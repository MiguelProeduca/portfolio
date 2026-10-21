---
order: 1
title: Un sistema, tres marcas
cardTitle: "Sistema de diseño multimarca"
cardSub: "Un sistema de diseño para tres marcas."
heroLinks:
  - { label: "Diseño multimarca", type: "Sistema de diseño" }
kicker: Sistema de diseño
tag: Sistema de diseño · UNIR
summary: "Un sistema de diseño multimarca sobre PrimeNG para los tres productos de UNIR."
lead: "Un sistema de diseño para los tres productos de UNIR: la app de estudiantes, los productos de IA de Prodi y el back office. Una sola librería sobre PrimeNG, con cada marca resuelta en los tokens."
meta:
  - { label: "Rol", value: "Diseñador responsable del sistema de diseño" }
  - { label: "Empresa", value: "UNIR · Grupo Proeduca" }
  - { label: "Marcas", value: "Estudiantes, Prodi, Foundations" }
  - { label: "Herramientas", value: "Figma, Token Studio, Zeroheight" }
company: "Proeduca"
year: "2025"
cover: "/work/ds-cover.jpg"
hero: "Vista general de componentes del sistema: input de chat, tarjetas de tarea, sidebar, calendario, botones y campos de formulario"
---

## El sistema

Un único sistema de diseño para los tres productos digitales de UNIR, cada uno con su marca:

- **Estudiantes:** la app donde los alumnos estudian, se organizan y hablan con sus compañeros.
- **Prodi:** los productos de IA, un asistente de chat y generadores de contenido para profesores y alumnos.
- **Foundations:** la marca interna, el back office.

Comparten una sola librería de componentes y una sola arquitectura de tokens. Lo que cambia entre marcas (color, radios, tipografía, tono) se resuelve en los tokens, no en los componentes. Partimos de **PrimeNG** como base, porque es la librería sobre la que construye desarrollo, y encima añadimos todo lo que los productos necesitan y PrimeNG no trae.

Antes, cada producto había crecido con su propio sistema y había varias versiones de las mismas piezas. Unificarlos fue el punto de partida, no el objetivo: el objetivo es poder diseñar y construir más rápido sin perder coherencia.

## Cómo está construido

**Tokens en capas.** Los valores fluyen por cinco colecciones encadenadas: primitivos, semánticos comunes, semánticos de color, semánticos de componente y componentes. Cada marca es un modo, y todas las colecciones comparten la misma convención de nombres de modo, así que cambiar una pantalla de marca es un gesto predecible. Lo montamos así porque sin Figma Enterprise no hay herencia nativa entre marcas.

<figure>
  <img src="/work/ds-variables.jpg" alt="Panel de variables de Figma: colecciones Primitive, Semantic/Common, Semantic/Color Scheme, Component/Common, Component/Color Scheme y Custom, con los tokens del botón primario y una columna de modo por marca: Estudiantes, Prodi, Foundations y el tema base" loading="lazy" />
  <figcaption>Fig. 02 · El botón primario en la colección de componentes. Cada marca es un modo y resuelve su hover y su active con su propio tono. La última columna es el tema base de PrimeNG.</figcaption>
</figure>

**Componentes de PrimeNG y componentes propios.** Si PrimeNG tiene el componente, su estructura no se toca y solo cambian los tokens. Si no lo tiene, lo creamos en una sección propia replicando la anatomía de tokens de PrimeNG, de modo que para desarrollo y para cada marca un componente propio funciona igual que uno nativo.

Así se han creado, entre otros, el input de chat, el chatbox, la sidebar, la agenda, el organizador de tareas, el file upload, la top bar, la nav bar, la menu bar y un stepper para mobile.

## Un componente de cerca · el input de chat

Es el componente en el que más se nota el enfoque del sistema. Sirve a dos tipos de conversación, con la IA y entre estudiantes, y en lugar de una propiedad "IA / Chat" tiene **"vertical / horizontal"**: el componente depende del layout, no del caso de uso.

- **Vertical:** el texto en su propia fila y las acciones debajo, pensado para prompts largos.
- **Horizontal:** acciones, texto y enviar en una sola línea, como en cualquier mensajería.

Cuando la IA necesitó también el layout horizontal, el componente ya lo soportaba. Los archivos e imágenes entran por un slot con su propio componente de adjunto, y cubre mobile y desktop, estados de envío (enviar, cargando, parar generación), audio y transcripción, bloqueado y con o sin adjuntos.

<figure>
  <img src="/work/ds-chat-input.jpg" alt="El mismo input de chat en tres marcas: Prodi en layout vertical con esquinas muy redondeadas, Estudiantes en horizontal redondeado y Foundations en horizontal con esquinas rectas" loading="lazy" />
  <figcaption>Fig. 03 · Un componente, dos layouts, tres marcas: vertical en Prodi, horizontal en Estudiantes y Foundations.</figcaption>
</figure>

## Cómo se trabaja con él

El sistema se construye mano a mano con desarrollo, no se entrega cerrado. Las pantallas nuevas se montan con piezas que ya existen, y cuando hace falta una nueva entra en el sistema para que la puedan usar las tres marcas.

Para el mantenimiento a escala (auditar tokens, renombrar variables, documentar componentes) uso IA conectada a Figma. Las decisiones de diseño las tomo yo.

## Dónde está hoy

Da servicio a la app de estudiantes, a las herramientas de IA y al back office interno. Donde había varias versiones de una pieza ahora hay una.

Lo siguiente es la fusión de Prodi dentro de Estudiantes: como comparten estructura, y los componentes de IA ya existen en el modo Estudiantes, será prácticamente un cambio de modo. Y después, llevar el sistema a código, para lo que la arquitectura de tokens ya está preparada.
