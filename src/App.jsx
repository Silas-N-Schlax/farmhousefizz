import './styleKit/styles.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { AboutUs } from './pages/aboutUs'
import { ContactUs } from './pages/contactUs'
import { Menu } from './pages/menu'
import { Privacy } from './pages/privacy'
import { QuestionsAndAnswers } from './pages/questionsAndAnswers'
import { Terms } from './pages/terms'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { SodaPoll } from './pages/sodaPoll'


function App() {
  return (
    <>
      <Header />
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/*" element={<NotFound/>} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/privacy-policy" element={<Privacy/>} />
              <Route path="/questions-and-answers" element={<QuestionsAndAnswers/>} />
              <Route path="/terms-and-conditions" element={<Terms/>} />
              <Route path="/polls/soda-poll" element={<SodaPoll/>} />
            </Routes>
          </Router>
        </main>
      <Footer />
    </>
  )
}

export default App
