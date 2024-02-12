import React, { useState, useEffect, useRef } from 'react';
import Navibar from './Navibar';
import { FaCode } from 'react-icons/fa6';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';

function Header({ isHomePage }) {
    const [activeSection, setActiveSection] = useState('homesection');
    const observerDown = useRef(null);
    const observerUp = useRef(null);
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
        observerDown.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.9 }
        );

        observerUp.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0 }
        );

        // Observe each section
        document.querySelectorAll('section').forEach((section) => {
            observerDown.current.observe(section);
            observerUp.current.observe(section);
        });

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            observerDown.current.disconnect();
            observerUp.current.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll.current) {
            // Scrolling down
            observerUp.current.disconnect();
            observerDown.current.observe(document.documentElement);
        } else {
            // Scrolling up
            observerDown.current.disconnect();
            observerUp.current.observe(document.documentElement);
        }

        lastScroll.current = currentScroll;
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
