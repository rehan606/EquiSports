import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './components/MainLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AddEquipment from './pages/AddEquipment.jsx';
import Equipments from './components/Equipments.jsx';
import EquipmentDetails from './pages/EquipmentDetails.jsx';
import AllEquipments from './components/AllEquipments.jsx';
// import SignUp from './pages/SignUp.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx';
import Details from './components/Details.jsx';
import EquipDetails from './pages/EquipDetails.jsx';
import PrivetRouter from './router/PrivetRouter.jsx';
import Categories from './components/Categories.jsx';
import MyEquipments from './pages/MyEquipments.jsx';
import UpdateEquipment from './pages/UpdateEquipment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Equipments></Equipments>,
        loader: () => fetch('https://equi-sports-server-mu.vercel.app/equipments')
        // loader: () => fetch('http://localhost:5000/equipments'),
      },
      
    ]
  },
  {
    path: 'allEquipment',
    element: <AllEquipments></AllEquipments>,
    loader: () => fetch('https://equi-sports-server-mu.vercel.app/equipments')
    // loader: () => fetch('http://localhost:5000/equipments'),
  },
  {
    path: 'addEquipment',
    element: <PrivetRouter> <AddEquipment></AddEquipment> </PrivetRouter> ,
  },

  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <SignIn></SignIn>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path:'/details',
    element: <PrivetRouter>  <Details></Details>  </PrivetRouter>,
  },
  {
    path:'/myEquipments',
    element: <PrivetRouter> <MyEquipments></MyEquipments> </PrivetRouter>  ,
  },
  // {
  //   path:'/update/:id',
  //   element: <UpdateEquipment></UpdateEquipment>,
  //   loader: ({params})=> fetch(`http://localhost:5000/equipments/${params.id}`)
  // }
  



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
