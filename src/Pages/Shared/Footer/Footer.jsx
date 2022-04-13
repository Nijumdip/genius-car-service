import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            {/* <p><small>copyright &#169; /dynamic years/</small></p> */}
            <p><small>copyright &copy;  {year}</small></p>
        </footer>
    );
};

export default Footer;