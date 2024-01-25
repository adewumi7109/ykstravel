import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'
import Why from './components/why-us/Why'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/whatsapp/whatsapp'

export default function Home() {
  return (
 <div>

  <Navbar/>
  <WhatsAppButton/>
  
  <Hero/>
  <About/>
  <Services/>
  <Why/>
  <Contact/>
  <Footer/>

 </div>
  )
}
