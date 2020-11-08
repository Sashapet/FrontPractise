import React from 'react'
import IceCream2 from '../../photos/ice-cream-2.jpg'
import IceCream3 from '../../photos/ice-cream-3.jpg'
import IceCream4 from '../../photos/ice-cream-4.jpg'
export default function Section2({left, third}) {
    return (
        <div className='section2'>
            <div className='section2-content'>
                { left==='yes' ? (                
                <div className='right-side-second'>
                    <div className='right-side-content-second'>
                        <h1>OUR FLAVORS</h1>
                        <h3>Fresh n' Tasty!</h3>
                        <p> 
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                            Just click “Edit Text” or double click me to add your own content and 
                            make changes to the font. 
                        </p>
                        <button>MENU</button>
                    </div>
                </div>
                ) : (              
                <div className='left-side'>
                    <img src={third==='yes' ? IceCream4 : IceCream2} alt=''/>
                </div>
                )}
                {left==='yes' ? (
                <div className='left-side'>
                    <img src={IceCream3} alt=''/>
                </div>
                ) : (       
                <div className='right-side'>
                    <div className='right-side-content'>
                        <h1>OUR FLAVORS</h1>
                        <h3>Fresh n' Tasty!</h3>
                        <p> 
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                            Just click “Edit Text” or double click me to add your own content and 
                            make changes to the font. 
                        </p>
                        <button>MENU</button>
                    </div>
                </div>
            )}

            </div>
        </div>
    )
}
