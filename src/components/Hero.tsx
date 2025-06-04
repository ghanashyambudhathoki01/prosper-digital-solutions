import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your Future with
              <span className="text-yellow-400 block">Prosper Digital Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Expert consultancy in IELTS/PTE coaching, professional video editing, 
              and cutting-edge software development. Your success is our mission.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400 h-6 w-6" />
                <span className="text-lg">Proven track record with 500+ successful clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400 h-6 w-6" />
                <span className="text-lg">Expert team with industry certifications</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-400 h-6 w-6" />
                <span className="text-lg">Personalized solutions for every client</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Book Free Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-blue-100">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-blue-100">Projects Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;