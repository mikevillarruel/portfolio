import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { About } from '../pages/About';
import { ErrorPage } from '../pages/Error';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

const name = 'Michael Villarruel'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => (document.title = `${name} | Home`),
      },
      {
        path: 'about',
        element: <About />,
        loader: () => (document.title = `${name} | About Me`),
      },
      {
        path: 'projects',
        element: <Projects />,
        loader: () => (document.title = `${name} | Projects`),
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
