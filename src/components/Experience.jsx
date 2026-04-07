import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences, testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            variants={fadeIn("left", "spring", index * 0.3, 0.75)}
            className="flex-1"
        >
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[22px]">{experience.title}</h3>
            <div className="flex items-center gap-2 mt-2">
                <div
                    className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: experience.iconBg }}
                />
                <p className="text-secondary text-[12px] sm:text-[14px]">{experience.date}</p>
            </div>
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

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.3, 0.75)}
            className="bg-black-100 border border-white/5 rounded-2xl p-5 sm:p-6 w-full max-w-[340px] hover:border-[#D4A053]/20 transition-all duration-300"
        >
            {/* Stars */}
            <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[13px] sm:text-[14px]">
                        ★
                    </span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-secondary text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px]">
                {testimonial.testimonial}
            </p>

            {/* Company / Person */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                    <p className="text-white font-semibold text-[13px] sm:text-[14px] truncate">
                        {testimonial.name}
                    </p>
                    <p className="text-secondary text-[10px] sm:text-[11px] truncate">
                        {testimonial.designation}, {testimonial.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const ExperienceTimeline = () => {
    const itemCount = Math.max(experiences.length, testimonials.length);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>What I have done so far</p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Work Experience<span className="text-[#D4A053]">.</span>
                </h2>
            </motion.div>

            {/* Timeline */}
            <div className="mt-10 sm:mt-16 relative">
                {/* Center line — desktop only */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden lg:block" />

                {/* Mobile left line */}
                <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 lg:hidden" />

                {Array.from({ length: itemCount }).map((_, index) => {
                    const experience = experiences[index];
                    const testimonial = testimonials[index];

                    return (
                        <div
                            key={index}
                            className="relative mb-12 sm:mb-16 last:mb-0"
                        >
                            {/* Desktop Layout — side by side */}
                            <div className="hidden lg:flex items-center gap-0">
                                {/* Left — Testimonial */}
                                <div className="w-1/2 flex justify-end pr-12">
                                    {testimonial ? (
                                        <TestimonialCard testimonial={testimonial} index={index} />
                                    ) : (
                                        <div className="max-w-[340px] w-full" />
                                    )}
                                </div>

                                {/* Center — Icon */}
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border-2 border-white/10 bg-primary flex items-center justify-center">
                                    {experience && (
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-7 h-7 object-contain"
                                        />
                                    )}
                                </div>

                                {/* Right — Experience */}
                                <div className="w-1/2 pl-12">
                                    {experience ? (
                                        <ExperienceCard experience={experience} index={index} />
                                    ) : (
                                        <div />
                                    )}
                                </div>
                            </div>

                            {/* Mobile Layout — stacked with left line */}
                            <div className="lg:hidden pl-10 sm:pl-12">
                                {/* Mobile icon on left line */}
                                <div className="absolute left-0 z-10 w-9 h-9 rounded-full border-2 border-white/10 bg-primary flex items-center justify-center">
                                    {experience && (
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-5 h-5 object-contain"
                                        />
                                    )}
                                </div>

                                {/* Experience card */}
                                {experience && (
                                    <div className="mb-6">
                                        <ExperienceCard experience={experience} index={index} />
                                    </div>
                                )}

                                {/* Testimonial card */}
                                {testimonial && (
                                    <TestimonialCard testimonial={testimonial} index={index} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(ExperienceTimeline, "work");
