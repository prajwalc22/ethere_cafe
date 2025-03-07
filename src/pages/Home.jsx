import { motion } from "framer-motion";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Testimonials from "../components/Testimonials";
import SubscriptionForm from "../components/SubscriptionForm";

// Sample menu items data
const coffeeItems = [
  {
    id: 1,
    name: "Quantum Espresso",
    description:
      "A futuristic take on classic espresso with notes of dark chocolate and caramel.",
    price: 4.5,
    image: "/images/espresso.jpg",
    category: "Espresso",
    rating: 5,
    reviews: 124,
    isPopular: true,
  },
  {
    id: 2,
    name: "Nebula Latte",
    description:
      "Our signature latte infused with vanilla and topped with cosmic-inspired art.",
    price: 5.75,
    image: "/images/latte1.jpg",
    category: "Latte",
    rating: 4,
    reviews: 89,
    isNew: true,
  },
  {
    id: 3,
    name: "Holographic Cappuccino",
    description:
      "A perfect balance of espresso, steamed milk, and iridescent foam.",
    price: 5.25,
    image: "/images/pp.jpg",
    category: "Cappuccino",
    rating: 5,
    reviews: 76,
  },
  {
    id: 4,
    name: "Gravity-Defying Mocha",
    description:
      "Rich chocolate and espresso with a floating marshmallow cloud on top.",
    price: 6.5,
    image: "/images/mocha.jpg",
    category: "Mocha",
    rating: 5,
    reviews: 103,
    isPopular: true,
  },
  {
    id: 5,
    name: "Augmented Reality Cold Brew",
    description:
      "Slow-steeped for 24 hours, served with our AR flavor enhancer.",
    price: 5.95,
    image: "/images/coldbrew.jpg",
    category: "Cold Brew",
    rating: 4,
    reviews: 67,
    isNew: true,
  },
  {
    id: 6,
    name: "Biometric Macchiato",
    description:
      "Our espresso with a spot of foam, customized to your taste profile.",
    price: 4.75,
    image: "/images/macchaito.jpg",
    category: "Espresso",
    rating: 5,
    reviews: 52,
  },
];

const dessertItems = [
  {
    id: 7,
    name: "Levitating Croissant",
    description:
      "Buttery layers that seem to float off the plate, with hints of almond.",
    price: 3.95,
    image: "/images/cross2.jpg",
    category: "Pastry",
    rating: 5,
    reviews: 88,
    isPopular: true,
  },
  {
    id: 8,
    name: "Molecular Cheesecake",
    description:
      "Deconstructed cheesecake with spherified berry compote and cookie soil.",
    price: 7.5,
    image: "/images/cheesecake.jpg",
    category: "Cake",
    rating: 4,
    reviews: 45,
    isNew: true,
  },
  {
    id: 9,
    name: "Neural Network Tiramisu",
    description:
      "Layers of coffee-soaked ladyfingers and mascarpone, arranged in a pattern inspired by neural networks.",
    price: 6.75,
    image: "/images/tira.jpg",
    category: "Cake",
    rating: 5,
    reviews: 62,
  },
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Elevating Your Coffee Experience
            </h2>
            <p className="section-subheading">
              Our commitment to innovation and excellence creates an
              unforgettable journey through the world of premium coffee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
                title: "Advanced Brewing Technology",
                description:
                  "Precision brewing methods using state-of-the-art equipment to extract the perfect flavor profile from every bean.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                ),
                title: "Sustainably Sourced Beans",
                description:
                  "Ethically sourced beans from premium growing regions, supporting farmers and the environment.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Flavor Innovation",
                description:
                  "Constantly pushing boundaries with innovative flavor combinations and presentation techniques.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 neumorph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <MenuSection
        title="Our Signature Coffee Selection"
        subtitle="Discover our range of meticulously crafted coffees, from classic espressos to innovative specialty drinks"
        categories={[
          "All",
          "Espresso",
          "Latte",
          "Cappuccino",
          "Mocha",
          "Cold Brew",
        ]}
        items={coffeeItems}
      />

      {/* Seasonal Specials */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-700 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-800 opacity-20 blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Seasonal Special Edition
              </h2>
              <h3 className="text-xl md:text-2xl text-primary-300 font-medium mb-6">
                Aurora Borealis Blend
              </h3>
              <p className="text-primary-100 mb-8">
                Experience our limited-time seasonal offering, inspired by the
                dancing northern lights. This medium-dark roast features notes
                of caramelized sugar, winter berries, and a hint of warm spices.
                Each cup is served with our signature color-changing cream art
                that mimics the aurora phenomenon.
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Try it Today
              </motion.button>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="/images/1.jpg"
                  alt="Aurora Borealis Blend"
                  className="relative z-10 rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <MenuSection
        title="Delightful Pairings"
        subtitle="Complement your coffee with our selection of artisanal desserts and pastries"
        categories={["All", "Pastry", "Cake", "Cookie"]}
        items={dessertItems}
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Subscription Form */}
      <SubscriptionForm />
    </>
  );
};

export default Home;
