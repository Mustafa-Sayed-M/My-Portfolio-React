import React from 'react';

function AboutHero() {
    return (
        <div className='about-hero flex items-center justify-center'>
            <div
                data-aos="fade-up-right"
                className='image-wrapper bg-primary-color/50 w-fit rounded-xl max-sm:p-3 border border-white'
            >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/me/about.jpg`}
                    alt='Me'
                    data-aos="fade-up-right"
                    data-aos-delay={300}
                    className='object-cover max-h-[500px] rounded-xl relative sm:-top-5 sm:-right-5 border border-white shadow-md'
                />
            </div>
        </div>
    )
}

export default AboutHero;