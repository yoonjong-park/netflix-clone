import React from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVaris = {
  start: { scale: 0 },
  end: { rotateZ: 360, scale: 1, transition: { type: "spring", delay: 0.5 } },
};

const boxVariants: Variants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants: Variants = {
  start: {
    y: 10,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

function App() {
  return (
    <Wrapper>
      {/* Animation */}
      {/* <Box
        initial={{ scale: 0 }}
        animate={{ rotateZ: 360, scale: 1 }}
        transition={{
          type: "spring",
          delay: 0.5,
        }}
      /> */}
      {/* Variants */}
      {/* <Box variants={myVaris} initial="start" animate="end" /> */}
      <Box variants={boxVariants} initial="start" animate="end">
        {/* default-parent props - initial="start" animate="end" */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
