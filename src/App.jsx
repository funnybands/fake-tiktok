import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TikTokProfile from './components/tiktokProfile'
import BalancePage from './components/balance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TikTokProfile />} />
        <Route path="/balance" element={<BalancePage/>} />
      </Routes>
    </Router>
  )
}

export default App
