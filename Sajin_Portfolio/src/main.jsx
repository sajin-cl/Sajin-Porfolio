import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import '@/styles/global.css';

createRoot(document.getElementById('root')).render(

    <RouterProvider router={AppRouter} />
  
);
