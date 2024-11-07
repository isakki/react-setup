import { Link } from 'react-router-dom'
import PrimaryBtn from '../../components/common/buttons/PrimaryBtn'

const Home = () => {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <Link to='/profile'>
        <PrimaryBtn title='Profile' />
      </Link>
    </div>
  )
}

export default Home
