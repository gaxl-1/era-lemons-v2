import React from 'react';
import { FaDiscord, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 tracking-wider">ERA <span className="text-primary">LEMONS</span></h2>
                        <p className="text-gray-400 max-w-sm mb-6">
                            La comunidad gaming definitiva donde los jugadores se unen. Únete a nuestro servidor de Discord y sé parte de la familia.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.tiktok.com/@lmns154?_r=1&_t=ZS-92mQQvjgSum" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-tiktok-cyan hover:text-black transition-colors">
                                <FaTiktok size={20} />
                            </a>
                            <a href="https://discord.gg/EMVErEEa" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-discord hover:text-white transition-colors">
                                <FaDiscord size={20} />
                            </a>
                            <a href="#twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-400 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#youtube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#games" className="text-gray-400 hover:text-primary transition-colors">Juegos</a></li>
                            <li><a href="#events" className="text-gray-400 hover:text-primary transition-colors">Eventos</a></li>
                            <li><a href="#ranking" className="text-gray-400 hover:text-primary transition-colors">Ranking</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Comunidad</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Reglas</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Soporte</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Ser Moderador</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 ERA LEMONS. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
