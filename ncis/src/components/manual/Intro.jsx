import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Cube, Ocean} from '../../images/export'
import { Page } from './export'
import { Heading } from '../export'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const Intro = ({curr}) => {

  const [page, setPage] = useState(0);

  useEffect(() => {
    if (curr !== 0) {
      setPage(0);
    }
  }, [curr]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, [page]);


  const renderContent = () => {
    if (page === 0) {
      return <>
       <Heading title="INTRODUCTION"></Heading>
      <section className="intro-flex">
      <section>
        <p>Welcome to the NCIS (Nautical Crime Investigation Services) Artificial Intelligence (AI) Ethics Manual. This manual/workshop aims to provide an introduction to AI ethics, with a focus on how the topic pertains to the maritime space and its related fields.</p>
        <p>Press the "Next" button to continue to the Introduction/Definitions, or press on one of the tabs to start learning about creating ethical AI!</p>
      </section>
      <img className='floating intro-graphic' alt="intro cube" src={ Cube }></img>
      </section>
    </>
    } else if (page === 1) {
      return (
      <Page title="INTRODUCTION" image={Ocean} text={["As we enter an emergent age of AI development, AI continues to increase its presence and vitality in our daily lives. The maritime space in particular has seen AI systems become significant instruments across all areas of the industry. This includes personnel, logistics, process optimization, protections (i.e ensuring law is enforced), supply chains, situational understanding, and more. Thus, it is inevitably beneficial to learn more about AI Ethics and how we can critically analyze current and future systems to ensure all methods are performed ethically.", "In this manual, we will provide a general overview of AI ethics and discuss pertinent topics such as the importance of data and understanding bias. Consequently, the manual's main sections are split into before, during, and after development. Additionally, one of NCIS’ current AI systems, Ada, will be used as a case study to see how it fits within the modern standard of AI ethics.", "We hope you're as excited to learn about ethics in AI as we are to teach you about it! Before moving on, take a look at the next page for some important definitions that will come in handy while going through this manual."]}></Page>
      )
    }
      else if (page === 2) {
      return <>
        <Heading title='DEFINITIONS'></Heading>
        <p><strong>Artificial Intelligence (AI) system</strong> → AI can have different definitions in different contexts, but in a legal context, AI refers to a system that uses machine learning and GENERATES output such as predictions, recommendations, or decisions influencing the environments they interact with.
</p>
        <p><strong>AI life cycle</strong> → Refers to the various stages involved in the development, deployment, and maintenance of an artificial intelligence system, encompassing the entire lifespan of an AI project from the initial ideation and data gathering to the ongoing monitoring and improvement of the deployed AI system
</p>
        <p>
        <strong>Big "E" ethics</strong> → Concerned with whether we should be applying AI for this application, deciding what is morally right/wrong.
        </p>
        <p>
        <strong>Little "e" ethics</strong> → Concerned with how can we make particular applications of AI more trustworthy/ethical?
        </p>
        <p>
        <strong>Bias</strong> → In the context of AI, refers to the systematic and unfair preferences or prejudices that AI systems may exhibit toward certain groups, attributes, or outcomes. It can result from biased training data, algorithmic design, or unintended correlations that disproportionately impact individuals or reinforce existing social inequalities.
        </p>
        <p>
        <strong>Framework</strong> → A set of principles, guidelines, or rules that provide a foundation or outline for a particular activity, process, or system, offering a way to approach complex tasks or problems.
        </p>
        <p>
        <strong>Stakeholder</strong> → Individuals, groups, or entities that have a vested interest, influence, or are affected by the development, deployment, or use of artificial intelligence systems, which can include developers and engineers, users, policymakers, researchers, advocacy groups/NGOs, business leaders, and academic institutions. Each project will have unique and different stakeholders potentially including all or just a few of the listed groups.
        </p>
        <p>
        <strong>Training set</strong> → A labeled dataset used to train a machine learning model.
        </p>
        <p>
        <strong>Deployment</strong> → A stage in the artificial intelligence lifecycle where a trained model or AI system is put into active use to perform its intended tasks or provide specific service (i.e brought into the real world for actual use)
        </p>
        </>
    }
  }

  return (
    <>
    <section className='page'>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 2 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default Intro