---
order: 2
title: One AI product, two users
cardTitle: "SUPER EDU & AGC"
cardSub: "AI for teachers and students."
heroLinks:
  - { label: "SUPER EDU", type: "Project", hash: "part-2--students-study" }
  - { label: "AGC", type: "Project", hash: "part-1--teachers-create" }
kicker: AI product
tag: AI product · Prodi
summary: Teachers create a course with AI. Students study it with AI.
lead: I designed both sides of Prodi, UNIR's AI tool. Teachers use it to generate the content of a whole course; students use it to study that content. The shared challenge was letting AI help without adding complexity, for two users with opposite needs.
meta:
  - { label: "Products", value: "AGC (teachers) · Study viewer (students)" }
  - { label: "Brand", value: "Prodi" }
  - { label: "Platforms", value: "Desktop and mobile" }
  - { label: "Status", value: "Student viewer in pilot" }
tile: "/tiles/prodi.webp"
cover: "/work/ai-cover.jpg"
coverPosition: "right"
hero: "Teacher workspace and student viewer side by side"
---

## Part 1 · Teachers create

A teacher generates the full content of a course with AI, in two phases:

1. **Course definition:** a brief, a summary and a syllabus.
2. **Topic development:** for each topic, teaching notes, an extended summary, content, references and an optional deep-dive section. Plus a video plan with scripts, and activities.

Every piece goes through review: the head of studies approves it or asks for changes.

## My role

The product rules were defined by the team: the state model and the review flows. My job was to make them understandable: organise the information, keep processes consistent, and make something complex feel simple.

- **One pattern for every step:** default view, AI assistant open or closed, editing states. Learn one step and you know them all.
- **A stepper in the header** showing both phases and where the teacher is.
- **A topic sidebar** with the status of each section, a collapsed version with numbers only, and topics locked until it's their turn.
- **Readable states:** six internal states shown as five, with names a teacher understands.

<figure>
  <div class="placeholder">[Diagram · state model: pending, generated, editing, in review, changes requested, completed]</div>
  <figcaption>Fig. 02 · Every piece of content follows the same state cycle</figcaption>
</figure>

## The brief and the AI assistant

The brief is what the teacher gives the AI before generating anything: read-only academic data, the students' prior knowledge, the number of topics with a recommended value, the course focus, mandatory topics, optional sections and reference sources.

Next to it, an **AI assistant** offers actions like "Ask me questions and write the context". The AI doesn't only generate the course: it also helps the teacher write the brief, by interviewing them.

## Part 2 · Students study

With the content approved, students study it in a viewer that also generates study tools from it: summary, podcast, concept map, practice (flashcards, true or false, quizzes, mini cases) and an assistant.

The question was where those tools live relative to the content: next to it, instead of it, or on top of it.

## Exploration

- **Idea 1, next to the content.** A "What do you want to do?" menu opens each tool in a side panel, beside the topic.
- **Idea 2, instead of the content.** A side navigation groups the topic and the tools. Choosing a tool replaces the content.

Both already included asking the AI about selected text: the student highlights a passage and asks about it.

<figure>
  <div class="placeholder">[Early ideas next to the final design]</div>
  <figcaption>Fig. 03 · From fixed panels to AI on demand</figcaption>
</figure>

## The decision

I argued for the early ideas, especially the side panel: it let students read and use a tool at the same time.

The team chose the simplest option: more familiar to students, closer to the brand and lighter on the interface. My job became making that option work without losing what was good in the first ideas. Using AI without leaving the text stayed, through contextual actions instead of fixed panels.

## The final design

Content leads, and AI appears when the student asks for it.

- **A centred reading column.** The topic fills the screen, with no fixed panels around it.
- **Tools in the topic header.** Podcast, summary and concept map open as layers over the content.
- **Actions on selected text.** Highlight a passage to take a note or ask the AI. Notes stay marked in the text; questions open the assistant with the passage already quoted.
- **An optional assistant panel**, opened on demand.
- **Practice in a dropdown**, and a course home with syllabus, progress and the student's notes.

## Result

The student viewer is in pilot, used by real students. It was handed to engineering in phases, on desktop and mobile, and everything is built on the multi-brand design system, including the assistant's chat input.
