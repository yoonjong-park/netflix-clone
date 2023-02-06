import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";
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
  //변수 명이 css property와 같을 경우, style 내부에 그대로 넣을 수 있다.
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  //

  // useMotionValueEvent(x, "change", l => {
  //   // useMotionValue is not React Component. so NOT re rendered.
  //   console.log(l);
  // });

  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
