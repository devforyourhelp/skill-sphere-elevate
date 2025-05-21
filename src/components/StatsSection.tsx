
const StatsSection = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Millions Worldwide</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join our global community of learners and transform your future
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">2M+</div>
            <p className="opacity-80">Active Learners</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
            <p className="opacity-80">Course Library</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
            <p className="opacity-80">Expert Instructors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
            <p className="opacity-80">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
