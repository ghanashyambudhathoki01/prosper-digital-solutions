import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Code, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "IELTS/PTE Coaching",
      description: "Achieve your dream band score with our expert coaching. Personalized study plans, mock tests, and proven strategies.",
      features: ["Expert Instructors", "Mock Tests", "Flexible Schedules", "Score Guarantee"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Video,
      title: "Video Editing Services",
      description: "Professional video editing for businesses, content creators, and marketing campaigns. From concept to final cut.",
      features: ["Professional Editing", "Motion Graphics", "Color Grading", "Fast Turnaround"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions, web applications, and mobile apps. Built with modern technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Maintenance & Support"],
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions across three key areas to help you achieve your goals
            and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full group-hover:bg-blue-700 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;