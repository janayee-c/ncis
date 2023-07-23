import { useEffect, React, useState } from 'react';
import '../styles/ProductPanel.css';
import { Container } from '@chakra-ui/react';

const ProductPanel = (props) => {
    const { heading, description, isOpen, onClick, height } = props;

    const [cueTransition, setCueTransition] = useState(false); 

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          setCueTransition(true);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        setCueTransition(false);
      }
    }, [isOpen]);


      const translateHeading = () => {
        if (isOpen && cueTransition) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.7s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };

      const translateDesc = () => {
        if (isOpen && cueTransition) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.8s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };

      const translateContact = () => {
        if (isOpen && cueTransition) {
          return {
            transform: `translateY(${-height}px)`,
            transition: 'transform 0.75s',
          };
        } else {
          return { 
            transform: 'initial',
            transform: 'translateY(200px)', opacity: 1, 
            transition: 'transform 1s',};
        }
      };


      
  return (
    <Container className="panel-container" >
      <h3 className="product-name" style={translateHeading()}>{heading}</h3>
      <p className="product-description" style={translateDesc()}>{description}</p>
      <p className="contact" style={translateContact()}>
        <a href="mailto:info@ncis-tech.com">Contact Us</a> to learn more.
      </p>

      <button className="close-button" style={translateDesc()} onClick={onClick}>
        X
      </button>
    </Container>
  );
};

export default ProductPanel;
