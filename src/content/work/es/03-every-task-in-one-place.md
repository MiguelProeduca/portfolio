---
order: 3
title: Todas las tareas en un solo lugar
cardTitle: "App del estudiante · UNIR"
cardSub: "Un espacio para organizar el día a día académico."
kicker: Producto
tag: Producto · App del estudiante
summary: Un organizador de tareas para estudiantes, con reglas que mantienen fiables los datos oficiales.
lead: Diseñé de principio a fin la app del estudiante de UNIR, su espacio virtual con calendario, agenda, tareas, trámites y carné. Este caso se centra en el organizador de tareas, que reúne en un solo lugar todo lo que el alumno tiene que hacer.
meta:
  - { label: "Rol", value: "Diseño de principio a fin, con revisión de mi responsable" }
  - { label: "Marca", value: "Estudiantes" }
  - { label: "Plataformas", value: "Mobile, tablet y desktop" }
  - { label: "Estado", value: "En traspaso a desarrollo" }
cover: "/work/student-cover.jpg"
coverBorder: true
hero: "Pantallas de la app del estudiante en móvil: mi espacio, correo, página de titulación y el tablero de tareas"
---

## Problema

Los alumnos echaban en falta un lugar donde tener todas sus tareas juntas. Las entregas, lo académico, los trámites y lo personal vivían dispersos.

Como la app está en contacto constante con los alumnos, su feedback llegaba directo: necesitaban un sitio para organizarse.

## Solución

Un organizador con dos vistas de las mismas tareas:

- **Tablero.** La vista principal, con una columna por estado, para verlo todo de un vistazo y mover el trabajo de una fase a otra.
- **Lista.** Una vista más detallada para quien la prefiera. No todos los alumnos se organizan igual.

Las tareas se filtran por titulación, asignatura y tipo de tarea. En desktop, los filtros activos aparecen como chips; en mobile se agrupan en un panel inferior de "Filtrar y ordenar".

## Lo más difícil · el modelo de tareas

Lo complejo no fue la interfaz, sino decidir cómo se comporta cada tarea. Cada una combina un estado (pendiente, completada, descartada) y un tipo.

| Tipo | Editable | Duplicable |
| --- | --- | --- |
| Personal | Sí | Sí |
| Académica | No | Sí, y la copia es editable |
| Entrega | No | Sí, y la copia es editable |
| Gestión | No | Sí, y la copia es editable |

La decisión más difícil fue si el alumno podía editar cualquier tarea. Decidimos que no: solo las personales. Las demás se pueden duplicar, y la copia sí es editable.

Así el organizador sigue siendo fiable, porque las tareas oficiales no cambian, pero el alumno conserva la libertad de adaptarlas a su manera de trabajar.

## Especificado para desarrollo

El organizador llega a desarrollo sin huecos de interpretación:

- **Empty states,** incluido el de tareas vencidas.
- **Tooltips explicativos y contextuales** para los tipos de tarea, marcar como completada y las tareas descartadas.
- **Disposición de columnas en cuatro tamaños** (375, 768, 1280 y 1920), con las reglas de cada uno.
- **Filtros por dispositivo:** chips en desktop y panel inferior en mobile.
- **Anotaciones** en cada bloque que explican el comportamiento y los casos límite.

Todo está montado con componentes del sistema de diseño, incluidas las tarjetas de tarea y las columnas del tablero.

<figure>
  <div class="placeholder">[Vistas de tablero y lista, una junto a la otra]</div>
  <figcaption>Fig. 02 · Dos vistas de las mismas tareas</figcaption>
</figure>

## Resultado

El organizador está en traspaso a desarrollo como parte de la evolución de la app del estudiante. Por primera vez, el alumno tendrá todas sus tareas en un solo lugar, dentro de la misma app donde ya consulta su calendario, sus trámites y su carné.
