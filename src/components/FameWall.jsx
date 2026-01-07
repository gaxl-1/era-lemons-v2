import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaImage, FaHeart } from 'react-icons/fa';

const FameWall = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        {
            id: 1,
            type: 'clip',
            title: "MLG Water Bucket Save",
            author: "StevePro",
            likes: 125,
            thumbnail: "/assets/events/minecraft.jpg", // Placeholder
            videoUrl: "#"
        },
        {
            id: 2,
            type: 'meme',
            title: "Cuando el admin entra al chat",
            author: "TrollFace",
            likes: 342,
            thumbnail: "/assets/events/among-us.jpg", // Placeholder
            image: true
        },
        {
            id: 3,
            type: 'clip',
            title: "Impostor 200 IQ Play",
            author: "RedSus",
            likes: 89,
            thumbnail: "/assets/events/among-us.jpg", // Placeholder
            videoUrl: "#"
        },
        {
            id: 4,
            type: 'meme',
            title: "Mi casa en Minecraft día 1",
            author: "NoobMaster",
            likes: 56,
            thumbnail: "/assets/events/minecraft.jpg", // Placeholder
            image: true
        }
    ];

    const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

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
                        Los mejores momentos, clips épicos y memes legendarios de la comunidad.
                    </p>

                    {/* Filters */}
                    <div className="flex justify-center gap-4">
                        {['all', 'clip', 'meme'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === f
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {f === 'all' ? 'Todo' : f === 'clip' ? 'Clips' : 'Memes'}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
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

                                {/* Type Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                    {item.type === 'clip' ? <FaPlay size={12} /> : <FaImage size={12} />}
                                </div>

                                {/* Content Info */}
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <h3 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <span>@{item.author}</span>
                                        <div className="flex items-center gap-1 text-red-400">
                                            <FaHeart /> {item.likes}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FameWall;
