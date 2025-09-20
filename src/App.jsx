// npm i react-router-dom //It is used to import and set up router in project and DOM
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPastes from './components/ViewPastes'


// Navbar component is must to define file in components
// Define Navbar component in every element of objects in array of lists 
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/pastes',
      element: 
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:'/pastes/:id',
      element: 
      <div>
        <Navbar/>
        <ViewPastes/>
      </div>
    },
  ]
)

function App() {
  
return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
