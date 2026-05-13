import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
    reactjs,
    nodejs,
    threejs,
    typescript,
    docker,
    backend,
} from "../assets";

const skills = [
    {
        icon: reactjs,
        title: "React\nDeveloper",
        floatDelay: 0,
    },
    {
        icon: typescript,
        title: "TypeScript\nDeveloper",
        floatDelay: 0.5,
    },
    {
        icon: nodejs,
        title: "Backend\nDeveloper",
        floatDelay: 1,
    },
    {
        icon: threejs,
        title: "Interactive\nDeveloper",
        floatDelay: 1.5,
    },
    {
        icon: docker,
        title: "DevOps\nEngineer",
        floatDelay: 2,
    },
    {
        icon: backend,
        title: "AI Engineer\n(LLM Integration)",
        floatDelay: 2.5,
    },
];

const SkillCard = ({ icon, title, floatDelay, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="w-[calc(50%-10px)] xs:w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)]"
        >
            <Tilt
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#D4A053"
                glareBorderRadius="28px"
                perspective={800}
                scale={1.05}
                transitionSpeed={1500}
            >
                <div className="relative bg-black-100 border border-white/5 rounded-[20px] sm:rounded-[28px] px-4 sm:px-6 py-8 sm:py-10 flex flex-col items-center justify-center gap-4 sm:gap-6 overflow-hidden hover:border-[#D4A053]/20 transition-colors duration-500 group">
                    {/* Subtle radial glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[20px] sm:rounded-[28px]" />

                    {/* Floating Icon */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: floatDelay,
                        }}
                        className="relative z-10"
                    >
                        <img
                            src={icon}
                            alt={title}
                            className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_15px_rgba(145,94,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(145,94,255,0.4)] transition-all duration-500"
                        />
                    </motion.div>

                    {/* Title */}
                    <p className="relative z-10 text-white text-[12px] xs:text-[13px] sm:text-[15px] font-semibold text-center whitespace-pre-line leading-tight">
                        {title}
                    </p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <div className="text-center mb-8 sm:mb-12">
                <motion.div
                    variants={textVariant()}
                    className="inline-flex items-center gap-2 bg-black-100 border border-white/10 rounded-full px-4 sm:px-5 py-2 mb-4 sm:mb-5"
                >
                    <span className="text-[14px] sm:text-[16px]">🤝</span>
                    <span className="text-secondary text-[11px] sm:text-[13px] font-medium">
                        What I Bring to the Table
                    </span>
                </motion.div>

                <motion.h2
                    variants={textVariant(0.2)}
                    className="text-white font-black text-[24px] xs:text-[28px] sm:text-[40px] md:text-[48px] leading-tight"
                >
                    How I Can Contribute
                    <br />
                    &amp; My Key Skills
                </motion.h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                {skills.map((skill, index) => (
                    <SkillCard key={skill.title} index={index} {...skill} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
