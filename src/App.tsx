import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #006eff, #b3ff00);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  border-radius: 40px;
  display: flex;
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
`;

const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const prevPlease = async () => {
    await setBack(false);
    setVisible(prev => (prev === 1 ? 1 : prev - 1));
  };

  const nextPlease = async () => {
    await setBack(true);
    setVisible(prev => (prev === 10 ? 10 : prev + 1));
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <Box
          custom={back}
          key={visible}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit">
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
