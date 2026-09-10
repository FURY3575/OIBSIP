# Daybook — To-Do Web App

A clean and responsive to-do list application built using HTML5, CSS3, and Vanilla JavaScript as part of the Oasis Infobyte Web Development Internship (OIBSIP).

## 📌 Task Information

- **Internship:** Oasis Infobyte Web Development Internship
- **Track:** Web Development
- **Level:** Level 2
- **Task:** Task 3 — To-Do Web App
- **Project:** Daybook — To-Do

## 📖 Overview

Daybook is a simple task management application designed to help users keep track of their daily tasks.

Users can add new tasks, mark tasks as completed, edit existing tasks inline, and delete tasks. Tasks are automatically organised into separate Pending and Completed lists.

The application also includes timestamps and uses browser `localStorage` so tasks remain available after refreshing the page.

## ✨ Features

- ➕ Add new tasks
- 📋 Separate Pending and Completed task lists
- ✅ Mark tasks as complete
- 🔄 Move completed tasks between lists
- ✏️ Edit task text inline
- 🗑️ Delete tasks
- 🔢 Dynamic pending task count
- 🔢 Dynamic completed task count
- 🕐 Task creation timestamps
- ✅ Task completion timestamps
- 💾 `localStorage` persistence
- 💬 Friendly empty-state messages
- ⌨️ Press Enter to add a task
- 📱 Responsive mobile layout
- 🎨 Clean and minimal interface

## 🛠️ Technologies Used

- **HTML5** — Application structure
- **CSS3** — Styling, layout, responsive design, and visual presentation
- **JavaScript (Vanilla)** — Application logic and DOM manipulation
- **localStorage** — Persistent task storage
- **Google Fonts**
  - Outfit
  - Inter

No JavaScript frameworks or external libraries are required.

## 📋 Task Management

### Add Task

Enter a task in the input field and click **Add Task**.

The new task immediately appears in the **Pending** list.

Tasks are stored with:

- Unique ID
- Task text
- Completion status
- Creation timestamp
- Completion timestamp

## ✅ Complete Tasks

Each task has a circular completion toggle.

When a pending task is marked complete:

```text
Pending
   ↓
Mark Complete
   ↓
Completed
