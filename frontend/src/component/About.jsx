import { useEffect } from 'react';
import Button from "./ui/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <section id="about" className="py-24 min-h-screen md:min-h-[620px] bg-slate-100 w-full">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-down">
                    <h2 className="mb-4 relative font-bold text-black text-2xl md:text-4xl after:content-[''] after:w-24 after:h-1 after:mt-4 after:bg-cyan-400 after:block after:mx-auto">
                        About Me
                    </h2>
                    <p className="text-gray-500">Get to know me better</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl m-4 md:mx-auto">
                    <div className="relative" data-aos="fade-right">
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                                src="https://i.postimg.cc/13SNZNfN/z6582295123211-e7dab97913563a88f32c7188fcd75990.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-left" data-aos="fade-left">
                        <h3 className="text-3xl font-bold mt-4 text-black">
                            As a Information Technology student at the University of Transport and Communications
                        </h3>
                        <p className="text-gray-500 mt-2">
                            I'm a passionate Full-Stack Developer with a love for creating dynamic and responsive web applications...
                        </p>
                        <p className="text-gray-500 mt-2">
                            I have hands-on experience working with modern technologies such as React, Tailwind CSS...
                        </p>
                        <p className="text-gray-500 mt-2 pb-4">
                            Beyond coding, I value teamwork and continuous learning...
                        </p>
                        <div data-aos="zoom-in">
                            <Button className="w-fit">Download CV</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
