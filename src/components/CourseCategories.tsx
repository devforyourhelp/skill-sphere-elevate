
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  count: string;
  image: string;
}

const CategoryCard = ({ title, count, image }: CategoryCardProps) => (
  <div className="relative group overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-200 text-sm">{count} courses</p>
    </div>
  </div>
);

const CourseCategories = () => {
  const categories = [
    {
      title: "Web Development",
      count: "487",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Business & Management",
      count: "329",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Data Science",
      count: "253",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Mobile Development",
      count: "195",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Browse through our extensive collection of high-quality courses across multiple disciplines
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Categories
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              count={category.count}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
