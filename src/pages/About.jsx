import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg text-neutral-700 mb-6">
                Founded in 2022, Éthéré Café was born from a vision to create a
                coffee experience that balances traditional craftsmanship with
                futuristic innovation. Our name, derived from the French word
                for "ethereal," embodies our mission to craft coffee experiences
                that transcend the ordinary.
              </p>
              <p className="text-lg text-neutral-700">
                Today, we continue to push the boundaries of what coffee can be,
                while honoring the rich traditions that make this beloved
                beverage so special.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/public/images/interior1.jpg"
                alt="Éthéré Café interior"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading">
              The principles that guide everything we do, from sourcing beans to
              serving our customers
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                title: "Sustainability",
                description:
                  "From bean to cup, we prioritize environmentally responsible practices and support coffee-growing communities.",
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Innovation",
                description:
                  "We constantly explore new techniques, flavors, and technologies to create extraordinary coffee experiences.",
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
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                ),
                title: "Quality",
                description:
                  "We source only the finest beans and ingredients, and maintain meticulous standards in every aspect of our craft.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-neutral-50 rounded-xl shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium text-neutral-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="section-subheading">
              The passionate individuals behind our innovative coffee
              experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Eliza Chen",
                role: "Founder & Head Barista",
                image: "/public/images/t5.jpg",
                bio: "Coffee scientist and former tech executive with a passion for merging tradition with innovation.",
              },
              {
                name: "Marcus Reynolds",
                role: "Coffee Sourcing Director",
                image: "/public/images/t3.jpg",
                bio: "Travels the world to discover and build relationships with the best sustainable coffee farms.",
              },
              {
                name: "Sophia Patel",
                role: "Experience Designer",
                image: "/public/images/t6.jpg",
                bio: "Creates the sensory journeys that make each visit to Éthéré Café memorable and unique.",
              },
              {
                name: "James Wilson",
                role: "Culinary Director",
                image: "/public/images/t2.jpg",
                bio: "Award-winning pastry chef who designs our menu of coffee-complementing treats.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-medium text-neutral-800">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Our Journey</h2>
            <p className="section-subheading">
              The key milestones that shaped Éthéré Café into what it is today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>

            <div className="relative z-10">
              {[
                {
                  year: "2022",
                  title: "The Beginning",
                  description:
                    "Éthéré Café was founded with a vision to reimagine the coffee experience.",
                  isLeft: true,
                },
                {
                  year: "2023",
                  title: "First Location",
                  description:
                    "Our flagship café opened its doors, introducing our innovative approach to coffee.",
                  isLeft: false,
                },
                {
                  year: "2024",
                  title: "Bean-to-Cup Program",
                  description:
                    "Launched our direct trade program with coffee farmers across three continents.",
                  isLeft: true,
                },
                {
                  year: "2025",
                  title: "Expansion & Innovation",
                  description:
                    "Opened our second location and introduced our award-winning seasonal blends.",
                  isLeft: false,
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between mb-12 ${
                    milestone.isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`w-5/12 ${
                      milestone.isLeft ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-primary-600">
                      {milestone.year}
                    </h3>
                    <h4 className="text-xl font-medium text-neutral-800 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>

                  <div className="relative z-20 rounded-full w-10 h-10 flex items-center justify-center bg-primary-500 shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
