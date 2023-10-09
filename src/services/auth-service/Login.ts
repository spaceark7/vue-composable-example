import { ApiServices } from '../api'

export const Login = async (username: string, password: string) => {
  try {
    const res = await ApiServices().post('/auth/login', {
      username,
      password
    })

    if (res.status !== 200) throw new Error('Error login')
    const data = await res.data
    return res
  } catch (error) {
    console.log(error)
  }
}
