import React from 'react'
import { useState } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

/* Note that styles such as .page, .head, .next, etc. are in Manual.css to reduce repetition */

const During = () => {
  const [page, setPage] = useState(0);

  const renderContent = () => {
    if (page === 0) {
      return (<>
        <p>
          After you’ve asked the appropriate questions and have laid the groundwork for building your AI model, it is time to start the system construction process. Throughout this, it is crucial to regularly review whether your AI model still complies with the goals you set in place. If it does, then you can continue with the subsequent stages of development. If it doesn’t, you may have to reconsider your training process and backtrack to ensure your AI isn’t unethical and potentially putting stakeholders at risk. </p>
          <p>Biases such as aggregation bias and evaluation bias can cause unwanted or unexpected effects during this stage, and being mindful of them remains an important task. 
        </p>
        </>)
    } else if (page === 1) {
      return( <>
      <p>Aggregation bias occurs when data from multiple sources are combined and individual data sources or groups are not properly accounted for leading to biased outputs. In other words, a one-size-fits all approach is used when groups have fundamentally different characteristics requiring a more in-depth analysis. </p>
      <p>For example, a single model for diabetes detection would work poorly because it is different across ethnicities. Thus, it is important to address biases in individual groups before combining them to ensure they are not lost during aggregation.</p>
      </>)
    } else if (page === 2) {
      return(<>
     <p>Evaluation bias occurs during model iteration/evaluation, where benchmarks do not represent various parts of the population. This is when the datasets used to test the model’s effectiveness underrepresent the actual population. </p>
     <p>For example, a facial recognition model could pass benchmarks even though they are bad at identifying a particular group, because that group was only 3% of the dataset. In this case, the dataset failed to effectively evaluate the system and call attention to its biases. To prevent this, ensure your test sets are also diverse in the same way that your training sets should be diverse.</p>
      </>)
  } else if (page === 3) {
    return(<>
    <p>A useful tool that is commonly used to help with building your model (particularly in regards to data management and determining whether bias exists) is Amazon Sagemaker Clarify. Clarify helps ML developers address potential bias and maintain transparency, which can be otherwise difficult to achieve. </p>
    <p>For example, one feature of Clarify includes determining if a negative result is produced for one group more than others. This information makes otherwise unseen bias very clear, and developers can take relevant action to fix this issue. AI development tools like Clarify are crucial to reducing bias throughout the entire ML lifecycle, and if applicable developers should aim to use tools to help make the goal of AI ethics more accurate and reliable.</p>
      </>)
  }
}

  return (
    <>
      <section className='page'>
        <Heading className='head'>During AI System Development</Heading>
        <Heading as='h4' size='md' className='head'>Bias and Prevention Tools</Heading>
        {renderContent()}
        </section>
      {page > 0 && <Button leftIcon={<ArrowBackIcon/>} className='back' onClick={() => setPage(page - 1)}>Back</Button>}
      {page < 3 && <Button rightIcon={<ArrowForwardIcon/>} className='next' onClick={() => setPage(page + 1)}>Next</Button>}
    </>
  )
}

export default During;