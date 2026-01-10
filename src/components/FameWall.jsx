import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaImage, FaHeart } from 'react-icons/fa';

const FameWall = () => {
    const items = [
        {
            id: 1,
            type: 'clip',
            title: "Guerra de clanes",
            author: "Los duros",
            likes: 125,
            thumbnail: "/assets/events/event1.webp",
            videoUrl: "#"
        },
        {
            id: 2,
            type: 'meme',
            title: "Atrapame si puedes",
            author: "Slayer",
            likes: 342,
            thumbnail: "/assets/events/event2.webp",
            image: true
        },
        {
            id: 3,
            type: 'clip',
            title: "Halloween Especial",
            author: "Fotito",
            likes: 89,
            thumbnail: "/assets/events/event3.webp",
            videoUrl: "#"
        },
        {
            id: 4,
            type: 'meme',
            title: "Squid Games Roblox",
            author: "Los mejores",
            likes: 256,
            thumbnail: "/assets/events/event5.webp",
            image: true
        }
    ];

    return (
        <section className="py-20 relative z-10 bg-dark-bg/30" id="fame">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">MURO DE LA <span className="text-gradient">FAMA</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Los mejores momentosde la comunidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {items.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            key={item.id}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-card border border-white/10 cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Content Info */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <span>{item.author}</span>
                                    <div className="flex items-center gap-1 text-red-400">
                                        <FaHeart /> {item.likes}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FameWall;
