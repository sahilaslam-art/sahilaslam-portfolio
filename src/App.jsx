import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Works,
    StarsCanvas,
} from "./components";
import Features from "./components/Features";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="relative">
                <div 
                    className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-70"
                    style={{ filter: "sepia(1) hue-rotate(-15deg) saturate(2.5)" }}
                ></div>
                <div className="relative z-10">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Works />
            <Features />
            <Experience />
            <Skills />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
            <Footer />
        </div>
    );
};

export default App;
