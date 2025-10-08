import './App.css'
import Home from './Components/Home';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginForm from './Components/Login';
import SignUpForm from './Components/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <SignUpForm />
    },
    {
      path:"/login",
      element: <LoginForm />
    },
    {
      path:"/home",
      element: <Home />
    },

  ]);

  return <RouterProvider router={router}/>
};

export default App
