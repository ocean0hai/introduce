import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'tailwindcss/tailwind.css'
import {BrowserRouter} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
