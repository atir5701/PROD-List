import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CreatePage from './pages/CreatePage'
import {Route,Routes} from 'react-router-dom'
import ProductProvider from './context/ProductProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductProvider>
  
        <div style={{ minHeight: "100vh" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>
    </ProductProvider>
  )
}

export default App
