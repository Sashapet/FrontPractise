import React from 'react'
import ball_1 from '../../photos/ball-1.png';
import ball_2 from '../../photos/ball-2.png';
import ball_3 from '../../photos/ball-3.png';
import ball_4 from '../../photos/ball-4.png';
import iceCream from '../../photos/ice-cream-nobg.png'
export default function Section4() {
    return (
        <div className='section4'>
            <div className='section4-content'>
                <div className='ball left'><img src={ball_1} alt='ball-1' /></div>
                <div className='ball'><img src={ball_2} alt='ball-2' /></div>
                <div className='ice-cream'><img src={iceCream} alt='ball-2' /></div>
                <div className='ball'><img src={ball_3} alt='ball-3' /></div>
                <div className='ball right'><img src={ball_4} alt='ball-4' /></div>
            </div>
            <div className='section4-hashTag'>
                <h1>#DOUBLE TAP</h1>
            </div>
        </div>
    )
}
