import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaShieldAlt, FaHammer } from 'react-icons/fa';

const StaffCard = ({ name, role, color, icon: Icon, image }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`relative overflow-hidden rounded-xl bg-dark-card border border-white/5 p-6 flex flex-col items-center gap-4 group`}
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent">
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover bg-dark-bg" />
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-dark-card flex items-center justify-center border border-white/10 text-white ${color.replace('from-', 'text-').split(' ')[0]}`}>
                <Icon size={14} />
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <span className={`text-sm px-3 py-1 rounded-full bg-white/5 border border-white/5 uppercase tracking-wider font-semibold ${color.replace('from-', 'text-').split(' ')[0]}`}>
                {role}
            </span>
        </div>
    </motion.div>
);

const Staff = () => {
    const staffMembers = [
        {
            name: "GaelDev",
            role: "Owner",
            color: "from-yellow-500 to-orange-500",
            icon: FaCrown,
            image: "/assets/logo.jpg" // Placeholder until user provides avatar
        },
        {
            name: "Admin 1",
            role: "Admin",
            color: "from-red-500 to-rose-500",
            icon: FaShieldAlt,
            image: "/assets/logo.jpg"
        },
        {
            name: "Mod 1",
            role: "Moderator",
            color: "from-blue-500 to-cyan-500",
            icon: FaHammer,
            image: "/assets/logo.jpg"
        }
    ];

    return (
        <section className="py-20 relative z-10" id="staff">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">NUESTRO <span className="text-gradient">STAFF</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        El equipo que hace posible que la comunidad funcione día a día.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {staffMembers.map((member, index) => (
                        <StaffCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
