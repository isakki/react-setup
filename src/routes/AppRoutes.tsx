import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'

import Home from '../pages/user/Home'
import About from '../pages/user/About'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Profile from '../pages/auth/Profile'
import Contact from '../pages/user/Contact'
import Services from '../pages/user/Services'
import Admin from '../pages/admin'
import Sales from '../pages/admin/Sales'
import Users from '../pages/admin/Users'
import Reports from '../pages/admin/Reports'

import PageNotFound from '../components/ui/PageNotFound'
import { isAdmin, isAuthenticated } from '../utils/validations/authValidation'

const AppRoutes = () => {
  const router = createBrowserRouter([
    // Public Routes
    {
      path: '/',
      element: <Outlet />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'services', element: <Services /> },
      ],
    },

    // Auth Routes
    {
      path: '/profile',
      element: isAuthenticated ? <Profile /> : <Navigate to='/login' />,
    },
    {
      path: '/login',
      element: isAuthenticated ? <Navigate to='/profile' /> : <Login />,
    },
    {
      path: '/register',
      element: isAuthenticated ? <Navigate to='/profile' /> : <Register />,
    },

    // Admin Routes
    {
      path: '/admin',
      element: isAdmin ? <Outlet /> : <Navigate to='/' />,
      children: [
        { path: '', element: <Admin /> },
        { path: 'sales', element: <Sales /> },
        { path: 'users', element: <Users /> },
        { path: 'reports', element: <Reports /> },
      ],
    },

    // Not Found Routes
    {
      path: '*',
      element: <PageNotFound />,
    },
  ])

  return router
}

export default AppRoutes
