import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shopping from './components/Shopping/Shopping';
import Main from './Layout/Main';
import { productAndCartLoader } from './Loader/productAndCartLoader';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [{
      path: '/',
      loader: ()=>  fetch('products.json'),
      element: <Shopping></Shopping>
      },
      {
      path: '/order',
      loader:  productAndCartLoader ,
      element: <Orders></Orders>
      },
      {
      path: '/inventory',
      element: <Inventory></Inventory>
      }
    ]
    },
    {
      path:'about',
      element: <About></About>
    }

  ])
  return (
  <div >
     
    <RouterProvider router={router}></RouterProvider>

    
    </div>
  );
}

export default App;
