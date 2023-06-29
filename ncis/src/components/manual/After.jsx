import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon, ViewIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { Page } from './export'
import { Information, Laws } from '../../images/export'
import '../../styles/Manual.css'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const After = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, [page]);


  const renderContent = () => {
    if (page === 0) {
      return (
      <Page title="AFTER BUILDING AI SYSTEMS" sub="Section 1: Bias and Looking Ahead" image={Information} float={true}  text={[" At this point, you’ve (hopefully) followed all the steps to create an ethical AI system, and are ready to use your system to improve the lives of countless people. However, even after you’ve finished construction, it should be acknowledged that AI can still become unethical.", "Although this could be due to a number of reasons, we’ll focus on 2 in this section - bias and policy changes. Firstly, as with other stages, bias is still important to consider. Deployment bias and automation bias two of the main biases to look out for in this stage - if not prevented, they can potentially undermine your efforts to maintain an ethical system. Secondly, potential policy changes can also affect whether your system is deemed ethical. What is ethical today isn't necessarily ethical tomorrow, as our expectations around ethical AI and what it means to be ethical are constantly evolving."]}></Page>)
    } else if (page === 1) {
      return(<>
      <Page title="AFTER BUILDING AI SYSTEMS" sub="Section 1: Bias and Looking Ahead"></Page>
      <p>Deployment bias refers to when a system is used in unexpected of different ways than originally intended. In other words, your AI is not being used in ways it was not meant to be used in. It emphasizes for all stakeholders and users to understand the system's limitations and ensure appropriate use in line with its intended purpose.</p>
      <img src={Information} className="during-graphic"></img>
      <p>For example, consider an AI system is developed to aid doctors in diagnosing and treating a specific medical condition. However, due to its accessibility, non-experts and pediatricians start using the system to diagnose and treat children, even though it was primarily trained on adult data. This unintended use of the system in pediatric care highlights the risk of deployment bias. The system may provide inaccurate recommendations or misdiagnose younger patients due to the lack of adequate training on pediatric data. </p>
      </>)
    } else if (page === 2) {
      return(<>
      <Page title="AFTER BUILDING AI SYSTEMS" sub="Section 1: Bias and Looking Ahead"></Page>
      <p>Another type of bias that occurs after model deployment is automation bias, which is the tendency to favor computer generated results over human ones. In the maritime context, this is a serious concern as people can often “overtrust” the operation of systems when personal judgment needs to be used. By becoming overly reliant on AI, people may struggle to respond effectively to unexpected events that fall outside a system’s programmed capabilities. </p>
      <img src={Information} className="during-graphic"></img>
      <p>For example, consider a scenario where an advanced AI system is deployed on a naval vessel to assist with target identification and threat assessment. In this case, automation bias may occur if the human operators unquestioningly trust the AI system's recommendations and fail to critically evaluate or validate the information provided. To prevent this, it is essential to promote human-AI collaboration rather than complete reliance on automation and encourage operators to maintain situational awareness.</p>
      </>)
    } else if (page === 3) {
      return(<>
      <Page title='AFTER AI SYSTEM DEVELOPMENT' sub='Section 2: Policy Changes'></Page>
      <p>As laws around AI change and are refined, it is crucial to also ensure our AI systems are up to date and still comply with the modern standard. Because AI is still relatively new in a legal sense, laws around AI are rapidly changing and what may be considered acceptable one day may not be the next.</p>
      <img src={Laws} alt="ai policy shifting landscape"className="during-graphic"></img>
      <p>Some currently emerging trends in regulations include more privacy protection, enforcing developers to reflect on AI and its usefulness/ethical implications at more points of developments, and augmenting and enhancing data regulation. That being said, these trends may also shift eventually and it is up to the individual to keep up with the AI policies that pertain to their system.</p>
      </>)
    } 
}

  return (
    <>
      <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 3 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default After;