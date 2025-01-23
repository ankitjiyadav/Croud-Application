import { useState } from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import './App.css'
import User from './components/getuser/User';
import Add from './components/addUser/Add';
import Edit from './components/updateuser/Edit';

function App() {
   const route = createBrowserRouter([
        {
          path: '/',
          element:<User/>,
        },
        {
          path: '/add',
          element:<Add/>,
        },
        {
          path: '/edit/:id',
          element: <Edit/>,
        },
   ])
  return (
    <>
    <div className='App'>
        <RouterProvider router={route}></RouterProvider>
    </div>
    </>
  )
}

export default App
