import './styleKit/styles.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { AboutUs } from './pages/aboutUs'
import { ContactUs } from './pages/contactUs'
import { Catering } from './pages/catering'
import { Menu } from './pages/menu'
import { Privacy } from './pages/privacy'
import { QuestionsAndAnswers } from './pages/questionsAndAnswers'
import { EnergyDrinkNotice } from './pages/energyDrinkNotice'
import { Terms } from './pages/terms'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { SodaPoll } from './pages/sodaPoll'
import cateringData from './assets/data/cateringPages.json'


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
              {cateringData.map((page, i) => {
                return (
                  <Route path={page.path} key={i} element={<Catering data={page} />} />
                )
              })}
              <Route path="/menu" element={<Menu/>} />
              <Route path="/questions-and-answers" element={<QuestionsAndAnswers/>} />
              <Route path="/polls/soda-poll" element={<SodaPoll/>} />
              <Route path="/terms-and-conditions" element={<Terms/>} />
              <Route path="/privacy-policy" element={<Privacy/>} />
              <Route path="/energy-drink-notice" element={<EnergyDrinkNotice/>}/>
            </Routes>
          </Router>
        </main>
      <Footer />
    </>
  )
}

export default App
