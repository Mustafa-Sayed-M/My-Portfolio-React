import React from 'react';

const socialProfilesData = [
    {
        "href": "https://www.facebook.com/mustafacoder9/",
        "fontAwesomeIconClass": "facebook"
    },
    {
        "href": "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bs0XwN9N6TRGcomXhGE1Wxg%3D%3D",
        "fontAwesomeIconClass": "linkedin"
    },
    {
        "href": "https://www.instagram.com/must3fa_9/",
        "fontAwesomeIconClass": "instagram"
    },
    {
        "href": "https://github.com/Mustafa-Sayed-M",
        "fontAwesomeIconClass": "github"
    }
];

function SocialProfiles() {
    return (
        <ul className='flex items-center justify-center gap-2'>
            {socialProfilesData.map((link, index) => <li key={index} data-aos='fade-left' data-aos-delay={50 * index}>
                <a title={`Go To ${link.fontAwesomeIconClass} Profile`} href={link.href} className='text-white/80 sm:hover:text-primary-color transition text-2xl' target='_blank' rel="noreferrer">
                    <i className={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                </a>
            </li>)}
        </ul>
    )
}

export default SocialProfiles;