import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    const images = [
        { id: 1, src: '/assets/events/squid-game.jpg', title: 'Squid Game Event', date: 'Oct 2025' },
        { id: 2, src: '/assets/events/minecraft.jpg', title: 'SMP Launch', date: 'Nov 2025' },
        { id: 3, src: '/assets/events/among-us.jpg', title: 'Among Us Night', date: 'Dec 2025' },
    ];

    return (
        <section className="py-20 bg-dark-bg/50" id="events">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">MOMENTOS <span className="text-gradient">ÉPICOS</span></h2>
                    <p className="text-gray-400">Revive la emoción de nuestros eventos pasados.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <motion.div
                            layoutId={`card-${img.id}`}
                            key={img.id}
                            onClick={() => setSelectedId(img.id)}
                            className="cursor-pointer relative group rounded-xl overflow-hidden aspect-video border border-white/10"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-bold text-lg">Ver Evento</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="relative w-full max-w-4xl bg-dark-card rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.button
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white z-20 hover:bg-primary transition-colors"
                                    onClick={() => setSelectedId(null)}
                                >
                                    <HiX size={24} />
                                </motion.button>

                                {images.find(i => i.id === selectedId) && (
                                    <>
                                        <img
                                            src={images.find(i => i.id === selectedId).src}
                                            alt="Selected"
                                            className="w-full max-h-[70vh] object-contain bg-black"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{images.find(i => i.id === selectedId).title}</h3>
                                            <p className="text-primary">{images.find(i => i.id === selectedId).date}</p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
