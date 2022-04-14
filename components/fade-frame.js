import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FadeFrame(props) {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();
  console.log(inView);
  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    });
  }
  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={animationControl}
        className="box"
      >
        {props.children}
      </motion.div>
    </div>
  );
}
