import React from 'react';

import logo from '../../assets/images/git-logo.png'
import './style.css'

const Signature = () => {

    return (
        <div className="signature-root">
          <img src={logo} alt='git-logo' /> 
          <a href="https://github.com/msizar/ultimate-todo-app" target="_blank">View on Github </a>
        </div>
    );
}
export default Signature;