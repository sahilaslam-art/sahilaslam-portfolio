import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
    {
        icon: "📊",
        iconBg: "bg-yellow-500/10 border-yellow-500/20",
        title: "Quality Focus",
        description:
            "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        icon: "💬",
        iconBg: "bg-green-500/10 border-green-500/20",
        title: "Reliable Communication",
        description:
            "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        icon: "⏰",
        iconBg: "bg-purple-500/10 border-purple-500/20",
        title: "On-Time Delivery",
        description:
            "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const Features = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-10">
                <p className={styles.sectionSubText}>What I bring to the table</p>
                <h2 className={styles.sectionHeadText}>
                    Why Choose Me<span className="text-[#D4A053]">.</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="bg-black-100 border border-white/5 rounded-2xl p-7 hover:border-[#D4A053]/20 transition-all duration-300"
                    >
                        <div
                            className={`w-12 h-12 rounded-xl ${feature.iconBg} border flex items-center justify-center text-[22px] mb-5`}
                        >
                            {feature.icon}
                        </div>
                        <h3 className="text-white font-bold text-[18px] mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-secondary text-[14px] leading-[22px]">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Features, "");
