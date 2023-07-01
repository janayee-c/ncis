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
        <img className="profile-img-container" src={Dyhia}></img>

        <div className="d-team">
          <h3 className="d-heading">DYHIA BELHABIB</h3>
          <p className="d-desc">
            Director, Maritime Criminality
            <br></br> 
            and Maritime Domain Awareness</p>
        </div>

      </div>
      <div className="profile"> 
        <img className="profile-img-container" src={Sogol}></img>

        <div className="s-team">
          <h3 className="s-heading">SOGOL GHATTAN</h3>
          <p className="s-desc">
            Director, Responsible Development 
          <br></br>
            of Emerging Technologies</p>
        </div>
      </div>
      </div>
    </Container>
    </section>
  )
}

export default Execs