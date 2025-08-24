import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Agent Architect Intern",
      company: "IBM SkillsBuild",
      location: "Remote",
      period: "June - Aug 2025",
      type: "Internship",
      description: "Currently pursuing a hands-on AI internship focused on agent design, multi-agent systems, and real-world deployment. Gaining practical experience in AI workflows, agent orchestration, and environment integration while progressing through industry-aligned modules to earn IBM digital credentials.",
      technologies: ["AI Agent Design", "Multi-Agent Systems", "Deployment", "IBM Watson"],
      status: "current"
    },
    {
      title: "Assembly Line Intern",
      company: "Honda Cars India Ltd., Tapukara Plant, Rajasthan",
      location: "Rajasthan, India",
      period: "Jul - Aug 2024",
      type: "Industrial Training",
      description: "Contributed to optimization of assembly line operations in departments such as frame, welding, and engine shop, resulting in improved throughput and tracking and team coordination. Applied robotics and automation knowledge while working and training on Industrial Robots.",
      technologies: ["Industrial Robotics", "Assembly Line", "Process Optimization", "Automation Systems"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Internships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in AI/ML development and industrial robotics automation.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 ${exp.status === 'current' ? 'ring-2 ring-primary/50' : ''}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-xl text-primary font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant={exp.status === 'current' ? 'default' : 'secondary'}>
                          {exp.status === 'current' ? 'Current' : 'Completed'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;