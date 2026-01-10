import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './layouts/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load route components for better performance
const Hero3D = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Staff = lazy(() => import('./components/Staff'));
const GamesSection = lazy(() => import('./components/GamesSection'));
const FameWall = lazy(() => import('./components/FameWall'));
const EventCalendar = lazy(() => import('./components/EventCalendar'));
const Gallery = lazy(() => import('./components/Gallery'));

// Loading fallback component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Cargando...</p>
        </div>
    </div>
);

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
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero3D />
                                <GamesSection />
                                <FameWall />
                            </>
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/games" element={<GamesSection />} />
                        <Route path="/fame" element={<FameWall />} />
                        <Route path="/calendar" element={<EventCalendar />} />
                        <Route path="/events" element={<Gallery />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
