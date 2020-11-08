import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='location'>
                <h1 className='location-title'>
                    500 Terry Francois Street San Francisco, CA 94158  |  Daily 10AM-10PM
                </h1>
            </div>
            <nav>
                <ul>
                    <div className='menu'>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/'>FLAVORS</a></li>
                        <li><a href='/'>BOOK AN EVENT</a></li>
                        <li><a href='/'>ABOUT</a></li>
                    </div>
                    <li className='logo'><a href='/'>Gelato</a></li>
                    <div className='icons'>
                        <div className='log-in'>
                            <li className='login-icon'>
                                <a href='/' className='user'>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='login'>
                                    Log In
                                </a>
                            </li>
                        </div>
                        <div className='social'>
                            <a href='/'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href='/'><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href='/'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </ul>
            </nav>
            <div className='chat-icon'><i className="fa fa-comment"></i></div>
        </div>
    )
}
