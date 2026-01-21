import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaDiscord } from 'react-icons/fa';

const EventCalendar = () => {
    const events = [
        {
            id: 1,
            title: "🍋 Inauguración LemonLand",
            date: "Miércoles 21 de Enero",
            description: "¡Gran apertura de nuestro servidor Minecraft! Únete a la aventura en Java y Bedrock. IP: Disponible en Discord",
            tag: "Evento Especial",
            color: "border-primary text-primary",
            bg: "bg-primary/10",
            day: "21"
        }
    ];

    return (
        <section className="py-20 relative z-10" id="calendar">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">CALENDARIO DE <span className="text-gradient">EVENTOS</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        No te pierdas ninguna actividad. Horarios en hora de México (CDMX).
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                    <div className={`p-6 rounded-2xl bg-dark-card border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors`}>
                                        <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold uppercase rounded-bl-xl border-l border-b ${event.color} ${event.bg}`}>
                                            {event.tag}
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-400 mb-2 text-sm">
                                            <FaClock /> {event.date}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-400 mb-4">
                                            {event.description}
                                        </p>

                                        <a href="https://discord.gg/SFg75PJq" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-discord transition-colors">
                                            <FaDiscord /> Confirmar Asistencia
                                        </a>
                                    </div>
                                </div>

                                {/* Center Dot/Date */}
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-dark-bg border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                    <span className="text-xs font-bold text-white">{event.day}</span>
                                </div>

                                {/* Spacer for Timeline Balance */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventCalendar;
