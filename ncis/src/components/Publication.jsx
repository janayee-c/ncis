import React from 'react'
import '../styles/Pubs.css'
import { Heading } from '../components/export'
import { Container } from '@chakra-ui/react'

const Publication = (props) => {

    const { pubHead, title, desc } = props;

    return (
        <a>
        <div maxW="30%">
            <h5 className="article-header">{pubHead}</h5>
            <h4 className="article-title">{title}</h4>
            <p className="article-desc">{desc}</p>
            <h6 className="read-link"> - Read </h6>
        </div>
        </a>
    );
}

export default Publication; 