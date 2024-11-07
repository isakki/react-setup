import { RouterProvider } from 'react-router-dom'
import { isAdmin, isAuthenticated } from './utils/validations/authValidation'
import PublicHeader from './layouts/headers/PublicHeader'
import ProtectedHeader from './layouts/headers/ProtectedHeader'
import AdminHeader from './layouts/headers/AdminHeader'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <>
      {isAuthenticated ? (isAdmin ? <AdminHeader /> : <ProtectedHeader />) : <PublicHeader />}
      <RouterProvider router={AppRoutes()} />
    </>
  )
}

export default App
