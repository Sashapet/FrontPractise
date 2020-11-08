import React, {useState, useEffect} from 'react'
import iceCream from '../../photos/ice-cream-1.png'

export default function Section3({second}) {
    return (
    <div className={second==='yes' ? 'section3-second' : 'section3'}>
         <div className='section3-content'>
             <h1 className='title1'>{second==='yes' ? 'CATERING & MORE' : 'ENJOY'}</h1>
             <h1 className='title2'>{second==='yes' ? 'EVENTS' : 'DAIRY FREE'}</h1>
             <button className='section-button'>MENU</button>
         </div>
     </div>
    )
}
