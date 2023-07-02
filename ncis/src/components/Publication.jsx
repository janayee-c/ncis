import { React, useState } from 'react'
import '../styles/Publication.css'

const Publication = (props) => {

    const { pubHead, title, desc, url } = props;

    const [ isHover, setIsHover ] = useState(false); 

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }


    return (
        <a href={url} id="link" target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor="pointer">
        <div className= {`article-container ${isHover ? "hoveredArticle" : "" } `} maxW="30%">
            <h5 className="article-header">{pubHead}</h5>
            <h4 className="article-title">{title}</h4>
            <p className="article-desc">{desc}</p>
            <h6 className={`read-link ${isHover ? "showRead" : "hideRead" } `}> - Read </h6>
        </div>
        </a>
    );
}

export default Publication; 