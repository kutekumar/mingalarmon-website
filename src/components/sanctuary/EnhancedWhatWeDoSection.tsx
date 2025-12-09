import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Dumbbell, 
  Bus, 
  Car, 
  Wifi, 
  Film, 
  Plane,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Restaurant",
    description: "Authentic Myanmar cuisine and international dishes served with care",
    icon: <Utensils className="w-6 h-6" />,
    features: ["24/7 Room Service", "Traditional Cuisine", "International Menu", "Chef's Special Table"],
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    title: "Gym",
    description: "State-of-the-art fitness equipment for your wellness journey",
    icon: <Dumbbell className="w-6 h-6" />,
    features: ["Modern Equipment", "Personal Trainer", "Yoga Classes", "Steam Room"],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Tour Bus",
    description: "Explore the beauty of Myanmar with our guided tours",
    icon: <Bus className="w-6 h-6" />,
    features: ["City Tours", "Temple Visits", "Cultural Experiences", "Full Day Trips"],
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    title: "Car Rental",
    description: "Convenient transportation for your independent exploration",
    icon: <Car className="w-6 h-6" />,
    features: ["Airport Pickup", "Self-Drive Option", "Chauffeur Service", "GPS Navigation"],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 5,
    title: "WiFi",
    description: "High-speed internet connectivity throughout the property",
    icon: <Wifi className="w-6 h-6" />,
    features: ["High-Speed Internet", "All Areas Covered", "VPN Access", "24/7 Support"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 6,
    title: "Movie Theater",
    description: "Premium cinema experience with the latest blockbusters",
    icon: <Film className="w-6 h-6" />,
    features: ["3D Movies", "Private Screenings", "Premium Seating", "Snack Bar"],
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 7,
    title: "Airplane Ticketing",
    description: "Hassle-free flight booking for your travel needs",
    icon: <Plane className="w-6 h-6" />,
    features: ["International Flights", "Domestic Routes", "Group Booking", "Travel Insurance"],
    color: "from-orange-500 to-orange-600"
  }
];

export const EnhancedWhatWeDoSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8A0505]/10 dark:bg-[#FF6B6B]/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#8A0505] dark:text-[#FF6B6B]" />
            <span className="text-sm font-semibold text-[#8A0505] dark:text-[#FF6B6B]">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            What We <span className="text-[#8A0505] dark:text-[#FF6B6B]">Do</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience authentic Myanmar hospitality with our comprehensive range of premium services designed to make your stay unforgettable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              layoutId={`service-${service.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="px-2 py-1 bg-[#8A0505]/10 dark:bg-[#FF6B6B]/10 text-[#8A0505] dark:text-[#FF6B6B] text-xs rounded-md font-medium">
                      +{service.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Hover Indicator */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      className="flex items-center gap-1 text-[#8A0505] dark:text-[#FF6B6B] font-medium text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                layoutId={`service-${selectedService.id}`}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-gray-700"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedService.color} flex items-center justify-center text-white`}>
                      {selectedService.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white">{selectedService.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-500 rotate-90" />
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Service Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService.color}`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-3 bg-gradient-to-r ${selectedService.color} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg`}
                  onClick={() => setSelectedService(null)}
                >
                  Explore This Service
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};