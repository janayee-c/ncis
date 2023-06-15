import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Page } from './export'

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
      return (<>
      <Page title='AFTER AI SYSTEM DEVELOPMENT' sub='Bias and Looking Ahead' text={[" At this point, you’ve (hopefully) followed all the steps to create an ethical AI system, and are ready to use your system to improve the lives of countless people. However, even after you’ve finished construction, it should be acknowledged that AI can still become unethical. This could be due to a number of reasons, but we’ll focus on 2 for now: bias and policy changes. Press each button to find out more about each bias type."]}></Page>
        {/* Add content for two biases */}
        </>)
    } else if (page === 1) {
      return(<Page title='AFTER AI SYSTEM DEVELOPMENT' sub='Bias and Looking Ahead' text={["As laws around AI change and are refined, it is crucial to also ensure our AI systems are up to date and still comply with the modern standard. Because AI is still relatively new in a legal sense, laws around AI are rapidly changing and what may be considered acceptable one day may not be the next.", "Some currently emerging trends in regulations include more privacy protection, enforcing developers to reflect on AI and its usefulness/ethical implications at more points of developments, and augmenting and enhancing data regulation. That being said, these trends may also shift eventually and it is up to the individual to keep up with the AI policies that pertain to their system."]}></Page>)
    } 
}

  return (
    <>
      <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 1 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default After;