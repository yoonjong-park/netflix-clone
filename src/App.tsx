import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
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
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useMotionValueEvent(scrollY, "change", latest => {
    console.log("scrollY : ", latest);
  });
  useMotionValueEvent(scrollYProgress, "change", latest => {
    console.log("scrollYProgress : ", latest);
  });

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
