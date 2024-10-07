import React from 'react'
import Herosection from '../Components/Herosection.jsx'
import FAQSection from './FAQSection.jsx'
import Domainsection from './Domainsection.jsx'

function LandingPage() {
  return (
    <div>
      <Herosection></Herosection>
      <Domainsection></Domainsection>
      <FAQSection></FAQSection>
    </div>
  )
}

export default LandingPage
