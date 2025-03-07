import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Batman",
    role: "Coffee Enthusiast",
    image: "images/batman.jpg",
    content:
      "The ambiance at Éthéré Café is absolutely stunning. Their signature blend has transformed my morning routine. The futuristic touch in everything they do makes this place truly special.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ben Tennyson",
    role: "Food Blogger",
    image: "images/ben10.jpg",
    content:
      "As someone who reviews cafes professionally, I can confidently say that Éthéré Café stands out with their innovative approach to coffee brewing. Their seasonal specials are always something to look forward to.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Architect",
    image: "images/anadearmas.jpg",
    content:
      "The design elements in this coffee shop are breathtaking! I come here not just for their exceptional coffee but also for the inspiring atmosphere that helps me think creatively.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="section-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our community of coffee lovers who have experienced our
            premium offerings
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-8 md:p-12 text-center"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="inline-block w-5 h-5 text-primary-500 mx-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl italic mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-200">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-neutral-800">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-neutral-500">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary-500 w-6"
                    : "bg-primary-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
