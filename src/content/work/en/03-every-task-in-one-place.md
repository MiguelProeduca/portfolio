---
order: 3
title: Every task in one place
cardTitle: "Student app · UNIR"
cardSub: "A space to organise everyday academic life."
heroLinks:
  - { label: "Student portal", type: "Project" }
kicker: Product
tag: Product · Student app
summary: A task organizer for students, with rules that keep official data reliable.
lead: I designed UNIR's student app end to end, the student's virtual space for calendar, agenda, tasks, admin procedures and student ID. This case focuses on the task organizer, which brings everything a student has to do into one place.
meta:
  - { label: "Role", value: "End-to-end design, reviewed by my manager" }
  - { label: "Brand", value: "Estudiantes" }
  - { label: "Platforms", value: "Mobile, tablet and desktop" }
  - { label: "Status", value: "In handoff to engineering" }
tile: "/tiles/unir.webp"
cover: "/work/student-cover.jpg"
coverBorder: true
hero: "Student app screens on mobile: my space, mail, degree page and the task board"
---

## Problem

Students were missing one place where all their tasks lived together. Assignments, academic work, admin procedures and personal tasks were scattered.

Because the app is in constant contact with students, their feedback came in directly: they needed somewhere to get organised.

## Solution

One organizer with two views of the same tasks:

- **Board.** The main view, with a column per status, to see everything at a glance and move work from one stage to the next.
- **List.** A more detailed view for those who prefer it. Not every student organises the same way.

Tasks can be filtered by degree, subject and task type. On desktop, active filters show as chips; on mobile they're grouped in a "Filter and sort" bottom sheet.

## The hardest part · the task model

The complexity wasn't the interface. It was deciding how each task behaves. Every task combines a status (pending, completed, discarded) and a type.

| Type | Editable | Duplicable |
| --- | --- | --- |
| Personal | Yes | Yes |
| Academic | No | Yes, and the copy is editable |
| Assignment | No | Yes, and the copy is editable |
| Admin | No | Yes, and the copy is editable |

The hardest decision was whether students could edit any task. We decided they couldn't: only personal ones. Everything else can be duplicated, and the copy is editable.

That keeps the organizer reliable, because official tasks never change, while students keep the freedom to adapt them to how they work.

## Specified for engineering

The organizer goes to engineering with no room for interpretation:

- **Empty states,** including overdue tasks.
- **Explanatory and contextual tooltips** for task types, completing a task and discarded tasks.
- **Column layout at four sizes** (375, 768, 1280 and 1920), with the rules for each.
- **Filters per device:** chips on desktop, a bottom sheet on mobile.
- **Annotations** on every block explaining behaviour and edge cases.

Everything is built from design system components, including task cards and board columns.

<figure>
  <div class="placeholder">[Board and list views side by side]</div>
  <figcaption>Fig. 02 · Two views of the same tasks</figcaption>
</figure>

## Result

The organizer is in handoff to engineering as part of the student app's evolution. For the first time, students will have every task in one place, inside the same app where they already check their calendar, procedures and student ID.
