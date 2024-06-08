import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';
import Error from './pages/error';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
          },
          {
            path: '/contact',
            element: <Contact />,
          },
          {
            path: '/portfolio',
            element: <Portfolio />,
          },
          {
            path: '/resume',
            element: <Resume />,
          },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
