import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      console.log("Subscription email:", email);
      setSubscribed(true);
      setEmail("");
      // Reset the subscribed state after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-800 rounded-full opacity-20 translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-playfair font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our Coffee Community
          </motion.h2>
          <motion.p
            className="text-lg text-primary-100 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Subscribe to receive exclusive offers, early access to seasonal
            specialties, and insider tips from our coffee experts
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-primary-200 border border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <motion.button
              type="submit"
              className="btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe Now
            </motion.button>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-primary-200"
              >
                Thank you for subscribing! Check your inbox for a confirmation.
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            className="text-primary-300 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            By subscribing, you agree to our Privacy Policy and Terms of Service
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
