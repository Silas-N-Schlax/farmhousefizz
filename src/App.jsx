import React from 'react'
import './stylesheet/styles.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { AboutUs } from './pages/aboutUs'
import { ContactUs } from './pages/contactUs'
import { Catering } from './pages/catering'
import { Menu } from './pages/menu'
import { EventMenuX } from './pages/eventMenuX'
import { EventMenuY } from './pages/eventMenuY'
import { Privacy } from './pages/privacy'
import { FQA } from './pages/FQA'
import { EnergyDrinkNotice } from './pages/energyDrinkNotice'
import { Terms } from './pages/terms'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { SodaPoll } from './pages/sodaPoll'
import cateringData from './assets/data/cateringPages.json'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="op-page">
          <div className="op-page__main">
            <div className="op-page__main-header">
              <Header />
            </div>
            <main className="op-page__main-content">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
                {cateringData.map((page, i) => {
                  return (
                    <Route path={page.path} key={i} element={<Catering data={page} />} />
                  )
                })}
                <Route path="/menu" element={<Menu/>} />
                <Route path="/dynamic-event-menu-x" element={<EventMenuX/>} />
                <Route path="/dynamic-event-menu-y" element={<EventMenuY/>} />
                <Route path="/fqa" element={<FQA/>} />
                <Route path="/polls/soda-poll" element={<SodaPoll/>} />
                <Route path="/terms-and-conditions" element={<Terms/>} />
                <Route path="/privacy-policy" element={<Privacy/>} />
                <Route path="/energy-drink-notice" element={<EnergyDrinkNotice/>}/>
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </main>
            <div className="op-page__main-footer">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
