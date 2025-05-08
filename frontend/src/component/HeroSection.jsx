import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-[520px] content-center">
        <div className="container">
            <div className="max-w-4xl mx-auto text-center ">
                <p className="text-cyan-400 ont-medium mb-4">Hello, I'm</p>
                <h1 className="font-bold text-4xl md:text-6xl text-black">Hoang Van Dien</h1>
                <h2 className="text-2xl md:text-4xl text-gray-500 mt-4 mb-8 font-medium">
                    <span className="text-black">Full-Stack Developer </span>
                    specializing in building exceptional digital experiences
                </h2>
                <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
                I design and build applications that are not just functional but also
                beautiful and user-friendly. My passion lies in turning complex
                problems into simple, intuitive designs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className=""> View My Work <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    <Button className=" !text-black border border-black !bg-transparent ">Contact Me</Button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;