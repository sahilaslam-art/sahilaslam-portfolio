import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const API_BASE = "http://localhost:5000/api";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
        <p className="text-white font-black text-[48px]">"</p>

        <div className="mt-1">
            <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">
                        <span className="blue-text-gradient">@</span> {name}
                    </p>
                    {(designation || company) && (
                        <p className="mt-1 text-secondary text-[12px]">
                            {designation}{designation && company ? " of " : ""}{company}
                        </p>
                    )}
                </div>

                {image ? (
                    <img
                        src={image}
                        alt={`feedback_by-${name}`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-[#D4A053]/20 flex items-center justify-center text-white text-sm font-bold">
                        {name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)}
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`${API_BASE}/feedback?approved=true`);
                if (res.ok) {
                    const data = await res.json();
                    const mapped = data.map((fb) => ({
                        testimonial: fb.message,
                        name: fb.name,
                        designation: fb.designation || "",
                        company: fb.company || "",
                        image: fb.image || "",
                    }));
                    setTestimonials(mapped);
                }
            } catch (err) {
                console.error("Failed to fetch testimonials:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    if (!loading && testimonials.length === 0) return null;

    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {loading ? (
                    <div className="w-full flex justify-center py-10">
                        <div className="w-8 h-8 border-2 border-[#D4A053] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    testimonials.map((testimonial, index) => (
                        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "");
