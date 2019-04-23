import React from 'react';
import "./Button.css";

export const Blackbutton = ({ text }) => {

    return (
            <a className="waves-effect waves-light btn black white-text">{text}</a>
    )
}

export default Blackbutton;