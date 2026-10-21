---
order: 3
title: A student's day-to-day, in one app
cardTitle: "Student app · UNIR"
cardSub: "A space to organise everyday academic life."
heroLinks:
  - { label: "Student portal", type: "Project" }
kicker: Product
tag: Product · Student app
summary: "UNIR's app where students have everything: their overview, calendar, tasks, mail, chats and admin procedures."
lead: "I designed UNIR's student app from scratch: the place where students see their overview, organise their calendar and tasks, communicate, and handle all their admin. A web app designed as an app, on mobile, tablet and desktop."
meta:
  - { label: "Role", value: "End-to-end UI design and UI flows" }
  - { label: "Team", value: "Hand in hand with UX/product and engineering" }
  - { label: "Platforms", value: "Mobile, tablet and desktop" }
  - { label: "Status", value: "Live, in pilot" }
company: "UNIR"
year: "2026"
cover: "/work/student-cover.jpg"
coverBorder: true
hero: "Student app screens on mobile: my space, mail, degree page and the task board"
---

## The app

It's the personal space for UNIR students. Before, all of this lived in a Moodle and several scattered websites: you had to jump from one to another, and it wasn't easy to know what you had pending, like a traditional university where everything goes through the admin office.

The app was designed from scratch, with no previous version to replace, so students have their academic life in one place.

## What's in it

**Five main sections:**

- **My space.** The home: an overview of your personal area, the degree you're studying (or several, if that's the case) and what's coming up in your calendar. It's the centre of the app because it brings a bit of everything together.
- **Academic calendar.** A full calendar with day, three-day, week and month views, like any desktop calendar.
- **Tasks.** An organizer for everything a student has to do, official and personal.
- **Mail.** A full mail client, in the style of Outlook.
- **Chats.** Conversations with classmates and teachers.

**Plus secondary sections:** your mentor, procedures and help (where every admin procedure for your degree happens), enrolment documents, student ID, your services, settings and support.

<figure>
  <div class="placeholder">[My space on desktop, with the sidebar and the overview]</div>
  <figcaption>Fig. 02 · My space, the overview of everything</figcaption>
</figure>

## How it's laid out

With so many sections, the challenge was not to make it a maze. I solved it with a very recognisable structure, iterated many times with product: **a sidebar with every section and a home that sums up what matters,** so students understand where everything is without thinking about it.

I designed the UI end to end and the UI flows for each section. The architecture and UX were worked out hand in hand with product, and the build with engineering. Because it's so large, other people collaborated at certain points, but the concept and the final design are mine.

It's designed as an app even though today it's a web app, and it works on mobile, tablet and desktop. Everything is built with the [multi-brand design system](../one-system-three-brands/).

## The calendar

It was the hardest part. An academic calendar has to show a lot of information (classes, submissions, exams, events) across four views and three screen sizes without losing legibility. As a component, it was the biggest challenge in the whole app.

<figure>
  <div class="placeholder">[Academic calendar in its week and month views]</div>
  <figcaption>Fig. 03 · The academic calendar</figcaption>
</figure>

## Tasks

My favourite part. It brings everything a student has to do into one place, with two views of the same tasks: a **board,** with one column per status, and a more detailed **list**.

The complex part was deciding how each task behaves. There are four types, and only personal ones can be edited. Academic tasks, submissions and admin tasks can be duplicated, and the copy is editable. That way the official ones stay reliable, while students can still adapt them to how they work.

| Type | Editable | Duplicable |
| --- | --- | --- |
| Personal | Yes | Yes |
| Academic | No | Yes, and the copy is editable |
| Submission | No | Yes, and the copy is editable |
| Admin | No | Yes, and the copy is editable |

<figure>
  <div class="placeholder">[Tasks in board and list views]</div>
  <figcaption>Fig. 04 · Two views of the same tasks</figcaption>
</figure>

## Mail and chats

The other two pieces I'm proudest of. Mail works as a full client, and chats let students talk to classmates and teachers without leaving the app, so they no longer need other tools to communicate with the university.

<figure>
  <div class="placeholder">[Mail and chats]</div>
  <figcaption>Fig. 05 · Mail and chats</figcaption>
</figure>

## Where it is today

The app is live and in a pilot phase with real students. Their feedback comes in continuously and drives the next iterations.
