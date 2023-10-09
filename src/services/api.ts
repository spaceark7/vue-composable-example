import axios from 'axios'

export const ApiServices = (auth: boolean = false) => {
  const options = {
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: auth ? 'Bearer ' + localStorage.getItem('token') : undefined
    }
  }

  const api = axios.create(options)

  return api
}
