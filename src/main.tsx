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
import DashboardLayout from './pages/dashboard/layout';
import Dashboard from './pages/dashboard/Dashboard'

const router= createBrowserRouter([
  {path:'/',
    element: <DashboardLayout>{<Dashboard />}</DashboardLayout>,
  },{
    path: '/dashboard', 
    element: <DashboardLayout>{<Dashboard />}</DashboardLayout>,
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
