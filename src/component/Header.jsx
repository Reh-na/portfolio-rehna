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
    const exitingSection = useRef(null); // Add a ref to track exiting section

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
            // Check if section is the currently exiting section, if yes return different color
            if (section === exitingSection.current) {
                return '#ff0000'; // Change this to the color you want for exiting section
            }
            return '#00264d'; // Default color for project page icons
        }
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                        setActiveSection(entry.target.id);
                    } else if (!entry.isIntersecting && entry.boundingClientRect.y < 0) {
                        // If section is not intersecting and top of the boundingClientRect is less than 0, it's exiting
                        exitingSection.current = entry.target.id;
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
        const direction = currentScroll > lastScroll.current ? 'down' : 'up';

        const sections = document.querySelectorAll('section');
        let foundActive = false;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();

            if (direction === 'down' && rect.bottom >= window.innerHeight / 2) {
                setActiveSection(section.id);
                foundActive = true;
                break;
            } else if (direction === 'up' && rect.top <= window.innerHeight / 2) {
                setActiveSection(section.id);
                foundActive = true;
                break;
            }
        }

        if (!foundActive) {
            setActiveSection(lastActiveSection.current);
        }

        lastScroll.current = currentScroll;

        // Change icon color when scrolled to the top
        if (currentScroll === 0) {
            const iconColor = getColor(activeSection);
            document.getElementById('iconav').style.color = iconColor;
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
