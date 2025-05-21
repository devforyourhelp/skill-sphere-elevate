
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LearnHub<span className="text-brand-teal">.</span></h3>
            <p className="mb-4">
              Empowering learners worldwide with expert-led courses and flexible learning options.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Courses</a></li>
              <li><a href="#features" className="hover:text-brand-blue transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-brand-blue transition-colors">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
