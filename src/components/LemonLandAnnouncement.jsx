import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaGamepad, FaCube } from 'react-icons/fa';

const LemonLandAnnouncement = () => {
    return (
        <section className="relative py-24 overflow-hidden" id="lemonland">

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-dark-card/50 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row shadow-[0_0_50px_rgba(0,0,0,0.3)]">

                    {/* Image Side - Ajustada para visibilidad total de la imagen original */}
                    <div className="lg:w-1/2 relative flex items-center justify-center p-4 bg-transparent">
                        <div className="w-full h-full relative overflow-hidden flex items-center">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                src="/assets/lemonland_original.jpg"
                                alt="LemonLand Minecraft"
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block bg-white/5 border border-white/10 text-primary-light text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
                                Survival Vainilla Java / Bedrock
                            </span>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">
                                ¡Bienvenido a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">LEMONLAND</span>!
                            </h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                                La gran inauguración está cerca. Prepárate para una experiencia pura en nuestro servidor multiversión.
                                <span className="text-white font-bold"> Abejas, perritos y pura diversión.</span>
                            </p>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                        <FaCube size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Multiversión</h4>
                                        <p className="text-gray-500 text-xs text-nowrap">Java & Bedrock</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                                        <FaGamepad size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Inauguración</h4>
                                        <p className="text-gray-500 text-xs text-nowrap">21 de Enero</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <motion.a
                                    href="https://discord.gg/SFg75PJq"
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-white text-black font-black px-8 py-4 rounded-xl text-center flex items-center justify-center gap-3 cursor-pointer shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                                >
                                    <FaDiscord size={20} />
                                    IP: DISPONIBLE EN DISCORD
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LemonLandAnnouncement;
