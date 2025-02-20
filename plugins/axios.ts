import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'http://localhost:3800/api',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    provide: {
      api
    }
  }
})
