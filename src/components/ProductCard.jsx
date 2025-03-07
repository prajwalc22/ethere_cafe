import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useApp();

  return (
    <motion.div
      className="glass-effect p-4 overflow-hidden card-hover"
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {item.isNew && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}
        {item.isPopular && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            POPULAR
          </div>
        )}
      </div>

      <div className="p-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-neutral-800">{item.name}</h3>
          <span className="text-primary-600 font-semibold">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-neutral-500 text-sm mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={i < item.rating ? "#2ac0d2" : "none"}
                stroke={i < item.rating ? "none" : "#cbd5e0"}
                className="mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            ))}
            <span className="text-xs text-neutral-500 ml-1">
              ({item.reviews})
            </span>
          </div>

          <motion.button
            className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-2 rounded-full"
            whileTap={{ scale: 0.85 }}
            onClick={() => addToCart(item)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 9v6m-3-3h6M3 6h2l2 12h12l2-12h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
