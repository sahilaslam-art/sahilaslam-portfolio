import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const rotatingWords = ["Ideas", "Designs", "Code", "Visions", "Concepts"];

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen mx-auto flex flex-col">
            {/* Main Hero Content */}
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pt-[100px] sm:pt-[120px] lg:pt-[140px] px-4 xs:px-6 sm:px-16 flex-1">
                {/* Left Side — Text Content */}
                <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
                    <h1 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight">
                        Shaping{" "}
                        <span className="inline-flex items-center gap-1 sm:gap-2">
                            <span className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-full bg-[#D4A053]/20 border border-[#D4A053]/30 flex items-center justify-center text-[16px] sm:text-[20px]">
                                🎯
                            </span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={rotatingWords[wordIndex]}
                                    initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="text-[#D4A053] inline-block"
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <br />
                        into Real Projects
                        <br className="hidden xs:block" />
                        <span className="xs:hidden"> </span>
                        that Deliver Results
                    </h1>

                    <p className="mt-4 sm:mt-6 text-secondary text-[14px] sm:text-[16px] md:text-[18px] max-w-lg leading-[24px] sm:leading-[28px] mx-auto lg:mx-0">
                        Hi, I&apos;m Sahil Aslam, a full-stack developer
                        <br className="hidden sm:block" /> with a passion for building
                        beautiful &amp; functional web experiences.
                    </p>

                    <a
                        href="#about"
                        className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-white text-black font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 group"
                    >
                        See My Work
                        <svg
                            className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>

                {/* Right Side — 3D Computer */}
                <div className="flex-1 w-full max-w-[500px] lg:max-w-[600px] h-[250px] xs:h-[300px] sm:h-[400px] lg:h-[500px] relative">
                    <ComputersCanvas />
                </div>
            </div>

            {/* Highlights Bar */}
            <div className="max-w-7xl mx-auto w-full px-4 xs:px-6 sm:px-16 pb-6 sm:pb-10 mt-6 sm:mt-8 lg:mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {[
                        { icon: "⚡", label: "Full-Stack Dev", sub: "React · Node · MongoDB" },
                        { icon: "🎨", label: "3D & Motion", sub: "Three.js · Framer Motion" },
                        { icon: "🧹", label: "Clean Code", sub: "Readable · Scalable · Fast" },
                        { icon: "📚", label: "Always Learning", sub: "Growing every single day" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                            className="bg-black-100 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 hover:border-[#D4A053]/30 transition-all duration-300"
                        >
                            <span className="text-[24px] sm:text-[28px]">{item.icon}</span>
                            <h3 className="text-white font-semibold text-[13px] xs:text-[14px] sm:text-[16px] mt-2 leading-tight">
                                {item.label}
                            </h3>
                            <p className="text-secondary text-[10px] xs:text-[11px] sm:text-[12px] mt-1 leading-snug">
                                {item.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating squares decoration — hidden on small mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 border border-white/10 rounded-sm"
                        style={{
                            left: `${15 + i * 18}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.25, 0.1],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
