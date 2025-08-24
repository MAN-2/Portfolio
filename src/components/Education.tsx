import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Automation and Robotics",
      institution: "University School of Automation and Robotics (USAR), Surajmal Vihar New Delhi",
      period: "2021-25",
      grade: "CGPA: 8.5",
      status: "Graduated",
      description: "Comprehensive study in automation systems, robotics, control systems, and intelligent manufacturing processes."
    },
    {
      degree: "Intermediate",
      institution: "Ramakrishna Senior Secondary School, Vikaspuri, New Delhi",
      period: "2020",
      grade: "Percentage: 95%",
      status: "Completed",
      description: "Strong foundation in mathematics, physics, and computer science."
    },
    {
      degree: "High School",
      institution: "Ramakrishna Senior Secondary School, Vikaspuri, New Delhi",
      period: "2018",
      grade: "Percentage: 90%",
      status: "Completed",
      description: "Excellent academic performance with focus on STEM subjects."
    }
  ];

  const achievements = [
    "CGPA 8.5 in Bachelor's degree with focus on robotics and automation",
    "95% in Intermediate with strong performance in mathematics and physics",
    "Consistent academic excellence throughout educational journey",
    "Active participation in technical projects and research activities"
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in automation, robotics, and engineering fundamentals.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {edu.grade}
                        </div>
                        <Badge variant={edu.status === 'Graduated' ? 'default' : 'secondary'}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;