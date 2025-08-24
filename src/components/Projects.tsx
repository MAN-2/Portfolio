import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Dhaani: AI-Powered Smart Clinic Assistant",
      description: "Natural-language appointment scheduler with full CRUD for doctors. Integrated LLM API to parse commands and return Google Calendar links with confirmation emails.",
      technologies: ["FastAPI", "LangChain", "PostgreSQL", "React"],
      links: {
        demo: "https://dhaani-demo.vercel.app/"
        
      },
      status: "Completed",
      category: "AI/Healthcare",
      image: "https://i.postimg.cc/858ZcqM4/Screenshot-55.png?w=400&h=250&fit=crop&auto=format"
    },
    {
      title: "Reddit Persona Builder",
      description: "Scrapes Reddit user's posts via API and generates structured personality profiles with traits, tone analysis, and citations for various use-cases.",
      technologies: ["Python", "Reddit API", "Image Pipeline"],
      links: {
        github: "https://github.com/MAN-2/Reddit-Persona-Builder"
      },
      status: "Completed",
      category: "AI/Social",
      image: "https://i.postimg.cc/mrrPMDN2/Screenshot-2025-08-23-232535.jpg?w=400&h=100&fit=crop&auto=format"
    },
    {
      title: "Home Automation System using CNN and Deep Lerning",
      description: "An Deep Learning powered smart home system that uses CNN-based face recognition, IoT sensors, and deep learning  model to automate appliances, detect intrusions, and improve energy efficiency.",
      technologies: ["CNN", "IOT", "Arduino"],
      links: {
        github: "https://www.linkedin.com/posts/manu-tyagi-b98b83259_homeautomation-ai-finalyearproject-activity-7336056908329500673-phgO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-2NuQBFyMW8yQQJBgytdcYKfoEbQI_lu8"
      },
      status: "Completed",
      category: "AI/Career",
      image: "https://i.postimg.cc/GtpgM1Ld/1749052260640.jpg?w=400&h=250&fit=crop&auto=format"

    },

    {
      title: "Autonomous Surveillance Robot",
      description: "An Autonomous Surveillance robotic prototype devloped using Autonomous Navigation using SLAM and ROS Nav Stack , Object detection using Camera and OpenCV, equipped with meccanum wheels to roboustly navigate a variety of landscape with imporved control and precision.",
      technologies: ["ROS2", "OpenCV", "RasberryPi"],
      links:{},
      
      status: "Completed",
      category: "AI/Career",
      image: "https://i.postimg.cc/wTqRGjYh/758a4bf5-c243-4a28-8bdc-49c96ea02d53-20250824-6651952907166102836.png?w=400&h=250&fit=crop&auto=format"

    },
      
    
    {
      title: "AI Resume Chatbot",
      description: "Parses uploaded resumes to compute ATS compatibility scores and provides targeted improvement tips using LangChain agent chains.",
      technologies: ["LangChain", "Gemini", "Streamlit"],
      links: {
        github: "https://github.com/MAN-2/AI-Resume-Chatbot/tree/main/ResumeChatbot"
      },
      status: "Completed",
      category: "AI/Career",
      image: "https://i.postimg.cc/65SnBCdL/Screenshot-425.png?w=400&h=250&fit=crop&auto=format"

    },
    {
      title: "Krishi Saarthi : AI Powered Plant Disease Detector",
      description: "Streamlit-based web app that detects plant leaf diseases using a trained deep learning model.",
      technologies: ["Streamlit", "Deep Learning ", "Tensorflow"],
      links: {
       demo: "https://krishi-saarthi.streamlit.app/",
       github: "https://github.com/MAN-2/Krishi-Saarthi---Leaf-Disease-Detection-using-AI"
      },
      status: "Completed",
      category: "AI/Agriculture",
      image: "https://i.postimg.cc/cHnKyvFJ/screencapture-krishi-saarthi-streamlit-app-2025-08-24-10-45-57.png?w=400&h=250&fit=crop&auto=format"

    },
    {
      title: "AstroGuru : AI Astrology Prediction",
      description: " Interactive astrology web application built with FastAPI backend and React frontend with GSAP animations.",
      technologies: ["FastAPI", "React ", "GSAP"],
      links: {
       demo: "https://drive.google.com/file/d/19tOvZ7RN7dsRbLfzx8L1YSrduaTSo4uY/view?usp=drive_link",
       github: "https://github.com/MAN-2/AstroGuru--AI-Prediction"
      },
      status: "Completed",
      category: "AI/Social",
      image: "https://i.postimg.cc/8CnyX0YS/Screenshot-2025-08-24-111649.jpg?w=400&h=250&fit=crop&auto=format"

    },
    {
      title:"AI & ML Projects",
      description: " curated collection of machine learning and AI mini projects developed using Python and industry-standard libraries like scikit-learn, TensorFlow, and NLTK.",
      technologies: ["Numpy","Pandas",  "spaCy", "NLTK"],
      links: {
       github: "https://github.com/MAN-2/AIML-Projects/"
      },
      status: "Completed",
      category: "AI/Career",
      image: "https://i.postimg.cc/gjRLbxkD/Gemini-Generated-Image-rogydtrogydtrogy.png?w=400&h=250&fit=crop&auto=format"

    }
    
  
  
  
  
  
  
  
  
  
  
  
  
  ];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/Healthcare": return "bg-white-500/10 g-background/80 backdrop-blur-sm  text-white-400 20";
      case "AI/Social": return "bg-white-500/10 g-background/80 backdrop-blur-sm text-blue-400 border-blue-500/20";
      case "AI/Career": return "bg-purple-500/10  g-background/80 backdrop-blur-sm text-purple-400 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI/ML, robotics, and intelligent systems development.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`text-xs border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.links.demo && (
                           <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                         </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-0 border-border/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;