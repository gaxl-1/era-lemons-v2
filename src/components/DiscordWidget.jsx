import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DiscordWidget = () => {
    const [stats, setStats] = useState({ presence_count: 0 });
    const [loading, setLoading] = useState(true);
    const guildId = '1315148920111894548';

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
                const data = await response.json();
                setStats(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Discord stats:", error);
                setLoading(false);
            }
        };

        fetchStats();
        // Refresh every 60 seconds
        const interval = setInterval(fetchStats, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap"
        >
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-400">
                <span className="text-white font-bold text-sm">{stats.presence_count}</span> Online en Discord
            </span>
        </motion.div>
    );
};

export default DiscordWidget;
