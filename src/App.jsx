import {Routes, Route} from 'react-router-dom'
import './App.scss'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Tips from './pages/Tips'
import About from './pages/About'

function App() {

  return (
    <div className="wrap">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/meals' element={<Meals />}/>
          <Route path='/tips' element={<Tips />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} MyPlayte</small>
      </footer>
    </div>
  )
}

export default App
