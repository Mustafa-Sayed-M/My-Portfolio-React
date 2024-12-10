import React from 'react';
import HeadTitle from '../Shared/HeadTitle';
import AboutHero from './Components/AboutHero';
import AboutText from './Components/AboutText';

function About() {
    return (
        <section className="about-section py-10" id="about-section">
            {/* Head Title */}
            <HeadTitle featuresWords={'About'} endWords={'Me'} />
            {/* Content Grid */}
            <div className='content-grid grid md:grid-cols-2 gap-x-5 gap-y-10'>
                {/* About Hero */}
                <AboutHero />
                {/* About Text */}
                <AboutText />
            </div>
        </section>
    )
}

export default About;