import React from 'react'
import { Heading } from '../export'
import { Heading as H } from "@chakra-ui/react"
import '../../styles/manual/Page.css'

const Page = ({title, sub, text, image, float}) => {
  return (
    <div className="layout">
    <div className="layout-content">
    <Heading align='right' title={title}></Heading>
    {sub && <H as='h4' size='md' className='head'>{sub}</H>}
    {text && text.map((text, i) => <p key={i}>{text}</p>)}
    </div>
    {image && <img className={float ? " floating" : ""} src={image} alt="graphic for text"></img>}
    </div>
  )
}

export default Page