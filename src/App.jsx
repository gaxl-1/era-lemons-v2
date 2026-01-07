import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './layouts/Layout';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero';
import Staff from './components/Staff';
import GamesSection from './components/GamesSection';
import FameWall from './components/FameWall';
import EventCalendar from './components/EventCalendar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero3D />
                            <GamesSection />
                            <FameWall />
                            {/* Short preview of games on home */}
                        </>
                    } />
                    <Route path="/about" element={<Hero3D />} /> {/* Reusing Hero as about for now */}
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/games" element={<GamesSection />} />
                    <Route path="/fame" element={<FameWall />} />
                    <Route path="/calendar" element={<EventCalendar />} />
                    <Route path="/events" element={<Gallery />} />
                </Routes>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
