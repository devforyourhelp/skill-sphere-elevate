
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSignUp = () => {
    const element = document.getElementById("signup-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-brand-blue">
            LearnHub<span className="text-brand-teal">.</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-brand-blue transition-colors">
            Features
          </a>
          <a href="#courses" className="text-gray-700 hover:text-brand-blue transition-colors">
            Courses
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-blue transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-brand-blue transition-colors">
            Pricing
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button onClick={scrollToSignUp} className="bg-brand-blue hover:bg-brand-blue/90">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
