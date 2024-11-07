import { Link } from 'react-router-dom'
import { UserDataProps } from '../../../types/user'
import PrimaryBtn from '../../common/buttons/PrimaryBtn'

const ProfileCard: React.FC<{ userData: UserDataProps | null }> = ({ userData }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={userData?.image} className='card-img-top' alt={userData?.username} />
      <div className='card-body'>
        <h5 className='card-title text-capitalize'>{userData?.username}</h5>
        <p className='card-text'>
          <b>Email:</b> {userData?.email} <br />
          <b>Phone:</b> {userData?.phone}
        </p>
        <Link to='/'><PrimaryBtn title='Go To Home'/></Link>
      </div>
    </div>
  )
}

export default ProfileCard
