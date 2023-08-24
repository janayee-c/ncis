import React from 'react';
import '../styles/Execs.css';
import { Heading } from '../components/export';
import { Container } from '@chakra-ui/react';
import { Sogol, Dyhia } from "../images/export";

const profilesData = [
  {
    name: "DYHIA BELHABIB",
    title: "Director, Maritime Criminality\n and Maritime Domain Awareness",
    image: Dyhia,
    className: "d-team",
    headingClass: "d-heading",
    descClass: "d-desc"
  },
  {
    name: "SOGOL GHATTAN",
    title: "Director, Responsible Development\n of Emerging Technologies",
    image: Sogol,
    className: "s-team",
    headingClass: "s-heading",
    descClass: "s-desc"
  }
];

const Execs = () => {
  return (
    <section id="execs-section" className="execs-section">
      <Container className="execs-container" maxW="100%">
        <Heading center title="EXECUTIVE TEAM" />

        <div className="profiles-container">
          {profilesData.map(profile => (
            <div className="profile" key={profile.name}> 
              <img className="profile-img" src={profile.image} alt={profile.name} />
              <div className={profile.className}>
                <h3 className={profile.headingClass}>{profile.name}</h3>
                <p className={profile.descClass}>{profile.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="execs-diag"></div>
      </Container>
    </section>
  );
}

export default Execs;
