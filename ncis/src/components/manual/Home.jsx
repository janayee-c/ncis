import React from 'react'
import { Intro, Before, During, After, Case, Conclusion } from './export'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react' 
import '../../styles/Manual.css'
import { Mantra } from '../../images/export'
import {
    Link
    } from 'react-router-dom';


const Home = () => {
    return (
      <>
      <Tabs size='md' variant='enclosed' colorScheme='ncis.100' className='tabs'>
        <Box>
        <Link to="/"><img id="m-logo" src={Mantra}/></Link>
        </Box>
      <TabList className='headers'>
        <Tab>Introduction</Tab>
        <Tab>Before Development</Tab>
        <Tab>During Development</Tab>
        <Tab>After Development</Tab>
        <Tab>Case Study: Ada</Tab>
        <Tab>Conclusion</Tab>
      </TabList>
      <TabPanels className="content">
        {/*Each TabPanel contains a component which has manual content */}
        <TabPanel>
          <Intro></Intro>
        </TabPanel>
        <TabPanel>
         <Before></Before>
        </TabPanel>
        <TabPanel>
          <During></During>
        </TabPanel>
        <TabPanel>
          <After></After>
        </TabPanel>
        <TabPanel>
          <Case></Case>
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