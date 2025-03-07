import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/story" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Online Ordering", path: "/order" },
        { name: "Catering", path: "/catering" },
        { name: "Coffee Subscription", path: "/subscription" },
        { name: "Gift Cards", path: "/gift-cards" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", path: "/faqs" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
    { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com" },
  ];

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case "instagram":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "facebook":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case "pinterest":
        return (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0a12 12 0 00-4.373 23.142c-.018-.42-.003-1.284.244-1.857l1.794-7.594s-.445-.895-.445-2.218c0-2.077 1.205-3.625 2.707-3.625 1.276 0 1.891.96 1.891 2.111 0 1.284-.819 3.208-1.244 4.988-.354 1.497.75 2.715 2.228 2.715 2.672 0 4.722-2.818 4.722-6.882 0-3.599-2.578-6.102-6.273-6.102-4.27 0-6.757 3.194-6.757 6.494 0 1.284.5 2.658 1.118 3.402.123.153.141.285.105.443l-.372 1.52c-.06.243-.195.294-.447.178-1.678-.773-2.722-3.21-2.722-5.156 0-4.25 3.09-8.147 8.916-8.147 4.675 0 8.306 3.344 8.306 7.812 0 4.674-2.946 8.443-7.02 8.443-1.372 0-2.666-.713-3.107-1.56l-.844 3.216c-.306 1.174-1.134 2.646-1.69 3.543.9.302 2.626.74 3.84.74A12 12 0 0012 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-playfair font-bold text-white">
                Éthéré Café
              </h2>
            </Link>
            <p className="mb-6 text-neutral-400 max-w-md">
              Experience the future of coffee with our premium blends and
              innovative brewing techniques. Where tradition meets modern
              craftsmanship in every cup.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-medium text-white text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {currentYear} Éthéré Café. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-500">
            <Link
              to="/privacy"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
