import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, Button, Collapse, SlideFade, useDisclosure, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'
import { Framework, Before as Intro } from '../../images/export'
import '../../styles/manual/Before.css'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Before = () => {
  const [page, setPage] = useState(0);
  const [prevId, setPrevId] = useState(0);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [head, setHead] = useState('');
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, [page]);


  const renderCollapse = (id, sec) => {
    if (!isOpen) {
      onToggle()
    }
    setPrevId(id)
    if (id === prevId) {
    onToggle()
    }
    if (sec === 1) {
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

  if (sec === 2) {
    if (id === 1) {
      setText2("Assumptions based on one’s own mental models and personal experiences that do not generalize. For example, if an algorithm did not let certain ships enter zones due to biases about ships from its country of origin, this could be a sign of implicit bias. AI should not just be trained on data that confirms our beliefs and we must ask whether what we know is actually representative of the truth.")
      setHead('Implicit Bias')
    } else if (id === 2) {
      setText2("Occurs if used datasets fail to represent real world distributions, such that the sample underrepresents certain groups and thus generalizes poorly. For example, if a model operating on a ship’s surveillance cameras is only trained on night-time data, then its performance during the day may be affected. This occurs due to issues with HOW data is obtained (potentially missing out on certain groups/stakeholders), and to prevent selection bias it is important to diversify your training data and consider the different possible groups.")
      setHead('Representation and Selection Bias')
    } else if (id === 3) {
      setText2("Oftentimes, frequency at which people write about actions, outcomes or properties do not represent how often they actually happen, which can result in biased data. For example, if a company documents that 99% of user feedback is positive, it is more likely that users are simply reluctant to express negative experiences. Additionally, we typically assume the ordinary can “go without saying” and odd circumstances are more often reported. When events are unreported, it does not mean they do not happen (i.e trafficking) and models should be trained with this in mind.")
      setHead('Reporting Bias')
    } else if (id === 4) {
      setText2("The tendency to believe what is true of a few members of a group to be true of a whole group. For example, a model trained to identify suitable candidates may assume the best candidates are from Western Europe because some successful employees possess those traits, discounting people or may be equally or more qualified but aren’t from Western Europe.")
      setHead('Group Attribution Bias')
    } else if (id === 5) {
      setText2("Arises when choosing/measuring features and labels to use, where the chosen set of features may include confounds or leave out important features. For example, if you were using arrest rate as a feature for maritime crime rate, the model could become biased as the number of arrests are not directly correlated to the number of crimes in an area (i.e they could have more active law enforcement due to more resources). This can arise due to varying measurement processes between groups, varying quality of data, and oversimplification.")
      setHead('Measurement Bias')
    }
  }

  if (sec === 2) {

  }
  }

  const renderContent = () => {
    if (page === 0) {
      return (
        <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 1: Common Considerations" image={Intro} float={true} text={["Before we begin, it is important to clarify the definition of AI; AI is the simulation of human intelligence in machines (particularly computer systems) such that these machines can complete typically human associated tasks. Each AI system has data it is trained on, live data input returning a prediction, and another system/person taking some action on the prediction.", "For example, Youtube uses similar user data and serves predictions for recommended watches to which the user can choose to interact. AI is capable of amazing things, and can complete tasks that would take humans months or even years to complete in a fraction of the time. That being said, the process of building these AI systems requires a lot of careful consideration. As we all know, with great power comes great responsibility, and we must be conscientious in preventing harm to stakeholders in the project."]}></Page>
)
    } else if (page === 1) {
      return (<>
      <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 1: Common Considerations" text={["By laying the necessary groundwork, we can better ensure we are being proactive in creating ethical AI. You don’t want to heavily invest in developing an AI system only to have to go back to the drawing board because you realized your dataset was biased or the AI itself doesn’t comply with policies or regulations!", "There are many ways to approach AI ethics, including Big “E” ethics and little “e” ethics, each of which cover different domains of AI ethics. More generally, common themes in AI ethics currently include a human centric focus on accountability, fairness/non-discrimination (ensure bias is not harmful if it does exist, i.e equitable), transparency and explainability, privacy/security, and reliability. It is pertinent to keep these topics in mind when building AI and each of these characteristics will help make your system more ethical and helpful. Click each of the buttons below to learn more about the characteristics."]}></Page>
        <section className='page_collapses'>
        <Button variant={prevId === 1 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(1, 1)}>Accountability</Button>
        <Button variant={prevId === 2 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(2, 1)}>Fairness</Button>
        <Button variant={prevId === 3 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(3, 1)}>Transparency and explainability</Button>
        <Button variant={prevId === 4 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(4, 1)}>Privacy and security</Button>
        <Button variant={prevId === 5 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(5, 1)}>Reliability</Button>
        </section>
        <Collapse in={isOpen} offsetY='20px'>
        <Box className="text-box" backgroundColor="#F5F5F5" p='4%'color='black' mt='4' rounded='md' shadow='md'>
          {text}
        </Box>
      </Collapse>
      <p>One more important note to make is human involvement in these AI systems. Humans are undoubtedly still needed to oversee the processes of AI because no matter how advanced or reliable AI is, they can oftentimes still make mistakes. It is important to train users on how to properly use these AI and treat them as useful tools, rather than a replacements!</p>
        </>)
    } else if (page === 2) {
      return (
        <>
      <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 2: Frameworks" text={["A common approach to analyzing AI Ethics is the use of frameworks. One fantastic example of a helpful framework in determining whether an AI system is ethical is the Deloitte “Trustworthy AI Framework”, which considers 6 key features that should be fulfilled in order for an AI model to be deemed as ethical. The key features of this framework can be seen on the right.", "Although frameworks like this are helpful in the study of AI Ethics, they should mainly serve as a starting point rather than a guideline. Frameworks are not perfect or universal and can have many drawbacks. Fore example, ethical frameworks may not always anticipate or address the unintended consequences that can arise from AI systems; the complexity of AI technology can often lead to unforeseen dilemmas or risks that are not adequately covered by existing frameworks. Additionally, the rapidly evolving nature of AI technology and its diverse applications make it difficult for frameworks to address every ethical consideration, such as complex cultural or social interactions that require a case-by-case analysis. Overall, those involved with the process of AI development should perform ongoing monitoring and evaluation to keep pace with emerging challenges. By doing so, we can facilitate a more comprehensive and contextually relevant ethical analysis of AI systems."]} image={Framework}></Page>
      <p>Find out more about the Deloitte Trustworthy AI <a target="_blank" rel="noreferrer" href="https://www2.deloitte.com/us/en/pages/deloitte-analytics/solutions/ethics-of-ai-framework.html">here.</a></p>
      </>
      )
    } else if (page === 3) {
      return (
        <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 3: Data and Understanding Bias" text={["Because data is a fundamental part of training and using AI systems, it remains as one of the most important considerations in creating ethical AI. The most common threat to responsible AI is data inadvertently creating bias in the model. Why is AI bias negative? The existence of AI bias potentially leads to a plethora of unintended and negative effects, such as producing negative results for one group more than another, or reinforcing harmful human bias. Not only does bias prevent AI systems from properly completing the tasks it was created to do, but it is also unethical and dangerous to stakeholders."]}></Page>
      )
    } else if (page === 4) {
      return (
        <>
      <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 3: Types of Bias" text={["As mentioned, human involvement through data can cause bias in AI systems. Thus, is not inherently objective, and can often reinforce or generate harmful human stereotypes or ideas. For example, some relevant types of bias that can occur due to issues with data include implicit bias, selection bias, reporting bias, group attribution bias, or automation bias. Click each of the buttons to find out more and these types of bias."]}></Page>
      <section className="vert-container">
      <section className='page_collapses2'>
        <Button variant={prevId === 1 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(1, 2)}>Implicit Bias</Button>
        <Button variant={prevId === 2 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(2, 2)}>Representation and Selection Bias</Button>
        <Button variant={prevId === 3 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(3, 2)}>Reporting Bias</Button>
        <Button variant={prevId === 4 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(4, 2)}>Group Attribution Bias</Button>
        <Button variant={prevId === 5 && isOpen ? 'solid' : 'outline'} onClick={() => renderCollapse(5, 2)}>Measurement Bias</Button>
        </section>
        <SlideFade in={isOpen}  offsetY='20px'>
        <Box className="text-box" backgroundColor="#F5F5F5" p='10' color='black' rounded='md' shadow='md'>
          <Heading size='md' mb='8'>{head}</Heading>
          {text2}
        </Box>
      </SlideFade>
      </section>
      </>
      )
    } else if (page === 5) {
      return (
        <>
        <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 3: How we can prevent and avoid bias" text={["To prevent bias, a proactive approach should be taken and used throughout the entire AI development lifecycle. Although each system will be unique in how bias may arise, we will list some general points for you to consider when creating or reviewing AI systems to ensure they are bias free. Creating bias-free and ethical AI requires a multi-faceted and ongoing effort; it necessitates a commitment to fairness, diversity, transparency, and continuous improvement throughout the entire AI system's life cycle."]}></Page>
        <Accordion className="accordion" allowToggle>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Data diversity and cleansing
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
    Carefully consider potential sources of bias in the data and take steps to address them, such as collecting data from various demographics and avoiding underrepresented or marginalized groups' exclusion. Additionally, you can take steps to process the data to minimize bias, such as removing attributes that may introduce or amplify bias.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Team diversity
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>Foster diversity and inclusivity within AI development teams. Diverse perspectives can help identify potential biases, challenge assumptions, and provide alternative viewpoints to mitigate biases effectively. Biases are hard to detect in yourself, and having several different perspectives can help facilitate bias free AI! </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Transparency
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>Create AI models that are transparent and interpretable, allowing for better understanding of their decision-making processes. Models that provide explanations or feature importance rankings can help identify potential sources of bias and enable stakeholders to intervene when necessary.</AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
        Regular testing
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>Continuously assess systems for bias and fairness throughout their lifecycle. By conducting regular testing, you can gradually identify any biases that may have been introduced during development or deployment.
</AccordionPanel>
  </AccordionItem>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className="accordion_heading">
          User Feedback
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>Allow individuals to report biases or discrimination they encounter when interacting with AI systems. Actively listen to user feedback and take appropriate actions to rectify biases and improve the system's fairness, and continuously improve your model by iteratively making user based changes.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </>
      )
    } else if (page === 6) {
      return (
        <>
        <Page title="BEFORE BUILDING AI SYSTEMS" sub="Section 3: How we can prevent and avoid bias" text={["To finish off this section, here are some useful questions that you can ask before AI development has begun to ensure you are being proactive rather than retroactive in terms of building ethical AI. Note that the questions you want to be asking are different depending on the goals and functionality of your particular AI, and the aim of these questions is to provide some useful starting points."]}></Page>
        <ul className='questions'>
        <li>What exactly do we want this model to do?</li>
        <li>We know that X group is at a greater risk of Y. should we train our model with that in mind? What are the ethical/practical implications of this?
</li>
        <li>How much do internal/external stakeholders know about this model? Is there justification behind this knowledge?</li>
        <li>How are authorities going to use this model and what kind of training will there be involved? How will this enhance their job?</li>
        <li>Is it worth it to pursue this technology? Do the positives outweigh the negatives? Are there better alternatives?</li>
        <li>How data is being used, and how can we SAFELY use sensitive data? Can we ensure stakeholders are not put at risk when training/using our model?</li>
      </ul>
      </>
      )
    }
  }

  return (
    <>
    <section className='page'>
         {renderContent()}
    </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 6 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}
export default Before