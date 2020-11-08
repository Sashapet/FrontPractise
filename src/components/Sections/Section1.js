import React from 'react'
import Navbar from '../Navbar/Navbar'
import iceCream from '../../photos/ice-cream-1.png'

export default function Section1({nav}) {
    return (
        <div className='section1'>
           <Navbar />
            <div className='section1-content'>
                <img src={iceCream} alt='Ice Cream' />
                <h1 className='title1'>HAND CRAFTED</h1>
                <h1 className='title2'>ICE CREAM</h1>
                <button className='section-button'>MENU</button>
            </div>
        </div>
    )
}
