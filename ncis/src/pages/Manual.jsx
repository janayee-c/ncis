import React from 'react'
import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react' 
import '../styles/Manual.css'
import { Home } from '../components/manual/export'
import { Heading } from '../components/export'

const Manual = () => {
  const [showElement, setShowElement] = useState(false)
  const [disElement, setdisElement] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true)
  }, 1200);
    const show = setTimeout(() => {
      setdisElement(true)
  }, 800);

  return () => clearTimeout(timer);
  }, [])

    return (<div>
         {showElement ? <div></div> : <div className={showElement ? 'hide splash-flex' : 'splash-flex'}>
        <Heading title="LOADING AI ETHICS MANUAL"></Heading>
        <Spinner  emptyColor='gray.100' size='xl'/>
              </div>}
              <div className={disElement ? 'show' : 'static_hide'}>
       <Home ></Home> 
       </div>
      </div>
    )
  }
  
  export default Manual