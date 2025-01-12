
import viteLogo from "/vite.svg";
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'


function App() {
  
 const routes = createHashRouter ([
  {path:"", element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"/about", element:<About/>},
    {path:"/portfolio", element:<Portfolio/>},
    {path:"/contact", element:<Contact/>},
    {path:"*" , element:<NotFound/>}
  ]}
 ])

  return (
    
      <RouterProvider router={routes}></RouterProvider>
  
  );
}

export default App
