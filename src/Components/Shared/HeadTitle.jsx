import React from 'react';

function HeadTitle({ startWords, featuresWords, endWords }) {
    return (
        <h1 className='font-semibold text-3xl mb-10 text-center'>{startWords} <span className='text-primary-color'>{featuresWords}</span> {endWords}</h1>
    )
}

export default HeadTitle;