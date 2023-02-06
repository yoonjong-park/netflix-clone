import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
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
  hover: { scale: 1.2, rotate: 90 },
  tab: {
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%",
  },
  drag: { backgroundColor: "rgb(46,204,133)" },
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);

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
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={1}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="tab">
          {/* default-parent props - initial="start" animate="end" */}
        </Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
