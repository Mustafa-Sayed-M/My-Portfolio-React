import React from 'react';

function ServiceCard({ serviceData, index }) {

    const {
        name,
        description,
        image
    } = serviceData;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className='service-card p-5 shadow-md rounded-2xl bg-gradient-to-tl from-[#04071D] to-[#0C0E23] border border-border-color flex items-center gap-3 max-md:flex-col'
        >
            {/* Image */}
            <img
                src={image?.url}
                alt={name}
                width={130}
                className='rounded-t-md'
            />
            {/* Text Box */}
            <div className='text-box space-y-2 max-md:text-center'>
                {/* Name */}
                <h1 className='font-semibold text-lg md:text-xl'>{name}</h1>
                {/* Description */}
                <p className='text-white/70'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard;