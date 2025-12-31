import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import React  from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard.tsx'

const router= createBrowserRouter([
  {path:'/',
    element: <Dashboard /> , 
  },{
    path: '/dashboard', 
    element: <Dashboard /> 
  },
])

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
