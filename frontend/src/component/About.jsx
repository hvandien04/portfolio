import Button from "./ui/Button";

const About = () => {
    return (
        <section id="about" className=" py-24 min-h-screen md:min-h-[620px] bg-slate-100 w-full">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className=" mb-4 relative font-bold text-black text-2xl md:text-4xl after:content-[''] after:w-24 after:h-1 after:mt-4 after:bg-cyan-400 after:block after:mx-auto" >About Me</h2>
                    <p className="text-gray-500">Get to know me better</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl m-4 md:mx-auto">
                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                                // src="https://i.postimg.cc/W3w325CR/477512784-1305846650656912-1319403007597015747-n.jpg"
                                src = "https://i.postimg.cc/13SNZNfN/z6582295123211-e7dab97913563a88f32c7188fcd75990.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-left">
                        <h3 className="text-3xl font-bold mt-4 text-black ">As a Information Technology student at the University of Transport and Communications</h3>
                        <p className="text-gray-500 mt-2">
                            I'm a passionate Full-Stack Developer with a love for creating dynamic and responsive web applications. I thrive on challenges and constantly seek to improve my skills and knowledge in the ever-evolving tech landscape.
                        </p>
                        <p className="text-gray-500 mt-2">
                            I have hands-on experience working with modern technologies such as React, Tailwind CSS, Springboot, and MySql. I'm also familiar with RESTful APIs and responsive design principles.
                        </p>
                        <p className="text-gray-500 mt-2 pb-4">
                            Beyond coding, I value teamwork and continuous learning. I'm always open to feedback and collaborative environments where everyone contributes to a shared vision.
                        </p>
                        <Button className="w-fit">Download CV</Button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About;