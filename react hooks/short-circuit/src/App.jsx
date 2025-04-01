import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user,setuser] = useState(null)
  const login = () => {
    setuser({name:'john'})
  }
  const logout = () => {
    setuser(null)
  }

  return (
    <div>
      <h1>Welcome!!!!</h1>
      <h2>{user?`welcome ${user.name}`:'please login'}</h2>
      {!user ? <button onClick={login}>Login</button>: <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default App
