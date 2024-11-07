import { protectedRoutes } from '../../constants/routes'
import logo from '../../assets/images/logos/react-logo.png'

const ProtectedHeader = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='logo' height={30} width={30} />
        </a>
        <ul className='list-unstyled d-flex align-items-center gap-3'>
          {protectedRoutes.map((route) => (
            <li key={route} className='text-capitalize'>
              {route}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default ProtectedHeader
