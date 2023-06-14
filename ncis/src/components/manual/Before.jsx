import React from 'react'
import { useState } from 'react'
import { Heading, Button, ButtonGroup, SlideFade, useDisclosure, Box } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Before = () => {
  const [page, setPage] = useState(0);
  const [prevId, setPrevId] = useState(0);
  const [text, setText] = useState('');
  const { isOpen, onToggle } = useDisclosure();

  const renderCollapse = (id) => {
    if (!isOpen) {
      onToggle()
    }
    setPrevId(id)
    if (id === prevId) {
    onToggle()
    }
    
    if (id === 1) {
      setText("Individuals and organizations take responsibility for ethical implications and consequences of AI technologies. For example, if an AI tool wrongly suggests a boat is trafficking timber and law enforcement acts on the suggestion, we cannot simply blame the AI for the consequences; who should be held accountable?")
    } else if (id === 2) {
      setText("AI systems should not treat groups differently, and strive to remain equitable and just. For example, a facial recognition tool should not work better for some groups, but worse for others.")
    } else if (id === 3) {
      setText("Developers should be able to explain how their AI works at each stage, and processes, algorithms, and decisions of AI systems should remain understandable and accessible to relevant stakeholders. If you don’t know how the system works, how can you pinpoint what might be causing bias?")
    } else if (id === 4) {
      setText("Stakeholder and (depending on the type of data) project data should be kept confidential and safe to ensure those that are involved do not come under risk, particularly if it is sensitive data. For example, if you are creating an AI that help identify maritime human trafficking victims, the data is incredibly sensitive, and extra precautions should be taken to prevent harm coming to victims.")
    } else if (id === 5) {
      setText("AI systems should be dependable and consistent producing accurate and trustworthy results or outcomes. It encompasses the notion that AI systems should perform as intended, consistently and without undue bias or errors. You wouldn’t want an AI system that works perfectly half the time and doesn’t work at all the other half!")
    }
  }

  const renderContent = () => {
    if (page === 0) {
      return (<>
      <Heading as='h4' size='md' className='head'>Section 1: Common Considerations</Heading>
      <p>Before we begin, it is important to clarify the definition of AI; AI is the simulation of human intelligence in machines (particularly computer systems) such that these machines can complete typically human associated tasks. Each AI system has data it is trained on, live data input returning a prediction, and another system/person taking some action on the prediction. </p>
      <p>For example, Youtube uses similar user data and serves predictions for recommended watches to which the user can choose to interact. AI is capable of amazing things, and can complete tasks that would take humans months or even years to complete in a fraction of the time. That being said, the process of building these AI systems requires a lot of careful consideration. As we all know, with great power comes great responsibility, and we must be conscientious in preventing harm to stakeholders in the project.</p>
      {/*<img alt='' src={Ocean}></img>*/}
    </>)
    } else if (page === 1) {
      return (<>
      <Heading as='h4' size='md' className='head'>Section 1: Common Considerations</Heading>
        <p>By laying the necessary groundwork, we can better ensure we are being proactive in creating ethical AI. You don’t want to heavily invest in developing an AI system only to have to go back to the drawing board because you realized your dataset was biased or the AI itself doesn’t comply with policies or regulations! </p>
        <p>There are many ways to approach AI ethics, including Big “E” ethics and little “e” ethics, each of which cover different domains of AI ethics. More generally, common themes in AI ethics currently include a human centric focus on accountability, fairness/non-discrimination (ensure bias is not harmful if it does exist, i.e equitable), transparency and explainability, privacy/security, and reliability. It is pertinent to keep these topics in mind when building AI and each of these characteristics will help make your system more ethical and helpful. Click each of the buttons below to learn more about the characteristics.</p>
        <section className='page_collapses'>
        <Button variant={prevId === 1 ? 'solid' : 'outline'} onClick={() => renderCollapse(1)}>Accountability</Button>
        <Button variant={prevId === 2 ? 'solid' : 'outline'} onClick={() => renderCollapse(2)}>Fairness</Button>
        <Button variant={prevId === 3 ? 'solid' : 'outline'} onClick={() => renderCollapse(3)}>Transparency and explainability</Button>
        <Button variant={prevId === 4 ? 'solid' : 'outline'} onClick={() => renderCollapse(4)}>Privacy and security</Button>
        <Button variant={prevId === 5 ? 'solid' : 'outline'} onClick={() => renderCollapse(5)}>Reliability</Button>
        </section>
        <SlideFade in={isOpen} offsetY='20px'>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='facebook.600'
          rounded='md'
          shadow='md'
        >
          {text}
        </Box>
      </SlideFade>
      <p>One more important note to make is human involvement in these AI systems. Humans are undoubtedly still needed to oversee the processes of AI because no matter how advanced or reliable AI is, they can oftentimes still make mistakes. It is important to train users on how to properly use these AI and treat them as useful tools, rather than a replacements!</p>
        </>)
    } else if (page === 2) {
      return (<>
      <Heading as='h4' size='md' className='head'>Section 2: Frameworks</Heading>
        </>)
    }
  }

  return (
    <>
    <section className='page'>
         <Heading className='head'>Before Building AI Systems</Heading> 
         {renderContent()}
    </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 4 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}


export default Before