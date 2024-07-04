import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Landing from './Components/Landing';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Landing />} />
      <Route path='lol' element={<h1>lol</h1>} />
    </Route>
  ))


  return (
    <>
      <div className='bg-[#111111] min-h-screen wrapper  md:pl-[150px] relative'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
