---
order: 1
title: One system, three brands
cardTitle: "Multi-brand design system"
cardSub: "One design system for three brands."
heroLinks:
  - { label: "Multi-brand design", type: "Design system" }
kicker: Design system
tag: Design system · UNIR
summary: "A multi-brand design system on PrimeNG for UNIR's three products."
lead: "One design system for UNIR's three products: the student app, Prodi's AI products and the back office. A single library on PrimeNG, with each brand resolved in the tokens."
meta:
  - { label: "Role", value: "Design system lead designer" }
  - { label: "Company", value: "UNIR · Grupo Proeduca" }
  - { label: "Brands", value: "Estudiantes, Prodi, Foundations" }
  - { label: "Tools", value: "Figma, Token Studio, Zeroheight" }
cover: "/work/ds-cover.jpg"
hero: "Overview of design system components: chat input, task cards, sidebar, calendar, buttons and form fields"
---

## The system

A single design system for UNIR's three digital products, each with its own brand:

- **Estudiantes:** the app where students study, get organised and talk to classmates.
- **Prodi:** the AI products, a chat assistant and content generators for teachers and students.
- **Foundations:** the internal brand, the back office.

They share one component library and one token architecture. What changes between brands (colour, radii, type, tone) is resolved in the tokens, not in the components. We built on **PrimeNG**, the library engineering builds on, and added everything the products need that PrimeNG doesn't ship.

Before, each product had grown its own system, with several versions of the same pieces. Unifying them was the starting point, not the goal: the goal is to design and build faster without losing consistency.

## How it's built

**Layered tokens.** Values flow through five chained collections: primitives, shared semantics, colour semantics, component semantics and components. Each brand is a mode, and every collection shares one mode-naming convention, so switching a screen's brand is a predictable gesture. We set it up this way because without Figma Enterprise there's no native inheritance between brands.

<figure>
  <img src="/work/ds-variables.jpg" alt="Figma variables panel: Primitive, Semantic/Common, Semantic/Color Scheme, Component/Common, Component/Color Scheme and Custom collections, with the primary button tokens and one mode column per brand: Estudiantes, Prodi, Foundations and the base theme" loading="lazy" />
  <figcaption>Fig. 02 · The primary button in the component collection. Each brand is a mode and resolves its own hover and active shades. The last column is PrimeNG's base theme.</figcaption>
</figure>

**PrimeNG components and our own.** If PrimeNG has the component, its structure stays and only tokens change. If it doesn't, we build it in a section of our own, mirroring PrimeNG's token anatomy, so for engineering and for every brand a custom component behaves just like a native one.

That's how we built, among others, the chat input, chat box, sidebar, calendar, task organizer, file upload, top bar, nav bar, menu bar and a mobile stepper.

## A closer look · the chat input

It's the component where the system's approach shows most. It serves two kinds of conversation, with the AI and between students, and instead of an "AI / Chat" property it has **"vertical / horizontal"**: the component depends on layout, not on use case.

- **Vertical:** text on its own row with actions below, made for long prompts.
- **Horizontal:** actions, text and send on one line, like any messaging app.

When the AI also needed the horizontal layout, the component already supported it. Files and images come in through a slot with their own attachment component, and it covers mobile and desktop, send states (send, loading, stop generating), audio and transcription, disabled, and with or without attachments.

<figure>
  <img src="/work/ds-chat-input.jpg" alt="The same chat input in three brands: Prodi in a vertical layout with very rounded corners, Estudiantes horizontal and rounded, Foundations horizontal with square corners" loading="lazy" />
  <figcaption>Fig. 03 · One component, two layouts, three brands: vertical in Prodi, horizontal in Estudiantes and Foundations.</figcaption>
</figure>

## How we work with it

The system is built hand in hand with engineering, not handed over as a finished package. New screens are assembled from existing pieces, and when a new one is needed it goes into the system so all three brands can use it.

For maintenance at scale (auditing tokens, renaming variables, documenting components) I use AI connected to Figma. The design decisions are mine.

## Where it is today

It serves the student app, the AI tools and the internal back office. Where there were several versions of a piece, there is now one.

Next is merging Prodi into Estudiantes: since they share a structure, and the AI components already exist in the Estudiantes mode, it's close to a mode switch. After that, taking the system to code, which the token architecture is already set up for.
