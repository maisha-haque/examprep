import { Routes, Route } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'


function App() {
 

  return (
<>
  <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />          
        <Route path="shop" element={<Shop />} /> 
        <Route path="contact" element={<Contact />} /> 

        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
</>
  )
}

export default App
