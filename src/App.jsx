import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import SuccessMsg from './pages/SuccessMsg'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/success" element={<SuccessMsg />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
