import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <section id="home" className="py-24 min-h-screen content-center">
        <div className="container">
            <div className="max-w-4xl mx-auto text-center ">
                <p className="text-cyan-400 font-bold ont-medium mb-4 text-2xl">Hello, I'm</p>
                <h1 className="font-bold text-4xl md:text-6xl text-black">Hoang Van Dien</h1>
                <h2 className="text-2xl   md:text-4xl text-gray-500 mt-4 mb-8 font-medium">
                    <span className="text-black">Full-Stack Developer </span>
                    specializing in building exceptional digital experiences
                </h2>
                <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                I design and build applications that are not just functional but also
                beautiful and user-friendly. My passion lies in turning complex
                problems into simple, intuitive designs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button> View My Work <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    <Button className=" !text-black border border-black !bg-transparent ">Contact Me</Button>
                </div>
            </div>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
            <a href="#about" className="text-gray-500 hover:text-gray-950 transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
    </section>
  );
}

export default HeroSection;