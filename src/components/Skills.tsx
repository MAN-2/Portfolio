import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++",  "SQL", "MATLAB"],
    },
    {
      title: "AI/ML & Robotics",
      skills: ["ROS", "Deep Learning", "LangChain", "Computer Vision", "NLP"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["FastAPI", "PostgreSQL", "Git",  "Langchain"],
    },
    {
      title: "Specialized Skills",
      skills: ["SLAM", "Gazebo", "RViz", "MoveIt", "URDF", "Streamlit"],
    },
  ];

  const certifications = [
    {
      title: " 7x NPTEL-IIT Certifications ",
      items: [{text:"AI, ML, Deep Learning, Big Data, Embedded Systems (via SWAYAM)" ,
      img:  "https://i.postimg.cc/zfdS72B1/gen-ai.jpg?w=400&h=250&fit=crop&auto=format"}],

    },
    {
      title: "Cloud & Development",
      items: [{text:"AWS Solutions Architecture (Forage Virtual Internship) ,Scalable hosting architecture simulation",
      img: "https://i.postimg.cc/cCmtXrx5/aws-forage.jpg?w=400&h=250&fit=crop&auto=format"}],  
    },
    {
      title: "SQL Development",
      items: [{text:"Oracle Dev Gym – SQL Developer Foundations" ,
      img: "https://i.postimg.cc/PfzXLgFJ/oracle.jpg?w=400&h=250&fit=crop&auto=format"}],
    },

    {
      title: "Research Paper",
      items: [{text:"Optimizing Python Compilation and Execution , ICAPIE-2024 (GGSIPU EDC)" ,
      img: "https://i.postimg.cc/kgc9GKjH/icapie.jpg?w=400&h=250&fit=crop&auto=format"}],
    },

    
  ];

return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Skills & Development</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            Comprehensive technical expertise spanning robotics, AI/ML, and software engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, i) => (
            <Card key={i} className="p-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <Badge key={j} className="text-sm px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Research</h3>
          <div className="overflow-hidden">
            <div className="inline-flex gap-9 animate-scroll">
              {[...certifications, ...certifications].map((cert, idx) => (
                <Card key={idx} className="min-w-[600px]  p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h4 className="text-lg font-semibold mb-4">{cert.title}</h4>
                  <ul className="space-y-4 w-full">
                    {cert.items.map((item, idy) => (
                      <li key={idy} className="flex flex-col items-center gap-4">
                        {item.img && (
                          <img src={item.img} alt={`${cert.title} logo`} className="w-50 h-50 object-contain" />
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
