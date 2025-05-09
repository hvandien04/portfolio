import { useEffect } from "react";
import { Layout, Code, Laptop, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./ui/Card";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <Layout className="h-10 w-10 text-portfolio-lightBlue" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Back-End Development",
      icon: <Code className="h-10 w-10 text-portfolio-lightBlue" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security"],
    },
    {
      title: "Database Management",
      icon: <Laptop className="h-10 w-10 text-portfolio-lightBlue" />,
      skills: ["MySQL","SQL Server", "Firebase", "Redis"],
    },
    {
      title: "Other Skills",
      icon: <Globe className="h-10 w-10 text-portfolio-lightBlue" />,
      skills: ["Git", "Docker", "Postman", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-24 min-h-screen md:min-h-[620px] w-full">
      <div className="container mx-auto mb-24">
        <div className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-down">
          <h2 className="mb-4 relative font-bold text-black text-2xl md:text-4xl after:content-[''] after:w-24 after:h-1 after:mt-4 after:bg-cyan-400 after:block after:mx-auto">
            My Skills
          </h2>
          <p className="text-gray-500">Here are the technologies and tools I work with</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-8 text-black">Technical Proficiency</h3>
        <div className="space-y-6">
          {[
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Springboot", level: 85 },
            { name: "HTML/CSS", level: 95 },
          ].map((skill, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={index * 150}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-black">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
