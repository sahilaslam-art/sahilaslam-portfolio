import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects as staticProjects } from "../constants";

const API_BASE = "http://localhost:5000/api";

const tagColors = ["blue-text-gradient", "green-text-gradient", "pink-text-gradient"];

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${API_BASE}/projects`);
                if (res.ok) {
                    const data = await res.json();
                    // Map API data to match the component's expected format
                    const mapped = data.map((p) => ({
                        name: p.title,
                        description: p.description,
                        tags: (p.tech || []).map((t, i) => ({
                            name: t.toLowerCase(),
                            color: tagColors[i % tagColors.length],
                        })),
                        image: p.image || "",
                        source_code_link: p.githubUrl || "https://github.com/",
                        demo_link: p.demoUrl || p.githubUrl || "https://github.com/",
                    }));
                    setProjects(mapped);
                } else {
                    setProjects(staticProjects);
                }
            } catch (err) {
                console.error("Failed to fetch projects, using static fallback:", err);
                setProjects(staticProjects);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText}`}>My work</p>
                    <h2 className={`${styles.sectionHeadText}`}>
                        Projects<span className="text-[#D4A053]">.</span>
                    </h2>
                </motion.div>
                <div className="mt-16 flex justify-center">
                    <div className="w-8 h-8 border-2 border-[#D4A053] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </>
        );
    }

    if (projects.length === 0) return null;

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Projects<span className="text-[#D4A053]">.</span>
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcase my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories.
                </motion.p>
            </div>

            {/* Bento Grid Layout */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Large Card — Left */}
                {projects[0] && (
                    <motion.div
                        variants={fadeIn("right", "spring", 0, 0.75)}
                        className="lg:col-span-7 lg:row-span-2 group cursor-pointer"
                    >
                        <div 
                            onClick={() => window.open(projects[0].demo_link || projects[0].source_code_link, "_blank")}
                            className="relative w-full h-full min-h-[400px] lg:min-h-[580px] bg-black-100 rounded-3xl overflow-hidden border border-white/5 hover:border-[#D4A053]/30 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="w-full h-[65%] overflow-hidden">
                                {projects[0].image ? (
                                    <img
                                        src={projects[0].image}
                                        alt={projects[0].name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#D4A053]/20 to-[#D4A053]/5 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-[#D4A053]/30">
                                            {projects[0].name.split(" ").map((w) => w[0]).join("")}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-[22px] lg:text-[26px] leading-tight">
                                            {projects[0].name}
                                        </h3>
                                        <p className="mt-2 text-secondary text-[14px] lg:text-[15px] leading-[22px] line-clamp-2">
                                            {projects[0].description}
                                        </p>
                                        {projects[0].demo_link && (
                                            <div className="mt-3">
                                                <a
                                                    href={projects[0].demo_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-[#D4A053] hover:text-white text-[13px] sm:text-[14px] font-medium transition-colors duration-300 inline-flex items-center gap-1.5"
                                                >
                                                    🔗 Live Demo
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(projects[0].source_code_link, "_blank");
                                        }}
                                        className="ml-4 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-[#D4A053]/20 hover:border-[#D4A053]/30 transition-all duration-300 flex-shrink-0"
                                    >
                                        <img src={github} alt="github" className="w-5 h-5 object-contain" />
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {projects[0].tags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className={`text-[12px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
                                        >
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Right Column — Stacked Cards */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                    {projects.slice(1).map((project, index) => (
                        <motion.div
                            key={`project-${index + 1}`}
                            variants={fadeIn("left", "spring", (index + 1) * 0.3, 0.75)}
                            className="group cursor-pointer flex-1"
                        >
                            <div 
                                onClick={() => window.open(project.demo_link || project.source_code_link, "_blank")}
                                className="relative w-full h-full min-h-[270px] bg-black-100 rounded-3xl overflow-hidden border border-white/5 hover:border-[#D4A053]/30 transition-all duration-500 flex flex-col"
                            >
                                {/* Image */}
                                <div className="w-full h-[55%] min-h-[150px] overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#D4A053]/20 to-[#D4A053]/5 flex items-center justify-center">
                                            <span className="text-4xl font-bold text-[#D4A053]/30">
                                                {project.name.split(" ").map((w) => w[0]).join("")}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-[18px] leading-tight">
                                                {project.name}
                                            </h3>
                                            {project.demo_link && (
                                                <div className="mt-2">
                                                    <a
                                                        href={project.demo_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-[#D4A053] hover:text-white text-[12px] font-medium transition-colors duration-300 inline-flex items-center gap-1.5"
                                                    >
                                                        🔗 Live Demo
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(project.source_code_link, "_blank");
                                            }}
                                            className="ml-3 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-[#D4A053]/20 hover:border-[#D4A053]/30 transition-all duration-300 flex-shrink-0"
                                        >
                                            <img src={github} alt="github" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag.name}
                                                className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
                                            >
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Works, "about");
