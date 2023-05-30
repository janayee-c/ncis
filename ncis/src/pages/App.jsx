import React from 'react'
import '../styles/App.css'
import Homepage from "./Homepage.jsx"
import Manual from "./Manual.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

  // router and routes 

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route>
      <Route path="/" element = {<Homepage />} />
      <Route path="manual" element = {<Manual />} />
      </Route>
    )
  )

  function App() {

  return (
  <RouterProvider router = {router} />
  )
}

export default App
