export const useAuth = () => {
  const loggedIn = useState<boolean>('loggedIn', () => {
    if (import.meta.client) {
      return JSON.parse(localStorage.getItem('loggedIn') || 'false')
    }
    return false
  })

  const username = useState<string>('username', () => {
    if (import.meta.client) {
      return localStorage.getItem('username') || ''
    }
    return ''
  })

  function setLoggedIn(value: boolean) {
    loggedIn.value = value
    if (import.meta.client) {
      localStorage.setItem('loggedIn', JSON.stringify(value))
    }
  }

  function setUsername(name: string) {
    username.value = name
    if (import.meta.client) {
      localStorage.setItem('username', name)
    }
  }

  return { loggedIn, username, setLoggedIn, setUsername }
}
