# MarginLens

MarginLens is a frontend web application built with **Vue 3** and **Vite**, designed as part of a semester project for managing products, categories, cost profiles, and margin reports through a clean Single Page Application (SPA) interface.

The application communicates with a backend REST API and focuses on modular, reusable frontend components, client-side routing, and form validation.

---

## 🚀 Project Overview

MarginLens replaces manual spreadsheet-based product tracking with a centralized digital system. It allows users to:

- Manage product catalog data
- Organize categories
- Define cost profiles
- Generate margin reports
- Navigate seamlessly using SPA routing

The system is designed as a **Single Page Application (SPA)** to ensure fast navigation without full page reloads.

---

## 🛠 Tech Stack

- **Vue 3** – Frontend framework using component-based architecture
- **Vite** – Fast build tool with Hot Module Replacement (HMR)
- **Vue Router** – Client-side routing system for SPA navigation
- **Axios** – Handles HTTP requests to backend REST APIs
- **HTML5** – Structure of the application
- **CSS3** – Styling and responsive design
- **JavaScript (ES6+)** – Application logic and validation

Folder Structure
MarginLens (Frontend Project)
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── jsconfig.json
├── .gitignore
├── .prettierrc.json
├── README.md
│
├── .vscode/
│   └── extensions.json
│
└── src/
    │
    ├── main.js
    ├── App.vue
    │
    ├── router/
    │   └── index.js
    │
    ├── views/
    │   ├── Dashboard.vue
    │   ├── Categories.vue
    │   ├── ViewProducts.vue
    │   ├── CreateProduct.vue
    │   ├── EditProduct.vue
    │   ├── CostProfile.vue
    │   └── Report.vue
    │
    ├── components/
    │   ├── LoaderComponent.vue
    │   └── icons/
    │       ├── IconCommunity.vue
    │       ├── IconDocumentation.vue
    │       ├── IconEcosystem.vue
    │       ├── IconSupport.vue
    │       └── IconTooling.vue
    │
    ├── Validators/
    │   └── Validator.js
    │
    └── assets/
        ├── base.css
        ├── main.css
        └── logo.svg
---

## ⚙️ Features

### 📊 Dashboard
Central overview of system navigation and quick access modules.

### 📦 Product Management
Create, update, and manage product records including pricing and category assignment.

### 🗂 Category Management
Organize products into structured groups for better classification.

### 💰 Cost Profiles
Manage additional cost factors like logistics and overhead expenses.

### 📈 Margin Reports
Generate calculated profit margin insights based on product and cost data.

### ✅ Client-Side Validation
Ensures data integrity before sending requests to backend APIs.

### 🔄 SPA Navigation
Smooth navigation using Vue Router without page reloads.

---

## 🌐 Architecture

- Single Page Application (SPA)
- Component-based modular design
- REST API communication via Axios
- Separation of UI, logic, and service layers
- Reusable Vue components

---

## 🔌 API Communication

| Method | Usage |
|--------|------|
| GET    | Fetch data (products, categories, reports) |
| POST   | Create new records |
| PUT    | Update existing records |

Axios is used to handle all API communication between frontend and backend.

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
npm run dev
```
Author: Umeez Anzar
