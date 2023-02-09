import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #006eff, #b3ff00);
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  position: absolute;
  border-radius: 40px;
  top: 100px;
  margin-bottom: 20px;
  background-color: white;
`;

const BoxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing(!showing);

  return (
    <Wrapper>
      <AnimatePresence>
        {showing && (
          <Box
            variants={BoxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
      <button onClick={toggleShowing}>click</button>
    </Wrapper>
  );
}

export default App;
