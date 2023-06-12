import React from 'react'
import '../styles/About.css'
import { ABOUT } from '../constants/texts.js'
import { Heading } from '../components/export'

const About = () => {
  return (
    <div>
    <Heading title="ABOUT"></Heading>
    <p id="about">{ABOUT}</p>
    </div>
  )
}

export default About