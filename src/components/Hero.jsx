import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

const Hero3D = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    return (
        <section
            onMouseMove={onMouseMove}
            className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
            id="home"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative z-10 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-4xl mx-4 flex flex-col md:flex-row items-center gap-10"
            >
                {/* Floating Logo */}
                <motion.div
                    style={{ transform: "translateZ(50px)" }}
                    className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse-glow" />
                    <img
                        src="/assets/logo.webp"
                        alt="ERA LEMONS Logo"
                        className="w-full h-full object-cover rounded-3xl border-4 border-white/20 relative z-10 shadow-2xl"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        style={{ transform: "translateZ(30px)" }}
                        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                    >
                        <span className="text-white block">ERA</span>
                        <span className="text-gradient">LEMONS</span>
                    </motion.h1>

                    <motion.p
                        style={{ transform: "translateZ(20px)" }}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
                    >
                        La comunidad gaming definitiva. Únete a nosotros para eventos semanales, torneos y diversión sin fin en Minecraft, Roblox y más.
                    </motion.p>

                    <motion.div
                        style={{ transform: "translateZ(40px)" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://discord.gg/Jy5n6Nd6"
                            target="_blank"
                            className="bg-discord hover:bg-discord-dark text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-discord/30 transition-colors"
                        >
                            <FaDiscord size={28} />
                            UNIRSE A DISCORD
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero3D;
