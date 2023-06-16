import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'
import '../../styles/manual/Case.css'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Case = () => {
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
      <Page title='CASE STUDY' sub='NCIS Systems' text={["At NCIS, we have several AI systems that serve different roles in the field of preventing maritime crime. In this section, we will briefly take a look at what each of the systems have to offer, and then do a case study on how Ada specifically ensures that it adheres to current AI ethics standards. There will be a particular focus on how Ada is transparent, accountable and is trained on reliable data.", "Note that because some of the details around our AI systems are sensitive, NCIS will not be able to disclose certain practices and information."]}></Page>
        {/* Add content for two biases */}
        </>)
    } else if (page === 1) {
      return(<Page title='CASE STUDY' sub='NCIS Systems' text={["Ada, Hava, Grace, and Edith each aim to fill a gap in the maritime space. All of our systems are built with ethical AI at the forefront of development, which involves working with AI ethics consultants, using our maritime specific AI ethics framework, and continually considering how we can maintain and improve the systems from an ethical standpoint.", "Hover over each icon below to find out more about their purpose and how they uniquely contribute to making the landscape more equitable and safe for everyone."]}></Page>)
      /* Use modals to showcase each system */
    } else if (page === 2) {
      return(<Page title='CASE STUDY' sub='Deep Dive: Ada' text={["Moving into a more specific example, Ada is a dynamic and complex AI system that uses algorithms to help analyze and predict maritime crime. It detects any report of crime, smuggling, illegal fishing, and piracy and links them to their networks (criminal or otherwise).", "Ada’s functionality is reliant on two core principles that work in tandem together: not only does it detect an extensive amount of incident reports and associate them with a deep network of owners, corporations, smugglers, and countries, but it also “speaks'' multiple languages to ensure that data is coming from diverse sources and is able to operate internationally with minimal bias. Additionally, Ada generates heat maps displaying movement of a crime category, facilitating predictions on future crimes, areas requiring increased enforcement, and common perpetrator escape routes.", "Through natural language processing (NLP) techniques, including information retrieval, named entity recognition, and language translation, Ada can extract valuable information from a wide range of sources. (include graphic)"]}></Page>)
    } else if (page === 3) {
      return(<Page title='CASE STUDY' sub='Deep Dive: Ada Before and During Production' text={["Before and during production, there were many considerations that had to be made to guarantee that Ada would be deployed ethically. Because Ada is trained on a wealth of data, data and potential bias became a primary concern for this system.", "Hover over each icon to learn more about how we used some of the previously mentioned terms to guide Ada’s ethical development process."]}></Page>)
      /*Create interactables */
    } else if (page === 4) {
      return(
        <>
      <Page title='CASE STUDY' sub='Deep Dive: Ada' text={["Because Ada creates links between crimes and networks, mislabeling is a major potential issue and we found it pertinent to consider accountability when developing Ada. Although they cannot be discussed in detail, NCIS has extensive mechanisms in place for accountability, addressing errors, feedback, and unintended consequences. Additionally, Ada is regularly reviewed with AI ethics consultants to maintain adherence to ethical guidelines and requirements."]}></Page>
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
      return(<Page title='CASE STUDY' sub='Closing Notes' text={["Grace is another AI system that NCIS is currently working on. It leverages machine learning algorithms for behavioral analysis and pattern recognition based on Ada's output and other environmental, corporate, and socio-economic data enabling proactive crime profiling and risk assessment.", " Through this feed-forward loop of data involving Ada and Grace, we aim to positively influence Grace’s outputs from an ethical standpoint. That being said, Grace will have its own ethical framework and considerations integrated into its design and implementation process, just as Ada did throughout its development.", " Overall, building ethical AI has been and will always be a key pillar for NCIS. By carefully consulting and working with stakeholders and applying various frameworks to ensure we are making every possible effort to produce ethical AI systems, we hope to one day become an industry leader in the field of ethical AI development."]}></Page>)
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