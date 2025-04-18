import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import WorkFlow from './Components/WorkFlow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
     <div className="max-w-7xl mx-auto pt-20 px-6">
       <Hero />
       <Feature />
       <WorkFlow />
       <Pricing />
       <Testimonials />
       <Footer />
     </div>
    </div>
  )
}

export default App
