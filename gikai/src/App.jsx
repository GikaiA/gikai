import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu/NavMenu';
import Landing from './Landing/Landing';




function App() {

  return (
    <>
    <BrowserRouter>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
