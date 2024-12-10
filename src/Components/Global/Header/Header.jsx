import React from 'react';
import SocialProfiles from '../../Shared/SocialProfiles';

const linksData = [
    {
        href: 'about',
        text: 'About'
    },
    {
        href: 'projects',
        text: 'Projects'
    },
    {
        href: 'services',
        text: 'Services'
    },
    {
        href: 'skills',
        text: 'Skills'
    }
];

function Header() {
    return (
        <header className='top-0 left-0 z-50 relative backdrop-blur-sm'>
            <div className='container min-h-[60px] flex max-sm:flex-col items-center justify-between gap-3 py-3'>
                {/* Social Profiles */}
                <SocialProfiles />
                {/* Nav */}
                <nav className='bg-gradient-to-tr from-[#04071D] to-[#0C0E23] border border-border-color rounded-xl' data-aos='fade-down'>
                    <ul className='flex items-center gap-1'>
                        {
                            linksData.map((link, index) => <li key={index}>
                                <a
                                    href={`#${link.href}-section`}
                                    className='font-medium block py-4 px-4 sm:hover:text-primary-color transition'
                                >
                                    {link.text}
                                </a>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;