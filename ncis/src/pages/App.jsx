import React from 'react'
import '../styles/App.css'
import Homepage from "./Homepage.jsx"
import Manual from "./Manual.jsx"
import About from '../components/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

  // router and routes 

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route>
      <Route path="/" element = {<Homepage />} />
      <Route path="/Manual" element = {<Manual />} />
      <Route path="/About" component={About}/>
      </Route>
    )
  )

  function App() {

  return (
  <RouterProvider router = {router} />
  )
}

export default App
