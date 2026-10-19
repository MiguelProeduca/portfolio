---
order: 1
title: Un sistema, tres marcas
kicker: Sistema de diseño
tag: Sistema de diseño · UNIR
summary: Tres sistemas de diseño fragmentados unificados en uno, sobre PrimeNG.
lead: UNIR tenía tres productos con tres sistemas de diseño distintos. Los unifiqué en un solo sistema multimarca sobre PrimeNG, sin Figma Enterprise. Hoy da servicio a la app de estudiantes, a Prodi y al back office interno.
meta:
  - { label: "Rol", value: "Diseñador responsable del sistema de diseño" }
  - { label: "Empresa", value: "UNIR · Grupo Proeduca" }
  - { label: "Marcas", value: "Estudiantes, Prodi, Foundations" }
  - { label: "Herramientas", value: "Figma, Token Studio, Zeroheight" }
hero: "[Imagen principal · el mismo componente en las tres marcas]"
---

## Contexto

Cada producto de UNIR había crecido con su propio sistema de diseño, iterado muchas veces por separado:

- **Estudiantes:** la app donde los alumnos estudian y hablan con sus compañeros.
- **Prodi:** los productos de IA, un asistente de chat y generadores de contenido para profesores y alumnos.
- **Foundations:** la marca interna, el back office.

El resultado era un sistema fragmentado: varios botones distintos para lo mismo, decisiones duplicadas y nada que garantizara coherencia entre productos.

## Problema

Unificar tres sistemas en uno sin que ninguna marca perdiera su identidad.

Partíamos de PrimeNG como base común, pero una librería genérica solo cubre lo genérico. Los productos, sobre todo los de IA, necesitaban componentes que no existen en PrimeNG. Si cada uno se resolvía a su manera, el sistema volvería a fragmentarse.

## Restricción

Sin Figma Enterprise no hay herencia nativa entre marcas, así que cada marca vive como un modo en cinco colecciones encadenadas, más una sección custom. Cambiar una pantalla de marca obliga a cambiar el modo en cada una de ellas.

**Cómo lo resolví:** todas las colecciones comparten la misma convención de nombres de modo. Cambiar de marca deja de ser una búsqueda colección por colección y pasa a ser un gesto repetible y predecible.

## Decisiones

**Arquitectura en capas.** Los tokens fluyen por cinco colecciones encadenadas, de los valores en bruto a los componentes: primitivos, semánticos comunes, semánticos de color, semánticos de componente y componentes. Cada marca resuelve sus valores con sus propios modos.

<figure>
  <div class="placeholder">[Diagrama · arquitectura de colecciones]</div>
  <figcaption>Fig. 02 · Cinco colecciones encadenadas más una sección custom</figcaption>
</figure>

**Adaptar o crear.** Si PrimeNG tiene el componente, su estructura no se toca y solo cambian los tokens. Si no lo tiene, se crea desde cero en la sección custom, replicando la anatomía de tokens de PrimeNG con tokens nuevos. Para desarrollo y para cada marca, un componente custom es indistinguible de uno nativo.

Entre los componentes custom creados así están el input de chat, el chatbox, la sidebar, la agenda, el organizador de tareas, el file upload, la top bar, la nav bar, la menu bar y un stepper para mobile.

## Ejemplo · el input de chat

Un solo componente sirve a dos tipos de conversación: con la IA y entre estudiantes.

**La decisión clave fue atar el componente al layout, no al caso de uso.** En lugar de una propiedad "IA / Chat", tiene "vertical / horizontal":

- **Vertical:** el texto en su propia fila y las acciones debajo, pensado para prompts largos.
- **Horizontal:** acciones, texto y enviar en una sola línea, como en cualquier mensajería.

Al principio la IA usaba el layout vertical y el chat el horizontal. El producto evolucionaba rápido y pronto la IA necesitó también el horizontal. El componente ya lo soportaba.

Los archivos e imágenes entran por un slot, con su propio componente de adjunto y sus estados de carga. Cubre mobile y desktop, estados de envío (enviar, cargando, parar generación), audio y transcripción, bloqueado, botón de añadir y con o sin adjuntos.

<figure>
  <div class="placeholder">[Matriz · input de chat, tres marcas × dos layouts]</div>
  <figcaption>Fig. 03 · Un componente, dos layouts, tres marcas</figcaption>
</figure>

## Resultado

Tres sistemas pasaron a ser uno, al servicio de tres productos muy distintos: la app de estudiantes, las herramientas de IA y el back office interno. Lo construimos mano a mano con desarrollo, no como una entrega cerrada.

Donde había varios botones ahora hay uno, y las pantallas nuevas se montan con componentes que ya existen en lugar de diseñarse desde cero.

**La prueba de verdad está por llegar.** La marca Estudiantes va a absorber Prodi. Como ambas comparten estructura, y los componentes exclusivos de IA ya existen también en el modo Estudiantes, la fusión será prácticamente un cambio de modo.

## Siguiente paso

Llevar el sistema a código. La arquitectura de tokens está pensada para que ese salto sea limpio.
