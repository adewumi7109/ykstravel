import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'

export default function Home() {
  return (
 <div>
  <Navbar/>
  <Hero/>
  <About/>
  <Services/>

 </div>
  )
}
