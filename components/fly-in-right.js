import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FlyInRight(props) {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();
  console.log(inView);
  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.7,
      },
    });
  }
  return (
    <div ref={ref}>
      <motion.div
        initial={{
          x: "100vw",
        }}
        animate={animationControl}
        className="box"
      >
        {props.children}
      </motion.div>
    </div>
  );
}
