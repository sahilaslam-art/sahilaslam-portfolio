import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            variants={fadeIn("left", "spring", index * 0.3, 0.75)}
            className="flex-1"
        >
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[22px]">{experience.title}</h3>
            <p className="text-secondary text-[12px] sm:text-[13px] italic mt-3">Responsibilities</p>
            <ul className="mt-3 list-disc ml-5 space-y-2">
                {experience.points.map((point, i) => (
                    <li
                        key={`exp-point-${i}`}
                        className="text-white-100 text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px]"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>What I have done so far</p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Work Experience<span className="text-[#D4A053]">.</span>
                </h2>
            </motion.div>

            {/* Timeline */}
            <div className="mt-10 sm:mt-16 relative pl-10 sm:pl-12">
                {/* Left line */}
                <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-[2px] bg-white/10" />

                {experiences.map((experience, index) => {
                    return (
                        <div
                            key={index}
                            className="relative mb-12 sm:mb-16 last:mb-0"
                        >
                            {/* Simple bullet/dot on left line */}
                            <div className="absolute -left-10 sm:-left-12 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#D4A053] bg-primary flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#D4A053]" />
                            </div>

                            {/* Experience card */}
                            <div className="flex-1">
                                <ExperienceCard experience={experience} index={index} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(ExperienceTimeline, "work");
