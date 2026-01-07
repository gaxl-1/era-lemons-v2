import React from 'react';
import { motion } from 'framer-motion';
// Removing broken simple-icons imports
// import { SiRoblox, SiMinecraft, SiCallofduty, SiDiscord } from 'react-icons/si';
import { FaUserAstronaut, FaGamepad } from 'react-icons/fa';

import GameCard from './GameCard';

// Custom Icon Components using our assets
const MinecraftIcon = () => <img src="/assets/games/minecraft.png" alt="Minecraft" className="w-full h-full object-contain" />;
const RobloxIcon = () => <img src="/assets/games/roblox.png" alt="Roblox" className="w-full h-full object-contain" />;
const AmongUsIcon = () => <img src="/assets/games/among-us.png" alt="Among Us" className="w-full h-full object-contain" />;
// For COD we might not have a png icon yet, use generic or generates
const CodIcon = () => <FaGamepad />;

const GamesSection = () => {
    const games = [
        {
            name: "Minecraft",
            description: "Construye, explora y sobrevive en nuestro servidor SMP dedicado.",
            icon: MinecraftIcon,
            color: "from-green-600 to-green-400",
            image: "/assets/events/minecraft.jpg"
        },
        {
            name: "Roblox",
            description: "Únete para el Juego del Calamar, obbys y minijuegos infinitos cada semana.",
            icon: RobloxIcon,
            color: "from-blue-600 to-blue-400",
            image: "/assets/events/squid-game.jpg" // Using event image as bg if game bg missing
        },
        {
            name: "Among Us",
            description: "¿Quién es el impostor? No confíes en nadie en nuestras sesiones intensas.",
            icon: AmongUsIcon,
            color: "from-red-600 to-red-400",
            image: "/assets/events/among-us.jpg"
        },
        {
            name: "COD Mobile",
            description: "Partidas competitivas y escuadrones de battle royale.",
            icon: CodIcon,
            color: "from-yellow-600 to-yellow-400",
            image: "/assets/games/cod-mobile.jpg"
        }
    ];

    return (
        <section className="py-20 relative z-10" id="games">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">JUEGOS</span> QUE JUGAMOS</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Desde mundos de bloques hasta shooters tácticos, lo dominamos todo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <GameCard key={index} {...game} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GamesSection;
