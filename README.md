Note Creating Application to create, edit with date of last used, view, copy, delete and share || Tech-Stack: React.js , Redux Tool Kit, JS, Tailwind and local Storage || Learning N Building Frontend

https://github.com/user-attachments/assets/8506ac87-e047-49ae-a04f-e46275b84d42

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

