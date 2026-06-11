import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout/layout';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> }
    ]
  }
]);

export default AppRouter;
