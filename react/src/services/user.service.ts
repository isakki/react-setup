import axios from 'axios'
import { UserDataProps } from '../types/user'

// Fetch User Data
export async function fetchUserData(userId: number): Promise<UserDataProps> {
  try {
    const res = await axios.get(`https://dummyjson.com/users/${userId}`)
    return res.data
  } catch (error) {
    console.log(error, 'Error fetching user data')
    throw error
  }
}
