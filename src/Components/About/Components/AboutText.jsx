import React from 'react'

function AboutText() {
    return (
        <div className='about-text space-y-3'>
            <h1
                data-aos="fade-down"
                className='font-semibold text-2xl'
            >
                Curious about me? Let me introduce myself:
            </h1>

            <p
                data-aos="fade-left"
                className='text-white/80'
            >
                I'm Mustafa, a Front-End Developer with a passion for crafting visually stunning and highly functional user interfaces
                using React.js and Tailwind CSS. My primary focus is turning creative ideas into innovative, user-friendly websites and
                applications while paying close attention to user experience and pixel-perfect details.
            </p>

            <p
                data-aos="fade-left"
                data-aos-delay={100}
                className='text-white/80'
            >
                I started my journey in web development a couple of years ago and have been continually learning and growing ever since.
                I thrive on challenges and love exploring new technologies to stay ahead in this fast-evolving field.
            </p>

            <p
                data-aos="fade-left"
                data-aos-delay={200}
                className='text-white/80'
            >
                When I’m not coding, you can find me diving into the latest tech trends, sharing insights on <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BJsjDQE%2B1QNGkGiuC66c5MQ%3D%3D' target='_blank' rel="noreferrer" className='text-primary-color underline font-medium sm:hover:text-primary-color/80 transition'>LinkedIn</a>, or working on side
                projects to sharpen my skills.
            </p>

            <p
                data-aos="fade-up"
                data-aos-delay={300}
                className='font-medium'
            >
                A few quick facts about me:
            </p>

            <ul className='list-disc list-inside space-y-2'>
                <li
                    data-aos="fade-up"
                    data-aos-delay={400}
                    className='text-white/80'
                >
                    Currently pursuing a degree in Tourism and Hotels while mastering programming.
                </li>
                <li
                    data-aos="fade-up"
                    data-aos-delay={500}
                    className='text-white/80'
                >
                    Avid learner with a knack for creating impactful projects.
                </li>
                <li
                    data-aos="fade-up"
                    data-aos-delay={600}
                    className='text-white/80'
                >
                    Always exploring opportunities to grow as a developer.
                </li>
            </ul>

            <p
                data-aos="fade-up-left"
                data-aos-delay={800}
                className='text-white/80'
            >
                Feel free to connect with me if you’re interested in collaborating or just want to say hi. Let’s build something awesome together! 😊
            </p>
        </div>
    )
}

export default AboutText;