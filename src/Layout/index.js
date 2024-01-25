import React, { Children } from 'react'
import Header from '../Components/TB/Header';
import Footer from '../Components/TB/Footer';
import navLinks from '../Functions/navlinks';

const index = () => {
    return (
        <div>
            <Header navLinks= {navLinks} />
                {Children}
            <Footer />
        </div>
    )
}

export default index
