import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TikTokProfile from './components/tiktokProfile'
import BalancePage from './components/balance'
import BalanceDetailsPage from './components/balanceDetail'
import LiveRewardsPage from './components/liveRewards'
import TransferUI from './components/transfer'
import TransactionDetails from './components/transactionDetails'
import SocialMetricsForm from './components/setData'
import PWARequired from './components/pwaRequired.'
import InstallPage from './components/install'
function App() {
  return (
    <Router>
      <PWARequired />
      <Routes>
        <Route path="/" element={<TikTokProfile />} />
        <Route path="/balance" element={<BalancePage/>} />
        <Route path="/balance-detail" element={<BalanceDetailsPage/>} />
        <Route path="/live-reward" element={<LiveRewardsPage/>} />
        <Route path="/transfer" element={<TransferUI/>} />
        <Route path="/transaction-detail" element={<TransactionDetails />} />
        <Route path="/set-data" element={<SocialMetricsForm/>} />
        <Route path="/install" element={<InstallPage />} />

      </Routes>
    </Router>
  )
}

export default App
