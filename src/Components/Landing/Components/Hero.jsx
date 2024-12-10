import React from 'react';

function Hero() {
    return (
        <div
            data-aos="zoom-in"
            className='w-[200px] h-[200px] rounded-full border-4 border-transparent outline outline-primary-color mb-5'
        >
            {/* Image */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/me/landing.jpg`}
                alt='My Avatar'
                className='object-cover rounded-full w-full h-full'
            />
        </div>
    )
}

export default Hero;