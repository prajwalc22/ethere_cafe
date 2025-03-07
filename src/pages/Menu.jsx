import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";

// Menu data (expanded from Home page)
const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "espresso", name: "Espresso Drinks" },
  { id: "specialty", name: "Specialty Coffee" },
  { id: "cold", name: "Cold Beverages" },
  { id: "tea", name: "Premium Teas" },
  { id: "pastry", name: "Pastries" },
  { id: "dessert", name: "Desserts" },
];

const menuItems = [
  // Espresso Drinks
  {
    id: 1,
    name: "Quantum Espresso",
    description:
      "A futuristic take on classic espresso with notes of dark chocolate and caramel.",
    price: 4.5,
    image: "./images/espresso.jpg",
    category: "espresso",
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
    image: "./images/latte2.jpg",
    category: "espresso",
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
    image: "./images/capp.jpg",
    category: "espresso",
    rating: 5,
    reviews: 76,
  },
  {
    id: 4,
    name: "Gravity-Defying Mocha",
    description:
      "Rich chocolate and espresso with a floating marshmallow cloud on top.",
    price: 6.5,
    image: "./images/mocha.jpg",
    category: "espresso",
    rating: 5,
    reviews: 103,
    isPopular: true,
  },

  // Specialty Coffee
  {
    id: 5,
    name: "Molecular Pour Over",
    description:
      "Single-origin beans prepared with our molecular filtration technique for unmatched clarity.",
    price: 7.25,
    image: "./images/latte1.jpg",
    category: "specialty",
    rating: 5,
    reviews: 56,
    isNew: true,
  },
  {
    id: 6,
    name: "Flux Capacitor Blend",
    description:
      "Our house blend featuring beans from three continents, roasted to perfection.",
    price: 6.75,
    image: "./images/latte.jpg",
    category: "specialty",
    rating: 4,
    reviews: 42,
  },

  // Cold Beverages
  {
    id: 7,
    name: "Augmented Reality Cold Brew",
    description:
      "Slow-steeped for 24 hours, served with our AR flavor enhancer.",
    price: 5.95,
    image: "./images/coldbrew.jpg",
    category: "cold",
    rating: 4,
    reviews: 67,
  },
  {
    id: 8,
    name: "Cryogenic Nitro Float",
    description: "Nitrogen-infused cold brew topped with frozen vanilla cream.",
    price: 6.5,
    image: "./images/coldbrew.jpg",
    category: "cold",
    rating: 5,
    reviews: 83,
    isPopular: true,
  },

  // Premium Teas
  {
    id: 9,
    name: "Hologram Green Tea",
    description:
      "Organic Japanese green tea with a shifting color spectrum as it steeps.",
    price: 5.5,
    image: "./images/coldbrew.jpg",
    category: "tea",
    rating: 4,
    reviews: 38,
  },
  {
    id: 10,
    name: "Quantum Chai",
    description:
      "House-made masala chai with warming spices and a touch of vanilla.",
    price: 5.75,
    image: "./images/coldbrew.jpg",
    category: "tea",
    rating: 5,
    reviews: 45,
    isNew: true,
  },

  // Pastries
  {
    id: 11,
    name: "Levitating Croissant",
    description:
      "Buttery layers that seem to float off the plate, with hints of almond.",
    price: 3.95,
    image: "./images/cross.jpg",
    category: "pastry",
    rating: 5,
    reviews: 88,
    isPopular: true,
  },
  {
    id: 12,
    name: "Time-Delayed Danish",
    description:
      "Flaky pastry with a surprise center that reveals itself as you eat.",
    price: 4.25,
    image: "./images/cross3.jpg",
    category: "pastry",
    rating: 4,
    reviews: 54,
  },

  // Desserts
  {
    id: 13,
    name: "Molecular Cheesecake",
    description:
      "Deconstructed cheesecake with spherified berry compote and cookie soil.",
    price: 7.5,
    image: "./images/cheesecake.jpg",
    category: "dessert",
    rating: 4,
    reviews: 45,
    isNew: true,
  },
  {
    id: 14,
    name: "Neural Network Tiramisu",
    description:
      "Layers of coffee-soaked ladyfingers and mascarpone, arranged in a pattern inspired by neural networks.",
    price: 6.75,
    image: "./images/tira.jpg",
    category: "dessert",
    rating: 5,
    reviews: 62,
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    // Filter by category
    const categoryMatch =
      activeCategory === "all" || item.category === activeCategory;

    // Filter by search query
    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our full selection of premium coffees, teas, and delectable
            treats, meticulously crafted to elevate your coffee experience
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our menu..."
              className="w-full py-3 px-4 pl-10 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-neutral-500">
                  No items found. Please try a different search.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Menu;
