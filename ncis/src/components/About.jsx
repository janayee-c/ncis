import React from 'react'
import '../styles/About.css'
import { ABOUT } from '../constants/texts.js'
import { Heading } from '../components/export'

const About = () => {
  return (
    <section id="about">
      <div className="acontainer">
         <Heading title="ABOUT"></Heading>
         <p>{ABOUT}</p>
      </div>
    </section>
  )
}

export default About