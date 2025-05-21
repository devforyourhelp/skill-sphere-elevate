
import { Award, Book, CalendarCheck, Play, Smartphone, User } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="h-12 w-12 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience in their fields.",
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Video Courses",
      description: "Access high-quality video lessons that you can watch at your own pace, anywhere.",
    },
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Live Classes",
      description: "Engage in real-time with instructors during scheduled live sessions for deeper learning.",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Flexible Learning",
      description: "Study at your own pace with unlimited access to courses and resources.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certificates",
      description: "Earn recognized certificates upon completion to showcase your new skills.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Access",
      description: "Learn on the go with our mobile app, available for iOS and Android devices.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to learn effectively and advance your skills
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
