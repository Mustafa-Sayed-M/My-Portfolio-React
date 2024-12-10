import React from 'react';
import Hero from './Components/Hero';
import TypeAnimate from './Components/TypeAnimate';

const Image = ({ alt, ...dataAttributes }) => {
    return (
        <img
            {...dataAttributes}
            alt={alt}
        />
    )
};

function Landing() {

    const sharedAttributes = {
        'data-aos': "fade",
        'data-aos-duration': "800",
        alt: 'Spotlight',
        className: 'object-cover absolute top-0 select-none max-md:hidden'
    };

    const pathImage = `${process.env.PUBLIC_URL}/assets/images/landing/spotlight`;

    return (
        <section
            id="landing-section"
            className="landing-section md:h-[650px] md:pt-[60px] max-md:pb-10"
        >
            {/*  Spotlight Left */}
            <Image
                {...{
                    ...sharedAttributes,
                    src: pathImage + '-left.png',
                    className: sharedAttributes.className + ' left-0',
                }}
            />
            {/* Container */}
            <div className='container relative z-10 h-full py-10 flex flex-col justify-center items-center'>
                {/* Hero */}
                <Hero />
                {/* Type Animate Wrapper */}
                <TypeAnimate />
                {/* Description */}
                <p
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="mb-3 text-center md:max-w-[600px] text-white/70"
                >
                    I am a Front End Developer passionate about crafting responsive and user-friendly web applications.
                    With expertise in React.js, Tailwind CSS, and modern web technologies, I strive to deliver seamless digital experiences.
                </p>
                {/* Links */}
                <div className='links flex max-sm:flex-col items-center gap-3 max-sm:w-full'>
                    {/* Explore My Portfolio */}
                    <div
                        data-aos="fade-up-left"
                        data-aos-delay="300"
                        className='explore-portfolio-wrapper max-sm:w-full'
                    >
                        <a
                            href='#about-section'
                            className='max-sm:w-full max-sm:text-center bg-gradient-to-tr from-[#161A31] to-[#06091F] border border-border-color p-3 rounded-md sm:hover:scale-105 block transition group sm:hover:bg-primary-color sm:hover:from-transparent sm:hover:to-transparent font-medium'
                        >
                            Explore My Portfolio
                            <span className='ml-2 inline-block text-primary-color transition sm:group-hover:rotate-90 sm:group-hover:text-white animate-pulse'>
                                <i className='fas fa-arrow-right fa-fw'></i>
                            </span>
                        </a>
                    </div>
                    {/* Download Cv */}
                    <div
                        data-aos="fade-up-left"
                        data-aos-delay="400"
                        className='download-cv-wrapper max-sm:w-full'
                    >
                        <a
                            href='/'
                            className='max-sm:w-full max-sm:text-center bg-gradient-to-tr from-[#161A31] to-[#06091F] border border-border-color p-3 rounded-md sm:hover:scale-105 block transition group sm:hover:bg-primary-color sm:hover:from-transparent sm:hover:to-transparent font-medium'
                        >
                            Download Cv
                            <span className='ml-2 inline-block text-primary-color transition sm:group-hover:text-white sm:group-hover:animate-pulse'>
                                <i className="fa-solid fa-file-arrow-down fa-fw"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {/*  Spotlight Right */}
            <Image
                {...{
                    ...sharedAttributes,
                    src: pathImage + '-right.png',
                    className: sharedAttributes.className + ' right-0',
                }}
            />
        </section>
    )
}

export default Landing;