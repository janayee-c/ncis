import React from 'react'
import { Intro, Before, During, After, Case, Conclusion } from '../components/manual/export'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react' 
import '../styles/Manual.css'
import {
    Link
    } from 'react-router-dom';

function Manual() {

    return (
      <Tabs size='md' variant='enclosed' colorScheme='ncis.100'>
        <Box>
        <Link to="/"><img id="logo" src={require('../images/NCIS_logo_mantra.png')}/></Link>
        </Box>
      <TabList className='headers'>
        <Tab>Introduction</Tab>
        <Tab>Before Building</Tab>
        <Tab>During Building</Tab>
        <Tab>After Building</Tab>
        <Tab>Case Study: NCIS</Tab>
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
    )
  }
  
  export default Manual