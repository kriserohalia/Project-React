import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Book from './pages/Book.jsx'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Detail from './pages/Detail.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/books",
        element:<Detail />,
      },
      {
        path:"/detail/:id",
        element:<Book />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
