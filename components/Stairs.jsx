"use client";
import { motion } from "framer-motion";

// variants
const StairTransition = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    },
}


// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>

            {/* render 6 motion divs, each representing a step of the stairs.
            Each div will have the same animation defined by the StairTransition object,
            The delay for each div is calculated sinomically based on it's reverted index,
            Creating a staggered effect with decreasing delay for each subsequent step.
            */}

            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={StairTransition}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            delay: reverseIndex(index) * 0.1,
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;