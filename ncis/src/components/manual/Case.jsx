import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Heading, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon, SearchIcon, LockIcon, StarIcon, LinkIcon } from '@chakra-ui/icons'
import { Page } from './export'

import '../../styles/manual/Case.css'
import { Grace, Hava, Edith, Ada, Systems } from '../../images/export'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Case = ({curr}) => {


  useEffect(() => {
    if (curr !== 4) {
      setPage(0);
    }
  }, [curr]);

  
  const settings = { //for slider
    dots: true,
    infinite: true, 
    speed: 3000,
    slidesToShow: 1, // Show 3 elements on mobile, 5 elements on larger screens
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };
  const [page, setPage] = useState(0);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, [page]);


  const renderContent = () => {
    if (page === 0) {
      return (<>
      <Page title='NCIS SYSTEMS' text={["At NCIS, we have several AI systems that serve different roles in the field of preventing maritime crime. In this section, we will briefly take a look at what each of the systems have to offer, and then do a case study on how Ada specifically ensures that it adheres to current AI ethics standards. There will be a particular focus on how Ada is transparent, accountable and is trained on reliable data.", "Note that because some of the details around our AI systems are sensitive, NCIS will not be able to disclose certain practices and information."]}></Page>
      <img src={Systems} className="conclusion-graphic"></img>
        </>)
    } else if (page === 1) {
      return(
        <>
      <Page title='NCIS SYSTEMS' text={["Ada, Hava, Grace, and Edith each aim to fill a gap in the maritime space. All of our systems are built with ethical AI at the forefront of development, which involves working with AI ethics consultants, using our maritime specific AI ethics framework, and continually considering how we can maintain and improve the systems from an ethical standpoint.", "Open each tab below to find out more about their purpose and how they uniquely contribute to making the landscape more equitable and safe for everyone."]}></Page>
      <Accordion className="accordion" allowToggle>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Ada
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      <section className="intro-flex">
    <p>Ada aims to link maritime crime to different groups/networks, doing so by analyzing our tracking platforms against our offense data platform. As illegal fishing and trafficking in the maritime space cumulatively generate over $120 billion in losses to the world’s economy, we recognized the critical need to create a tool that would help prevent and reduce these losses.</p>
    <img className="ada" alt="Ada AI system" src={Ada}></img>
    </section>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Hava
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}> 
    <section className="intro-flex">
    <p>Hava is an interface that provides access to extensive information to criminality, ownership and company financial flows (including respective vessels and persons of interests). It provides an accessible visualization of vessels involved in illegal activities and other features that simplify the process of identifying said vessels. Similar to Ada, Hava aims to address illegal fishing and trafficking in the maritime space.</p>
    <img className="system" alt="Hava AI system" src={Hava}></img>
    </section>
</AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
          Grace
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      <section className="intro-flex">
      <p>Grace is a machine learning system that classifies vessels based on key features and operations to help identify potential maritime risks and criminality. Through Grace’s classification, end users can inspect and patrol high risk vessels and proactively prevent crime. Grace helps make decisions regarding investigation/vessel deployment through providing real time intelligence, consequently reducing costs associated with blind patrols.</p>
    <img className="system" alt="Grace AI System" src={Grace}></img>
    </section>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Edith
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}> 
    <section className="intro-flex">
    <p>Edith is a waterproof box serving as a tracking system placed on the front of smaller vessels (12m in length and 1m in width), collecting information on boat location even when not connected to networks or satellites and updating when online. Information on boat location is displayed and linked on the Hava interface whenever the boat is searched. Edith aims to provide increased safety and detection of fishing activities, reported catches, infractions related to fishing in prohibited zones, and highly frequented areas to populate future mapping for improved fisheries management.</p>
    <img className="system" alt="Edith AI System" src={Edith}></img>
    </section>
</AccordionPanel>
  </AccordionItem>
</Accordion>
      </>
      )
    } else if (page === 2) {
      return(<Page title='DEEP DIVE: ADA' image={Ada} text={["Moving into a more specific example, Ada is a dynamic and complex AI system that uses algorithms to help analyze and predict maritime crime. It detects any report of crime, smuggling, illegal fishing, and piracy and links them to their networks (criminal or otherwise).", "Ada’s functionality is reliant on two core principles that work in tandem together: not only does it detect an extensive amount of incident reports and associate them with a deep network of owners, corporations, smugglers, and countries, but it also “speaks'' multiple languages to ensure that data is coming from diverse sources and is able to operate internationally with minimal bias. Additionally, Ada generates heat maps displaying movement of a crime category, facilitating predictions on future crimes, areas requiring increased enforcement, and common perpetrator escape routes.", "Through natural language processing (NLP) techniques, including information retrieval, named entity recognition, and language translation, Ada can extract valuable information from a wide range of sources. (include graphic)"]}></Page>)
    } else if (page === 3) {
      return(<>
      <Page title='DEEP DIVE: ADA BEFORE AND DURING PRODUCTION' text={["Before and during production, there were many considerations that had to be made to guarantee that Ada would be deployed ethically. Because Ada is trained on a wealth of data, data and potential bias became a primary concern for this system.", "Slide through the carousel to learn more about how we used some of the previously mentioned terms to guide Ada’s ethical development process."]}></Page>
      <Slider className="slider" {...settings}>
      <div>
        <Heading size='md'>Transparency<SearchIcon className="spacer"></SearchIcon></Heading>
        <p>We make sure that Ada’s functionality is well documented to allow for clear understanding on both sides (i.e developers and users) how AI/data is being used, increasing the transparency of the AI system. Additionally, because some data can be unreliable, we took extra precautions to ensure used training data was accurate. This included tracing data back and speaking with people at the source of the data to help validate the information, providing a clearer picture on all of Ada’s processes.</p>
      </div>
      <div>
        <Heading size='md'>Privacy and Security <LockIcon className="spacer"></LockIcon></Heading>
        <p> As mentioned, ethical AI systems prioritize responsible data management practices. Ada does this by handling data privacy and security with utmost care, ensuring that stakeholders (such as end users and those involved with data) are not put under risk. All sensitive information is protected against unauthorized access and we regularly review Ada to confirm it complies with relevant data protection regulations.</p>
      </div>
      <div>
        <Heading size='md'>Robustness<StarIcon className="spacer"></StarIcon></Heading>
        <p>One of Ada’s key features is its robustness. For example, Ada was trained on articles and reports from an array of languages to ensure that the system would function just as well outside English speaking countries. Additionally, by including a large variety of data from different sources, the training and test datasets had an increased diversity and biases like reporting and representation bias became less likely. Ada also continues to collect information from new sources and incorporate it, continually evolving its accuracy and understanding of crimes and their associated networks.</p>
      </div>
      <div>
        <Heading size='md'>Fairness<LinkIcon className="spacer"></LinkIcon></Heading>
        <p>Ada’s fairness is best exhibited when looking at its specified features. The broad and seemingly unrelated data points were selected to allow Ada to uncover patterns that are more nuanced than vessel behavior alone. These insights can contribute to incident characterization and incident command, enabling more effective responses to maritime challenges. Ada is subsequently able to look equitably at the wider picture of maritime crime rather than just a subset.</p>
      </div>
          </Slider>
          
      </>
    )} else if (page === 4) {
      return(
        <>
      <Page title="DEEP DIVE: ADA'S CONSIDERATIONS" text={["Because Ada creates links between crimes and networks, mislabeling is a major potential issue and we found it pertinent to consider accountability when developing Ada. Although they cannot be discussed in detail, NCIS has extensive mechanisms in place for accountability, addressing errors, feedback, and unintended consequences. Additionally, Ada is regularly reviewed with AI ethics consultants to maintain adherence to ethical guidelines and requirements."]}></Page>
      <ul className='questions'>
        <h1><strong className='bolded'>In regards to accountability through the development process, we found it important to ask questions such as the following:</strong></h1>
        <li>Who is responsible for the ethical behavior and decisions made by an AI system?</li>
        <li>What measures are in place to ensure that AI systems are aligned with legal, social, and ethical norms?
</li>
        <li>How is the accountability for AI systems balanced between the developers, operators, and end-users who interact with the system?
</li>
        <li>How can the accountability of AI systems be ensured throughout their lifecycle, from development to deployment and ongoing operation?
</li>
        <li>Are there established procedures for disclosing any conflicts of interest or biases that may influence the behavior or outcomes of an AI system?
</li>
      </ul>
      </>
      )
    } else if (page === 5) {
      return(<Page title='CLOSING NOTES' text={["Grace is another AI system that NCIS is currently working on. It leverages machine learning algorithms for behavioral analysis and pattern recognition based on Ada's output and other environmental, corporate, and socio-economic data enabling proactive crime profiling and risk assessment.", " Through this feed-forward loop of data involving Ada and Grace, we aim to positively influence Grace’s outputs from an ethical standpoint. That being said, Grace will have its own ethical framework and considerations integrated into its design and implementation process, just as Ada did throughout its development.", " Overall, building ethical AI has been and will always be a key pillar for NCIS. By carefully consulting and working with stakeholders and applying various frameworks to ensure we are making every possible effort to produce ethical AI systems, we hope to one day become an industry leader in the field of ethical AI development."]}></Page>)
    }
}

  return (
    <>
      <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 5 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Case;