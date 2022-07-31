import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Another from './components/Another'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/another" element={<Another />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
