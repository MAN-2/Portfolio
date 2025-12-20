import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-hero relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl lg:text-8xl  pb-5 font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Manu Tyagi
            </h1>
            <p className="text-xl text-muted-foreground max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
             AI/ML Developer | GenAI | Deep Learning | LLM
            </p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I build intelligent automation systems that connect AI agents, APIs, and robotics — turning complex workflows into smart, autonomous pipelines.

          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="mailto:manutyagi500@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a> 
            
          </div>

          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/MAN-2" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            </a>
            
            <a href="https://www.linkedin.com/in/manu-tyagi-b98b83259/" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            </a>
            
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-intense group-hover:scale-105 transition-all duration-500 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden group-hover:rounded-3xl transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Manu Tyagi - Robotics Engineer"
                     className="w-full h-100 scale-125 translate-y-6 object-cover  "
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-primary/50 rounded-full animate-pulse"></div>
              </div>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/100 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
