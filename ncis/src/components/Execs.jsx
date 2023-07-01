import {React} from 'react'
import '../styles/Execs.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'
import { Sogol , Dyhia } from "../images/export";


const Execs = () => {
  return (
    <section id="execs-section" className="execs-section">
      <section className="diag-container"></section>
    <Container className="execs-container" maxW="100%">

      <Heading center={true} title="EXECUTIVE TEAM"></Heading>
      <div className="profile-container">
      <div className="profile"> 
        <img src={Dyhia}></img>
      </div>
      <div className="profile"> 
        <img src={Sogol}></img>
      </div>
      </div>
    </Container>
    </section>
  )
}

export default Execs