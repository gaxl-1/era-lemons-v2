import React from 'react';
import { motion } from 'framer-motion';

const GameCard = ({ name, icon: Icon, color, description, image }) => {
    return (
        <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group h-80 rounded-2xl overflow-hidden bg-dark-card border border-white/5"
        >
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${color} opacity-20`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
            </div>

            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <motion.div
                    className="mb-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-4xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20"
                >
                    {Icon && <Icon />}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{description}</p>

                <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
                />
            </div>
        </motion.div>
    );
};

export default GameCard;
