import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Sobre <span className="text-gradient">ERA LEMONS</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Una comunidad gaming construida sobre amistad, diversión y competencia sana.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card border border-white/10 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">🍋 Nuestra Historia</h2>
                        <p className="text-gray-300 leading-relaxed">
                            ERA LEMONS nació como un pequeño grupo de amigos que compartían la pasión por los videojuegos.
                            Con el tiempo, crecimos hasta convertirnos en una comunidad vibrante donde jugadores de todos los niveles
                            encuentran su lugar. Desde partidas casuales hasta torneos competitivos, aquí todos son bienvenidos.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card border border-white/10 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-4">🎮 Lo Que Nos Define</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Diversidad de Juegos</h3>
                                <p className="text-gray-400">
                                    Minecraft, Among Us, Roblox, Call of Duty Mobile y más.
                                    Siempre hay algo para todos.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Ambiente Positivo</h3>
                                <p className="text-gray-400">
                                    Cero toxicidad. Jugamos para divertirnos y crear buenos recuerdos.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Eventos Regulares</h3>
                                <p className="text-gray-400">
                                    Torneos, movie nights, y eventos temáticos cada semana.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Comunidad Activa</h3>
                                <p className="text-gray-400">
                                    Discord siempre vivo con miembros conectados 24/7.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-card border border-white/10 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">💡 Valores</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">🤝</span>
                                <div>
                                    <strong className="text-white">Respeto:</strong> Tratamos a todos con dignidad, sin importar su nivel de habilidad.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <strong className="text-white">Inclusión:</strong> Aquí no hay discriminación. Gamers de todas las edades y géneros son bienvenidos.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">🔥</span>
                                <div>
                                    <strong className="text-white">Pasión:</strong> Jugamos con el corazón, siempre dando lo mejor.
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para unirte?</h2>
                        <p className="text-gray-300 mb-6">
                            No importa si eres un pro o recién empiezas. En ERA LEMONS, lo importante es divertirse.
                        </p>
                        <a
                            href="https://discord.gg/EMVErEEa"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-discord hover:bg-discord/90 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105"
                        >
                            Únete a Discord
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
