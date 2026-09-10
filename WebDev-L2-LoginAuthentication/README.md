# Vaultline — Login Authentication System

A responsive front-end Login Authentication System built using **HTML5, CSS3, and Vanilla JavaScript**.

This project was developed as part of the **Oasis Infobyte Web Development Internship (OIBSIP)**.

---

## 📌 Project Overview

Vaultline is a browser-based authentication system that allows users to:

- Create an account
- Validate password requirements
- Prevent duplicate accounts
- Securely hash passwords using SHA-256
- Log in using username or email
- Maintain a login session
- Access a protected dashboard
- Log out and clear the active session

The project uses **localStorage** for storing registered users and the current session.

> **Note:** This is a front-end demonstration project. Client-side authentication and localStorage are not suitable for production authentication systems.

---

## 🎯 Objectives

The main objectives of this project are:

1. Create a registration interface.
2. Validate user input.
3. Enforce password requirements.
4. Prevent duplicate accounts.
5. Hash passwords before storing them.
6. Implement login authentication.
7. Protect the dashboard from unauthenticated access.
8. Implement logout functionality.
9. Create a responsive and user-friendly interface.

---

## ✨ Features

### Registration

- Username or email registration
- Password confirmation
- Minimum password length of 8 characters
- Password must contain at least one number
- Empty-field validation
- Password mismatch validation
- Duplicate username/email detection
- SHA-256 password hashing
- Account creation timestamp

### Login

- Login using username or email
- Password verification
- Empty-field validation
- Generic authentication error message
- Session creation after successful login

### Protected Dashboard

- Dashboard is accessible only with an active session
- Displays the logged-in identifier
- Displays session start time
- Displays account creation time
- Automatically redirects unauthenticated users to the login page

### Logout

- Clears the active session
- Redirects the user to the login page

### UI & Responsiveness

- Modern dark-themed interface
- Responsive authentication cards
- Responsive dashboard layout
- Accessible form labels
- Visual validation/error states
- Google Fonts for improved typography

---

## 🛠️ Technologies Used

- **HTML5** — Page structure and forms
- **CSS3** — Styling, layout, responsiveness, and visual design
- **JavaScript (ES6+)** — Authentication logic and interactions
- **Web Crypto API** — SHA-256 password hashing
- **localStorage** — Client-side user and session storage
- **Google Fonts** — Manrope and Inter

---

## 📂 Project Structure

```text
WebDev-L2-LoginAuthentication/
│
├── index.html
├── register.html
├── login.html
├── dashboard.html
├── auth-core.js
├── auth-style.css
├── README.md
│
└── screenshots/
    ├── login-desktop.png
    ├── register-desktop.png
    ├── dashboard-desktop.png
    └── mobile.png
