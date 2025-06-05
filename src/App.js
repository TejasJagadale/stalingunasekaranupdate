import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Publication from "./components/publication/Publication.jsx";
import Meeting from "./components/meeting/Meeting.jsx";
import Essay from "./components/essay/Essay.jsx";
import Urai from "./components/urai/Urai.jsx";
import Interview from "./components/interviews/Interview.jsx";
import News from "./components/news/News.jsx";
import Contact from "./components/contact/Contact.jsx";
import Subhome from "./components/subhome/Subhome.jsx";
import ScrollToTopButton from "./components/scrolltotop/scrollto.jsx";
import ScrollToTop from "./components/autoscroll/Autoscroll.jsx";
import Velinadu from "./components/velinadu/Velinadu.jsx";
import WhatsAppButton from "./components/whatsapp/Whatsapp.jsx";

// Replace the pageVariants with this simpler version
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  duration: 0.3
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/publication"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Publication />
            </motion.div>
          }
        />
        <Route
          path="/meeting"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Meeting />
            </motion.div>
          }
        />
        <Route
          path="/essay"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Essay />
            </motion.div>
          }
        />
        <Route
          path="/urai"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Urai />
            </motion.div>
          }
        />
        <Route
          path="/interview"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Interview />
            </motion.div>
          }
        />
        <Route
          path="/foreigninterview"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Velinadu />
            </motion.div>
          }
        />
        <Route
          path="/news"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <News />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/subhome"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Subhome />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton/>
      </div>
    </Router>
  );
}

export default App;
