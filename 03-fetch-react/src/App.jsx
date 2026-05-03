import { useEffect, useState } from 'react'
import Profile from './components/Profile.jsx'

const App = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch('https://api.github.com/users/harshcsrivastava')

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub profile')
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  if (isLoading) {
    return <div className="state-message">Loading GitHub profile...</div>
  }

  if (error) {
    return <div className="state-message error">{error}</div>
  }

  if (!data) {
    return <div className="state-message">No profile data found.</div>
  }

  return (
    <>
    <Profile data={data}/>
    </>
  )
}

export default App