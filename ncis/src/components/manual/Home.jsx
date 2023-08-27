import React, { useState } from 'react'
import { Intro, Before, During, After, Case, Conclusion } from './export'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react' 
import '../../styles/Manual.css'
import { Mantra } from '../../images/export'
import {
    Link
    } from 'react-router-dom';


const Home = () => {
  const [curr, setCurr] = useState(-1)

  const onPageChange = (val) => {
    setCurr(val);
  }
    return (
      <>
      <Tabs size='md' variant='enclosed' colorScheme='ncis.100' className='tabs'>
        <Box>
        <Link to="/"><img id="m-logo" src={Mantra} alt="NCIS logo"/></Link>
        </Box>
      <TabList className='headers'>
        <Tab onClick={() => onPageChange(0)}>Introduction</Tab>
        <Tab onClick={() => onPageChange(1)}>Pre Development</Tab>
        <Tab onClick={() => onPageChange(2)}>Development</Tab>
        <Tab onClick={() => onPageChange(3)}>Post Development</Tab>
        <Tab onClick={() => onPageChange(4)}>Case Study: Ada</Tab>
        <Tab onClick={() => onPageChange(5)}>Conclusion</Tab>
      </TabList>
      <TabPanels className="content">
        {/*Each TabPanel contains a component which has manual content */}
        <TabPanel>
          <Intro curr={curr}></Intro>
        </TabPanel>
        <TabPanel>
         <Before curr={curr}></Before>
        </TabPanel>
        <TabPanel>
          <During curr={curr}></During>
        </TabPanel>
        <TabPanel>
          <After curr={curr}></After>
        </TabPanel>
        <TabPanel>
          <Case curr={curr}></Case>
        </TabPanel>
        <TabPanel>
          <Conclusion></Conclusion>
        </TabPanel> 
      </TabPanels>
    </Tabs>
    </>
    )
  }
  
  export default Home