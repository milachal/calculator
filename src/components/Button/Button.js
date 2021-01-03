import React from 'react';
import styles from '../Button/Button.module.css';

const Button = props => {
    const className = styles[props.className] || styles.button;
    return (
        <button 
            className={className} 
            onClick={() => props.handler(props.value)}
        >   
            {props.value}
        </button>    
    )
};

export default Button;

// const className = Styles[props.type]