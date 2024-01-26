import { createBrowserRouter, Route,  NavLink, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from './Layours/RootLayout';
import Home from './Pages/Home';
import StatsLayout from './Layours/StatsLayout';
import Stats, { statsLoader } from './Pages/Stats/Stats';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout />}>
    <Route index element = {<Home /> }/>
 
    <Route path = "stats" element = {<StatsLayout/>}>
      <Route 
      index
      element = {<Stats/>}
      loader = {statsLoader}
      />

    
    </Route>
    </Route>
  ))

  function App() {
    return (
   
     
  
      <RouterProvider router = {router}/>
  
      
       
      
    );
  }
  
  export default App