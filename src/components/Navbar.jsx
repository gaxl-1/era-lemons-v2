import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaTiktok } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import DiscordWidget from './DiscordWidget';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/about' },
        { name: 'Staff', path: '/staff' },
        { name: 'Calendario', path: '/calendar' },
        { name: 'Eventos', path: '/events' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5"
                        >
                            <img className="w-full h-full rounded-full object-cover" src="/assets/logo.webp" alt="Logo" />
                        </motion.div>
                        <span className="font-bold text-xl tracking-wider text-white group-hover:text-primary transition-colors">ERA LEMONS</span>
                    </Link>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${isActive(link.path) ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* Widget Integration */}
                        <div className="hidden xl:block">
                            <DiscordWidget />
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://discord.gg/EMVErEEa"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-discord hover:bg-discord/90 text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-sm shadow-lg shadow-discord/20 transition-all whitespace-nowrap min-w-max"
                        >
                            <FaDiscord size={18} /> <span>Unirse a Discord</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            href="https://www.tiktok.com/@lmns154?_r=1&_t=ZS-92mQQvjgSum"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaTiktok size={24} />
                        </motion.a>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-dark-bg/95 backdrop-blur-md border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <DiscordWidget />
                                <a
                                    href="https://discord.gg/EMVErEEa"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-discord text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-bold"
                                >
                                    <FaDiscord /> Unirse a Discord
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
