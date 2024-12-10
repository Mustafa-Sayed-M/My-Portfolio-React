import React from 'react';

function SkillCard({ skillData, index }) {

    const { image, name, percentage } = skillData;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className='skill-card space-y-2'
        >
            {/* Content */}
            <div className="content p-5 rounded-2xl bg-[#0C0E23] border border-border-color">
                {/* Image */}
                <img
                    src={image?.url}
                    alt={name}
                    width={80}
                    className='mx-auto mb-2'
                />
                {/* Percentage */}
                <p className='text-primary-color text-center font-bold'>%{percentage}</p>
            </div>
            {/* Name */}
            <p className='text-primary-color font-semibold text-center capitalize'>{name}</p>
        </div>
    )
}

export default SkillCard;