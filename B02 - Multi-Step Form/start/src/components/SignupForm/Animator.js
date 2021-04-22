import { motion } from "framer-motion"
import React from "react";

const Animator = ({ children }) => (
    <motion.div style={{ position: "absolute" }}
        initial={{ x: 200, scale: 0.5, opacity: 0.8 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{ x: -200, scale: 0.5, opacity: 0.8 }}>
        {children}
    </motion.div >
);
export { Animator };