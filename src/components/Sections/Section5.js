import React from 'react'
import Carousel from 'react-elastic-carousel';
import Carousel_1 from '../../photos/carousel-1.jpg';
import Carousel_2 from '../../photos/carousel-2.jpg';
import Carousel_3 from '../../photos/carousel-3.jpg';
import Carousel_4 from '../../photos/carousel-4.jpg';
import Carousel_5 from '../../photos/carousel-5.jpg';
import Carousel_6 from '../../photos/carousel-6.jpg';
import Carousel_7 from '../../photos/carousel-7.jpg';
import Carousel_8 from '../../photos/carousel-8.jpg';
import Carousel_9 from '../../photos/carousel-9.jpg';
import Carousel_10 from '../../photos/carousel-10.jpg';

export default function Section5() {
    return (
        <div className='section5'>
      <Carousel itemsToShow={4} pagination={false} itemsToScroll={4}>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_1}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_2}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_3}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_4}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_5}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_6}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_7}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_8}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_9}  alt='first' /></div>
        <div className='carousel-item'><h1>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h1><img src={Carousel_10}  alt='first' /></div>
      </Carousel>
        </div>
    )
}
