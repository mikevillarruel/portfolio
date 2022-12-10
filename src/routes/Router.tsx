import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { About } from '../pages/About';
import { ErrorPage } from '../pages/Error';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
