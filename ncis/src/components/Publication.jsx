import React, { useState } from 'react';
import '../styles/Publication.css';

const Publication = ({ pubHead, title, desc, url }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <a 
            href={url} 
            id="link" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={`article-container ${isHover ? "hoveredArticle" : "unhoveredArticle"}`} maxW="30%">
                <h5 className="article-header">{pubHead}</h5>
                <h4 className="article-title">{title}</h4>
                <p className="article-desc">{desc}</p>
                <h6 className={`read-link ${isHover ? "showRead" : "hideRead"}`}> - Read </h6>
            </div>
        </a>
    );
}

export default Publication;
