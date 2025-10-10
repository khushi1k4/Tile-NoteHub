# Note Making Website

A Note Creating Application built to practice and understand core frontend concepts — including React.js, Redux Toolkit, Tailwind CSS, and Local Storage.
This web app allows users to create, edit, view, copy, delete, and share notes, while also displaying the last used date for each note.

⚙️ Designed for desktop use — non-responsive, purely for learning and practice purposes.

https://github.com/user-attachments/assets/8506ac87-e047-49ae-a04f-e46275b84d42

### 🧠 Tech Stack

- React.js (Vite Setup) – for fast development and modular UI
- Redux Toolkit – for global state management
- JavaScript (ES6+) – for logic and interactivity
- Tailwind CSS – for styling
- Local Storage – for persisting notes

### ✨ Features

📝 Create new notes
<br/>
✏️ Edit existing notes
<br/>
📅 View date of last edit or use
<br/>
👀 View full note details
<br/>
📋 Copy note content
<br/>
🗑️ Delete notes
<br/>
🔗 Share notes easily


## 🚀 Setup Instructions

1. Clone the repository

   - git clone https://github.com/yourusername/note-making-website.git
   - cd note-making-website

2. Install dependencies

   - npm install

3. Run the development server

   - npm run dev

4. Open your browser and navigate to the provided local URL.
---

### ⚡ Built With

- React + Vite (using Fast Refresh)
- Redux Toolkit for simplified state management
- Tailwind CSS for utility-first responsive design
- Local Storage for persistent data saving

### 🖥️ Compatibility

🧩 Designed for PC/Desktop only
 <br/>
🚫 Not optimized for mobile or tablet screens


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- npm install -D tailwindcss@3.4.1
>> npx tailwindcss init -p -->
<!-- This is used to crate project framework with vite react and tailwind for project -->


<!-- npm install @reduxjs/toolkit react-redux -->
<!-- This is used for the redux tool kit with react vite project to set up or create environment in RTK -->


     /* src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
<!-- These are utilitiesneeded to add in index.css  -->


<!-- import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {},
}) -->

<!-- Next step: To wrap up by the Provider to the App component in main.jsx and import the store.js in main.jsx -->

<!-- Give access of store to the Provider as the app also gets it access -->

<!-- Next step: Create slice for the project and reducers and initialState everything for it -->

<!-- import the Slice into the store.js -->

<!-- Routing: -->
<!-- npm i react-router-dom -->
<!-- Run this command in terminal to import react-router envirnoment in project -->
<!-- import { createBrowserRouter } from 'react-router-dom'
 -->
 <!-- This import is used in App.jsx to import routes -->
<!-- Routes are: -->
<!-- / -> Home -> create and update
     /pastes   -> all paste list down
     /pastes/:id -> view particular paste 
      -->

<!-- Then define the routes in createBrowserRouter() method in array of lists of objects as routes having path and element -->

