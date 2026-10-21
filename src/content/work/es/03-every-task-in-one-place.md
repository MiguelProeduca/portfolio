---
order: 2
title: El día a día del estudiante, en una sola app
cardTitle: "App del estudiante · UNIR"
cardSub: "Un espacio para organizar el día a día académico."
heroLinks:
  - { label: "Portal del estudiante", type: "Proyecto" }
kicker: Producto
tag: Producto · App del estudiante
summary: "La app de UNIR donde el alumno tiene todo: su resumen, la agenda, las tareas, el correo, los chats y los trámites."
lead: "Diseñé desde cero la app del estudiante de UNIR: el lugar donde el alumno ve su resumen, organiza su agenda y sus tareas, se comunica y hace todos sus trámites. Web app pensada como aplicación, en móvil, tablet y escritorio."
meta:
  - { label: "Rol", value: "Diseño de UI de principio a fin y flujos de UI" }
  - { label: "Equipo", value: "Mano a mano con UX/producto y desarrollo" }
  - { label: "Plataformas", value: "Móvil, tablet y escritorio" }
  - { label: "Estado", value: "Publicada, en piloto" }
company: "UNIR"
year: "2026"
cover: "/work/student-cover.jpg"
coverBorder: true
hero: "Pantallas de la app del estudiante en móvil: mi espacio, correo, página de titulación y el tablero de tareas"
---

## La app

Es el espacio personal del alumno de UNIR. Antes, todo esto vivía en un Moodle y en varias webs dispersas: había que saltar de un sitio a otro y no era fácil saber qué tenías pendiente, como en una universidad tradicional en la que todo pasa por secretaría.

La app se diseñó desde cero, sin una versión anterior a la que sustituir, para que el alumno tenga su vida académica en un solo sitio.

## Qué tiene

**Cinco secciones principales:**

- **Mi espacio.** La home: un resumen de tu área personal, de la titulación que estudias (o de las varias, si es el caso) y de lo próximo en tu calendario. Es el centro de la app porque reúne un poco de todo.
- **Calendario académico.** Una agenda completa, con vistas de día, tres días, semana y mes, como la de cualquier calendario de escritorio.
- **Tareas.** Un organizador con todo lo que el alumno tiene que hacer, oficial y personal.
- **Correo.** Un cliente de correo completo, al estilo de Outlook.
- **Chats.** Conversaciones con compañeros y profesores.

**Y secciones secundarias:** tu mentor, trámites y ayuda (donde se hacen todos los trámites de la carrera), la documentación de matrícula, el carné de estudiante, tus servicios, configuración y soporte.

<figure>
  <div class="placeholder">[Mi espacio en escritorio, con la sidebar y el resumen]</div>
  <figcaption>Fig. 02 · Mi espacio, el resumen de todo</figcaption>
</figure>

## Cómo está planteada

Con tantas secciones, el reto era que no pareciera un laberinto. Lo resolví con una estructura muy reconocible, iterada muchas veces con producto: **una sidebar con todas las secciones y una home que resume lo importante,** para que el alumno entienda dónde está cada cosa sin pensarlo.

Diseñé la UI de principio a fin y los flujos de UI de cada sección. La arquitectura y la UX se trabajaron mano a mano con producto, y la construcción, con desarrollo. Al ser tan grande, en algunos momentos colaboraron otras personas, pero el concepto y el diseño final son míos.

Está pensada como aplicación aunque hoy es una web app, y funciona en móvil, tablet y escritorio. Todo está construido con el [sistema de diseño multimarca](../one-system-three-brands/).

## La agenda

Fue la parte más difícil. Un calendario académico tiene que mostrar mucha información (clases, entregas, exámenes, eventos) en cuatro vistas distintas y en tres tamaños de pantalla, sin perder legibilidad. Como componente, fue el mayor reto de toda la app.

<figure>
  <div class="placeholder">[Calendario académico en sus vistas de semana y mes]</div>
  <figcaption>Fig. 03 · El calendario académico</figcaption>
</figure>

## Las tareas

Es la parte que más me gusta. Reúne en un solo lugar todo lo que el alumno tiene que hacer, con dos vistas de las mismas tareas: **tablero,** con una columna por estado, y **lista,** más detallada.

Lo complejo fue decidir cómo se comporta cada tarea. Hay cuatro tipos, y solo las personales se pueden editar. Las académicas, las entregas y las de gestión se pueden duplicar, y la copia sí es editable. Así lo oficial sigue siendo fiable, pero el alumno puede adaptarlo a su manera de trabajar.

| Tipo | Editable | Duplicable |
| --- | --- | --- |
| Personal | Sí | Sí |
| Académica | No | Sí, y la copia es editable |
| Entrega | No | Sí, y la copia es editable |
| Gestión | No | Sí, y la copia es editable |

<figure>
  <div class="placeholder">[Tareas en vista de tablero y de lista]</div>
  <figcaption>Fig. 04 · Dos vistas de las mismas tareas</figcaption>
</figure>

## Correo y chats

Las otras dos piezas de las que estoy más contento. El correo funciona como un cliente completo y los chats permiten hablar con compañeros y profesores sin salir de la app, así que el alumno ya no necesita otras herramientas para comunicarse con la universidad.

<figure>
  <div class="placeholder">[Correo y chats]</div>
  <figcaption>Fig. 05 · Correo y chats</figcaption>
</figure>

## Dónde está hoy

La app está publicada y en fase piloto, con alumnos reales. Su feedback nos llega de forma continua y sirve para seguir iterando.
