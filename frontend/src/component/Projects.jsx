import ProjectCard from "./ui/ProjectCard";
import { useEffect } from "react";
import Button from "./ui/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
    const projects = [
        {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce platform that supports user authentication, product CRUD operations (create, read, update, delete), and PayPal integration for secure online payments.",
          image: "https://i.postimg.cc/hvWj33Ck/z6582483753400-d45932c448c5955cce46df6f556d52ae.jpg",
          technologies: ["React", "Springboot", "Spring Data JPA","Spring Security", "Mysql"],
          liveLink: "https://example.com",
          githubLink: "https://github.com/hvandien04/PhoneShop",
        },
        {
          title: "Real Estate Price Prediction with AI",
          description: "An AI-powered application that predicts house prices based on various features like location, size, and amenities using machine learning algorithms.",
          image: "https://i.postimg.cc/vBbvn3yv/z6582476116894-287e2b8c0910f8f33f5bd3a3e6e38556.jpg",
          technologies: ["React", "Springboot", "Tailwind CSS"," MySQL", "Machine Learning"],
          liveLink: "https://example.com",
          githubLink: "https://github.com/hvandien04/PredictingHousePrice",
        },
      ];
    return (
        <section id="projects" className=" py-24 min-h-screen md:min-h-[620px] bg-slate-100 w-full">
            <div className="container mx-auto px-4 md:px-36">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className=" mb-4 relative font-bold text-black text-2xl md:text-4xl after:content-[''] after:w-24 after:h-1 after:mt-4 after:bg-cyan-400 after:block after:mx-auto" >My Projects</h2>
                    <p className="text-gray-500">Check out some of my recent work</p>
                </div>
                <div className="space-y-8 md:mx-auto">
                  {projects.map((project, index) => (
                    <div 
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <ProjectCard 
                        {...project}
                        isEven={index % 2 === 1}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center" data-aos="fade-up">
                  <Button className="!text-black border border-black !bg-transparent">See More Project</Button>

                </div> 
            </div>

        </section>
    )
}

export default Projects;