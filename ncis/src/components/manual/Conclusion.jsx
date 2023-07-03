
import React from 'react'
import { useEffect } from 'react'
import { Page } from './export'
import { Heading } from '../export'
import { Systems } from '../../images/export'
import '../../styles/Manual.css'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Conclusion = () => {

  return (
    <section className="layout page">
    <section className="layout-content">
      <Heading title="CONCLUSION"></Heading>
      <p>Great job and congratulations! Thank you for reading and we hope you enjoyed the content of this manual. As a closing note, we would like to acknowledge that the standards around AI ethics continue to change and the future of AI is exciting yet unpredictable. That being said, you have a strong foundation to now learn more about AI ethics and make a difference in this future filled with AI technology.</p>
      <img alt="ncis systems" src={Systems} className="conclusion-graphic"></img>
      <p>We'd like to acknowledge that this manual would not have been possible without the help of many contributors, including our team, experts within the AI industry, and invaluable resources and frameworks provided by partner companies.</p>
      <p>We can't wait to see where the next steps of your AI ethics journey takes you and what you'll do with your newfound knowledge!</p>  
       </section>
       </section>
  )
}

export default Conclusion 