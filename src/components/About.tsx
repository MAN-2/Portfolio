import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Code, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Deep learning models, LLM-based agent systems, and intelligent data processing pipelines."
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "FastAPI, Python, full-stack development with focus on scalable and maintainable code."
    },
    {
      icon: Bot,
      title: "Robotics Expertise",
      description: "Production-ready software using ROS 2, automation systems, and industrial robotics solutions."
    },
    {
      icon: Zap,
      title: "Innovation Focused",
      description: "Turning complex problems into elegant solutions through cutting-edge technology."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           I’m Manu Tyagi, an AI/ML-focused software engineer with hands-on experience in building intelligent systems, leveraging machine learning, deep learning, and automation to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <p className="text-muted-foreground mb-4">
                Currently pursuing hands-on AI projects and developements focused on agent design, multi-agent systems, and real-world deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Agent Systems</Badge>
                <Badge variant="secondary">Multi-Agent</Badge>
                <Badge variant="secondary">LLM Integration</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Interests</h3>
              <p className="text-muted-foreground mb-4">
                Passionate about automation, deep learning applications, and building intelligent systems that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Deep Learning</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">NLP</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 manutyagi500@gmail.com</p>
                <p>📱 +91- 9311480009</p>
                <p>📍 New Delhi, India</p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline">Available for Hire</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
