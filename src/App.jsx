import './App.css'
import { HashRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { SimpleAnalytics } from "@simpleanalytics/react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Router>
      <SimpleAnalytics />
    </>
  )
}

export default App
