import React from 'react';
import './footer.styles.css';

const Footer = ()=>{
    return (
        <div className='footer'>
        <div className='content'>
        <p>Api Used: https://api.covid19api.com/</p>
        <p>Information from various sources...</p>
        </div>
        
        <a className='github' target="_blank" href="https://github.com/SuvashBudhathoki/covid19-data">Github</a>
        </div>
    )
}

export default Footer;