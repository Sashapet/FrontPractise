import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-grid'>
                <div className='address'>
                    <h1>ADDRESS</h1>
                    <p>500 Terry Francois St.</p>
                    <p>San Francisco,</p>
                    <p>CA 94158</p>
                </div>
                <div className='contact'>
                    <h1>Contact</h1>
                    <p>info@mysite.com</p>
                    <p>Tel: 123-456-7890</p>
                </div>
                <div className='hours'>
                    <h1>Hours</h1>
                    <p>OPEN DAILY</p>
                    <p>10AM-8PM</p>
                </div>
                <div className='mailing-list'>
                    <h1>MALING LIST</h1>
                    <input className='input' type='text' placeholder='Enter your mail here*' /><br />
                    <input type='button' className='button' value='SUBSCRIBE' />
                </div>
                <div className='prod'>
                    <p>©2023 by Gelato. Proudly created with <span>Wix.com</span></p>
                </div>
                <div className='social'>
                    <a href='/'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href='/'><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href='/'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}
