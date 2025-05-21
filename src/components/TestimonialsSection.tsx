
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ content, author, role, rating, image }: TestimonialCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "Taking the web development bootcamp completely changed my career. I went from being stuck in a dead-end job to landing a developer position at a startup within 3 months of completing the course.",
      author: "Sarah Johnson",
      role: "Web Developer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      content:
        "The business courses here are top-notch. I've taken several MBA-level classes, and the content here is just as valuable but much more accessible and practical for day-to-day application.",
      author: "Michael Chen",
      role: "Marketing Manager",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      content:
        "As someone switching careers into data science, these courses provided exactly what I needed - practical skills, portfolio projects, and the confidence to apply for jobs in a new field.",
      author: "Jessica Williams",
      role: "Data Analyst",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied learners who have transformed their careers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
