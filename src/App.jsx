import React from 'react'
import { Router, RouterProvider } from 'react-router'
import { routers } from './routers/index';

function App() {
  return (
   <RouterProvider router={routers}/>
  )
}

export default App