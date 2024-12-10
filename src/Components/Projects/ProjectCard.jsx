import React from 'react';

function ProjectCard({ projectData, index }) {

    const {
        name,
        description,
        image,
        technologies,
        demo,
        github,
    } = projectData;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className='project-card p-5 shadow-md rounded-2xl bg-gradient-to-tl from-[#04071D] to-[#0C0E23] border border-border-color space-y-3'
        >
            {/* Image Wrapper */}
            <div className='image-wrapper h-[300px] p-7 overflow-hidden rounded-md bg-[#13162D] group relative'>
                {/* Light */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/projects/light.png`}
                    alt='Light'
                    className='absolute left-0 top-0'
                />
                {/* Image */}
                <img
                    src={image?.url}
                    alt={name}
                    className='rounded-t-md transition relative z-10'
                />
            </div>
            {/* Info Text */}
            <div className='info-text space-y-2 max-md:text-center'>
                {/* Header */}
                <div className='header flex items-center justify-between gap-3'>
                    {/* Name */}
                    <h1 className='font-semibold text-2xl line-clamp-1'>{name}</h1>
                    {/* GitHub */}
                    <a
                        href={github}
                        className='transition text-primary-color sm:hover:text-white text-2xl'
                        target='_blank'
                        title='GitHub Repository'
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                {/* Description */}
                <p className='text-white/70 font-medium line-clamp-2'>{description}</p>
            </div>
            {/* Foot */}
            <div className='foot space-y-4'>
                {/* Tech */}
                <ul className='flex items-center'>
                    {technologies.map((tech, index) => <li
                        key={index}
                        title={(tech.name).toUpperCase()}
                        className={`w-10 h-10 p-2 flex items-center justify-center bg-[#04071D] border border-border-color shadow-md rounded-full ${index > 0 && "-ml-3"}`}
                    >
                        <img
                            src={tech.image?.url}
                            alt={tech.name}
                        />
                    </li>)}
                </ul>
                {/* Live Site */}
                <a
                    href={demo}
                    className='text-primary-color font-medium flex items-center justify-center gap-2 hover:text-white transition group py-2 bg-primary-color/10 rounded-md'
                    target='_blank'
                    title='Live Site'
                    rel="noreferrer"
                >
                    <span>Check Live Site</span>
                    <span className='rotate-45 transition block animate-pulse group-hover:animate-none transition-none'>
                        <i className="fa-solid fa-arrow-up"></i>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;