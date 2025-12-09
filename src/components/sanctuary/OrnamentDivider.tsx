import { motion } from "framer-motion";

export function OrnamentDivider() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <motion.span className="h-px w-24 bg-gradient-to-r from-transparent to-gold/60" initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
          <motion.div className="relative" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center bg-card/70 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
          </motion.div>
          <motion.span className="h-px w-24 bg-gradient-to-l from-transparent to-gold/60" initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
        </div>
      </div>
    </div>
  );
}
