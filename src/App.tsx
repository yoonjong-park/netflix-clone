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

const BoxVariants = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

function App() {
  const [visible, setVisible] = useState(1);
  const prevPlease = useCallback(() => {
    setVisible(prev => (prev === 1 ? 1 : prev - 1));
  }, []);

  const nextPlease = useCallback(() => {
    setVisible(prev => (prev === 10 ? 10 : prev + 1));
  }, []);

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
          i =>
            i === visible && (
              <Box
                key={i}
                variants={BoxVariants}
                initial="invisible"
                animate="visible"
                exit="exit">
                {i}
              </Box>
            )
        )}
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
