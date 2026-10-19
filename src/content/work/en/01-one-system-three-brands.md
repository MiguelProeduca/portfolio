---
order: 1
title: One system, three brands
kicker: Design system
tag: Design system · UNIR
summary: Three fragmented design systems unified into one, on PrimeNG.
lead: UNIR had three products with three separate design systems. I unified them into one multi-brand system on PrimeNG, without Figma Enterprise. Today it serves the student app, Prodi and the internal back office.
meta:
  - { label: "Role", value: "Design system lead designer" }
  - { label: "Company", value: "UNIR · Grupo Proeduca" }
  - { label: "Brands", value: "Estudiantes, Prodi, Foundations" }
  - { label: "Tools", value: "Figma, Token Studio, Zeroheight" }
cover: "/work/ds-cover.jpg"
hero: "Overview of design system components: chat input, task cards, sidebar, calendar, buttons and form fields"
---

## Context

Each UNIR product had grown its own design system, iterated many times on its own:

- **Estudiantes:** the app where students study and talk to their classmates.
- **Prodi:** the AI products, a chat assistant and content generators for teachers and students.
- **Foundations:** the internal brand, the back office.

The result was fragmentation: several buttons for the same job, duplicated decisions and nothing guaranteeing consistency across products.

## Problem

Unify three systems into one without any brand losing its identity.

We started from PrimeNG as a shared base, but a generic library only covers the generic. The products, especially the AI ones, needed components that PrimeNG doesn't have. If each one was solved its own way, the system would fragment again.

## Constraint

Without Figma Enterprise there is no native inheritance between brands, so each brand lives as a mode across five chained collections, plus a custom section. Switching a screen to another brand means switching the mode in every one of them.

**How I handled it:** every collection shares one mode-naming convention. Switching brands stops being a hunt through collections and becomes a repeatable, predictable gesture.

## Decisions

**Layered architecture.** Tokens flow through five chained collections, from raw values to components: primitives, shared semantics, colour semantics, component semantics and components. Each brand resolves its values through its own modes.

<figure>
  <img src="/work/ds-variables.jpg" alt="Figma variables panel: Primitive, Semantic/Common, Semantic/Color Scheme, Component/Common, Component/Color Scheme and Custom collections, with the primary button tokens and one mode column per brand: Estudiantes, Prodi, Foundations and the base theme" loading="lazy" />
  <figcaption>Fig. 02 · The primary button in the component collection. Each brand is a mode and resolves its own hover and active shades. The last column is PrimeNG's base theme.</figcaption>
</figure>

**Adapt or create.** If PrimeNG has the component, its structure stays and only tokens change. If it doesn't, it's built from scratch in the custom section, mirroring PrimeNG's token anatomy with new tokens. For engineering and for every brand, a custom component is indistinguishable from a native one.

Custom components built this way include the chat input, chat box, sidebar, calendar, task organizer, file upload, top bar, nav bar, menu bar and a mobile stepper.

## Example · the chat input

One component serves two kinds of conversation: with the AI, and between students.

**The key decision was to tie the component to layout, not to use case.** Instead of an "AI / Chat" property, it has "vertical / horizontal":

- **Vertical:** text on its own row with actions below, made for long prompts.
- **Horizontal:** actions, text and send on one line, like any messaging app.

At first the AI used the vertical layout and the chat the horizontal one. The product moved fast, and soon the AI needed the horizontal layout too. The component already supported it.

Files and images come in through a slot, with their own attachment component and loading states. It covers mobile and desktop, send states (send, loading, stop generating), audio and transcription, disabled, an add button, and with or without attachments.

<figure>
  <img src="/work/ds-chat-input.jpg" alt="The same chat input in three brands: Prodi in a vertical layout with very rounded corners, Estudiantes horizontal and rounded, Foundations horizontal with square corners" loading="lazy" />
  <figcaption>Fig. 03 · One component, two layouts, three brands: vertical in Prodi, horizontal in Estudiantes and Foundations.</figcaption>
</figure>

## Result

Three systems became one, serving three very different products: the student app, the AI tools and the internal back office. It was built hand in hand with engineering, not handed over as a finished package.

Where there were several buttons there is now one, and new screens are assembled from existing components instead of designed from scratch.

**The real test is coming.** The student brand will absorb Prodi. Because both share one structure, and the AI-only components already exist in the student mode, the merge is close to a mode switch.

## Next step

Taking the system to code. The token architecture is designed so that jump is clean.
