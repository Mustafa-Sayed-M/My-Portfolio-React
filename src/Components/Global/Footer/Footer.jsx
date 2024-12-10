import React from 'react';
import SocialProfiles from '../../Shared/SocialProfiles';

const fastLinks = [
    { href: 'about', text: 'About' },
    { href: 'projects', text: 'Projects' },
    { href: 'services', text: 'Services' },
    { href: 'skills', text: 'Skills' },
];

const contactLinks = [
    { href: 'mailto:mustafacoder9@gmail.com', fontAwesomeIconClass: 'envelope', text: 'mustafacoder9@gmail.com', title: 'Email' },
    { href: 'https://wa.link/ub6txm', fontAwesomeIconClass: 'phone', text: '01122124968', title: 'Whatsapp' },
];

function Footer() {
    return (
        <footer className='bg-primary-color/10 py-10'>
            <div className='container space-y-5'>
                {/* Fast Links */}
                <ul className='flex items-center justify-center gap-2'>
                    {fastLinks.map((link, index) => <li key={index}>
                        <a href={`#${link.href}-section`} className='text-white/80 sm:hover:text-primary-color transition'>{link.text}</a>
                    </li>)}
                </ul>
                {/* Social Profile */}
                <SocialProfiles />
                {/* Contact Info */}
                <ul className='flex max-sm:flex-col items-center justify-center gap-2'>
                    {contactLinks.map((link, index) => <li key={index}>
                        <a title={`${link.title} Message`} href={link.href} className='text-white/80 sm:hover:text-primary-color transition flex items-center gap-2' target='_blank' rel="noreferrer">
                            <i className={`fa-solid fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                            <span>{link.text}</span>
                        </a>
                    </li>)}
                </ul>
                {/* Split */}
                <hr className='border-white/20' />
                {/* Copyright */}
                <p className='text-center font-medium text-white/80'>All Rights Reserved - <a title='Go To Github Profile' href='https://github.com/Mustafa-Sayed-M' target='_blank' className='underline sm:hover:text-primary-color transition' rel="noreferrer">@mustafa.sayed</a> - Front End Developer</p>
            </div>
        </footer>
    )
}

export default Footer;