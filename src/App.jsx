import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Root } from './Pages/Root';
import { Signin } from './Pages/Signin';
import { RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Register } from './Pages/Register';
import { Welcome } from './Pages/Welcome';
import { UserTypeSelection } from './Pages/UserTypeSelection';







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

  
        <Route index element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="UserTypeSelection" element={<UserTypeSelection />} />
        
            
        

      
    </Route>
  )
);

export function App() {
  return (
    <RouterProvider router={router} />
  );
};


