import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '~react-pages';
import './globals.css';
import { formatNextRoutes } from './utils/formatNextRoutes';

console.log(routes)

const formattedRoutes = formatNextRoutes(routes);
console.log(formattedRoutes)
const router = createBrowserRouter(formattedRoutes)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
