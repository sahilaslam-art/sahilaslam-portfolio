import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/90 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-black-100 border border-white/10 rounded-full px-5 py-2.5 hover:border-[#D4A053]/50 transition-all duration-300"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
                    <p className="text-white text-[15px] font-bold tracking-wide">
                        Sahil Aslam
                    </p>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden sm:flex items-center gap-1 bg-black-100/50 border border-white/5 rounded-full px-2 py-1.5">
                    {navLinks.map((nav) => (
                        <a
                            key={nav.id}
                            href={`#${nav.id}`}
                            className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${active === nav.title
                                ? "text-white bg-[#D4A053]/20 border border-[#D4A053]/30"
                                : "text-secondary hover:text-white hover:bg-white/5"
                                }`}
                            onClick={() => setActive(nav.title)}
                        >
                            {nav.title}
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilaslam754@gmail.com&su=Portfolio%20Contact%20-%20Let's%20Connect&body=Hi%20Sahil%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 border border-white/20 rounded-full px-6 py-2.5 text-white text-[14px] font-medium hover:border-[#D4A053] hover:bg-[#D4A053]/10 transition-all duration-300"
                >
                    Contact me
                </a>

                {/* Mobile Menu */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-black-100 border border-white/10 absolute top-20 right-4 min-w-[160px] z-10 rounded-2xl flex-col gap-4`}
                    >
                        {navLinks.map((nav) => (
                            <a
                                key={nav.id}
                                href={`#${nav.id}`}
                                className={`cursor-pointer text-[15px] font-medium ${active === nav.title ? "text-white" : "text-secondary"
                                    }`}
                                onClick={() => {
                                    setToggle(false);
                                    setActive(nav.title);
                                }}
                            >
                                {nav.title}
                            </a>
                        ))}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilaslam754@gmail.com&su=Portfolio%20Contact%20-%20Let's%20Connect&body=Hi%20Sahil%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[15px] font-medium text-[#D4A053] border-t border-white/10 pt-3"
                            onClick={() => setToggle(false)}
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
