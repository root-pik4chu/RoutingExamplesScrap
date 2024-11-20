
import About from './components/Home/About';
import Home from './components/Home/Home';
import Team from './components/Home/Team';
import Layout from './components/Layout/Layout';


const routes = [
  {
    path: '/',
    element: <Layout />,  // This will render Navbar, Footer, and page content
    children: [
      { index: true, element: <Home /> },    // Default route
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
    ],
  },
];

export default routes;
