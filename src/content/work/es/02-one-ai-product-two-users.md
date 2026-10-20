---
order: 2
title: Un producto de IA, dos usuarios
cardTitle: "SUPER EDU y AGC"
cardSub: "Inteligencia artificial para profesores y estudiantes."
heroLinks:
  - { label: "SUPER EDU", type: "Proyecto", hash: "parte-2--el-alumno-estudia" }
  - { label: "AGC", type: "Proyecto", hash: "parte-1--el-profesor-crea" }
kicker: Producto de IA
tag: Producto de IA · Prodi
summary: El profesor crea una asignatura con IA. El alumno la estudia con IA.
lead: Diseñé las dos caras de Prodi, la herramienta de IA de UNIR. El profesor la usa para generar el contenido de una asignatura completa; el alumno, para estudiarlo. El reto común era que la IA ayudara sin complicar, a dos usuarios con necesidades opuestas.
meta:
  - { label: "Productos", value: "AGC (profesores) · Visor de estudio (alumnos)" }
  - { label: "Marca", value: "Prodi" }
  - { label: "Plataformas", value: "Desktop y mobile" }
  - { label: "Estado", value: "Visor del alumno en piloto" }
cover: "/work/ai-cover.jpg"
coverPosition: "right"
hero: "Espacio del profesor y visor del alumno, uno junto al otro"
---

## Parte 1 · El profesor crea

El profesor genera con IA el contenido completo de una asignatura, en dos fases:

1. **Definición de la asignatura:** ficha, resumen e índice.
2. **Desarrollo de temas:** para cada tema, indicaciones didácticas, resumen amplio, contenido, referencias y una sección opcional "A fondo". Además, plan de vídeos con guiones, y actividades.

Cada pieza pasa por revisión: el director de estudios la aprueba o pide cambios.

## Mi papel

Las reglas del producto venían definidas por el equipo: el modelo de estados y los flujos de revisión. Mi trabajo fue hacerlas comprensibles: organizar la información, mantener la coherencia entre procesos y que algo complejo se sintiera simple.

- **Un mismo patrón en cada paso:** vista por defecto, asistente de IA abierto u oculto y estados de edición. Quien aprende a usar un paso sabe usarlos todos.
- **Un stepper en la cabecera** que muestra las dos fases y dónde está el profesor.
- **Una sidebar de temas** con el estado de cada apartado, una versión colapsada solo con números y los temas bloqueados hasta que les toca.
- **Estados legibles:** seis estados internos se muestran como cinco, con nombres que entiende un profesor.

<figure>
  <div class="placeholder">[Diagrama · modelo de estados: pendiente, generado, en edición, en revisión, cambios solicitados, completado]</div>
  <figcaption>Fig. 02 · Cada pieza de contenido sigue el mismo ciclo de estados</figcaption>
</figure>

## La ficha y el asistente

La ficha es el briefing que el profesor le da a la IA antes de generar nada: datos académicos de solo lectura, conocimiento previo de los alumnos, número de temas con un valor recomendado, enfoque de la asignatura, temas obligatorios, secciones opcionales y fuentes de referencia.

A su lado, un **asistente de IA** propone acciones como "Hazme preguntas y redacta el contexto". La IA no solo genera la asignatura: también ayuda al profesor a escribir el briefing, entrevistándolo.

## Parte 2 · El alumno estudia

Con el contenido aprobado, el alumno lo estudia en un visor que además genera herramientas de estudio a partir de él: resumen, podcast, mapa conceptual, práctica (flashcards, verdadero o falso, test, mini-casos) y un asistente.

La pregunta era dónde viven esas herramientas respecto al contenido: al lado, en lugar de él o encima.

## Exploración

- **Idea 1, junto al contenido.** Un menú "¿Qué quieres hacer?" abre cada herramienta en un panel lateral, al lado del tema.
- **Idea 2, en lugar del contenido.** Una navegación lateral agrupa el tema y las herramientas. Al elegir una, sustituye al contenido.

Las dos incluían ya preguntar a la IA sobre texto seleccionado: el alumno subraya un fragmento y pregunta sobre él.

<figure>
  <div class="placeholder">[Ideas iniciales junto al diseño final]</div>
  <figcaption>Fig. 03 · De paneles fijos a IA a demanda</figcaption>
</figure>

## La decisión

Yo defendía las primeras ideas, sobre todo el panel lateral: permitía leer y usar una herramienta a la vez.

El equipo eligió la opción más simple: más reconocible para el alumno, más cercana a la marca y más ligera de interfaz. Mi trabajo pasó a ser hacer que esa opción funcionara sin perder lo que valía de las primeras ideas. Usar la IA sin abandonar el texto se mantuvo, a través de acciones contextuales en lugar de paneles fijos.

## El diseño final

El contenido es el protagonista y la IA aparece cuando el alumno la pide.

- **Una columna de lectura centrada.** El tema ocupa la pantalla, sin paneles fijos alrededor.
- **Herramientas en la cabecera del tema.** Podcast, resumen y mapa conceptual se abren como capas sobre el contenido.
- **Acciones sobre el texto seleccionado.** Al subrayar un fragmento, el alumno puede tomar apuntes o preguntar a la IA. Las notas quedan marcadas en el texto; las preguntas abren el asistente con el fragmento ya citado.
- **Un panel de asistente opcional**, que se abre a demanda.
- **La práctica en un desplegable**, y una home de asignatura con el temario, el progreso y los apuntes del alumno.

## Resultado

El visor del alumno está en fase piloto y ya lo usan alumnos reales. Se entregó a desarrollo por fases, en desktop y mobile, y todo está construido sobre el sistema de diseño multimarca, incluido el input de chat del asistente.
