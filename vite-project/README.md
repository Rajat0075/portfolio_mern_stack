# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to Connect NodeJS to React-Vite
Step-1 Open React-Vite Project

Step-2 Open vite.config.js then write in file
//Code Start
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //api connect start
  server: {
    proxy:{
      '/api': 'http://localhost:3000/',
    }
  }
  //api connect end
})
//Code End

step-3: create nodejs project
node init js
npm i express cors

step-4 create app.js file in node-project
Write Codes on It

Step-5 Create a Component as you need we create about.jsx

//Code Start
import { useEffect, useState } from "react";

export default function About() {

  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch('/api/abouts').then((respone) => respone.json()).then((data) => setAbout(data));
  }, []);

  const About = about.map(about => (<p key={about.id}>{about.para}</p>))

  return (
    <div className="main-about">
      <p>{About}</p>
    </div>
  )
}
//Code End

Step-6 Run Node Js Project and Run React-vite Project

## End