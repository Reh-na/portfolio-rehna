import React, { useState, useEffect, useRef } from 'react';
import Navibar from './Navibar';
import { FaCode } from 'react-icons/fa6';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';

function Header({ isHomePage }) {
    const [activeSection, setActiveSection] = useState('homesection');
    const observer = useRef(null);
    const lastActiveSection = useRef('homesection');
    const lastScroll = useRef(0);

    const getColor = (section) => {
        
        if (isHomePage) {
            switch (section) {
                case 'homesection':
                    return '#ffd11a';
                case 'section2':
                    return '#00264d';
                case 'section3':
                    return '#ffd11a';
                default:
                    return '#00264d';
            }
        } else {
            return ''; 
        }
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.9 }
        );

        // Observe each section
        document.querySelectorAll('section').forEach((section) => {
            observer.current.observe(section);
        });

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.current.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll.current) {
            // Scrolling down
            lastScroll.current = currentScroll;
            lastActiveSection.current = activeSection;
        } else {
            // Scrolling up
            const sections = document.querySelectorAll('section');
            let foundActive = false;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section.id);
                    foundActive = true;
                    break;
                }
            }
            if (!foundActive) {
                setActiveSection(lastActiveSection.current);
            }
        }
    };

    useEffect(() => {
        const iconColor = getColor(activeSection);
        document.getElementById('iconav').style.color = iconColor;
    }, [activeSection]);

    return (
        <div className={`flex items-center justify-between w-full bg-transparent h-20 ${isHomePage ? 'iconColor' : '#00264d'}`}>
            <div className='w-1/2 flex justify-start items-center'>
                <Link to={'/'} id='iconav' className='clrhead p-10 no-underline'>
                    <FaCode />
                </Link>
            </div>
            <div id='navico' className='headclr flex justify-end mt-20'>
                <Navibar />
            </div>
        </div>
    );
}

export default Header;
