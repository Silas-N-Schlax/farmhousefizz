import './App.css'
import { HashRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/404" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
