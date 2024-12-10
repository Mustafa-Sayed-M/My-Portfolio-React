import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TypeAnimate() {
    return (
        <div
            data-aos="fade-up"
            className='type-animate-wrapper text-center mb-1'
        >
            Hello, I'm <TypeAnimation
                sequence={[
                    '',
                    1000,
                    "Mustafa Sayed",
                    1000,
                    "Front End Developer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                className='text-primary-color'
                style={{ fontSize: '1.5em', display: 'block', fontWeight: 'bold' }}
            />
        </div>
    )
}

export default TypeAnimate;