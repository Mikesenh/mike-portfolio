import classes from "./util-css.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
//Animation
import FlyInRight from "../components/fly-in-right";
import FlyInLeft from "../components/fly-in-left";
import FadeFrame from "../components/fade-frame";

export default function Home() {
  return (
    <>
      <div
        className={`container-fluid text-center py-5 ${classes.whitebackground}`}
      >
        <div className="container d-flex justify-content-center">
          <div className={`${classes.textrighteous}`}>
            <FadeFrame>
              <Image
                src="/hexagon-me-high.webp"
                alt="photo of michael tran in a hexigon"
                width={400}
                height={400}
              />
            </FadeFrame>
            <h4 className={`mt-3 ${classes.colorblue}`}>
              Hi, Welcome To My Website!
            </h4>
            <h1 className="text-dark">I’m Michael T.</h1>

            <h4 className={`${classes.colorblue} mb-3`}>
              Your Local Frontend Developer...
            </h4>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid text-center py-5 text-white ${classes.bluebackground} ${classes.textrighteous}`}
      >
        <h2>What do I bring to the table?</h2>
      </div>

      <div className="container">
        <div className={`row ${classes.theblacklineNoMedia} `}>
          <div className="col d-none d-md-block ">
            <div className="d-flex justify-content-center align-items-center h-100">
              <FlyInLeft>
                <Image
                  src="/web_index.webp"
                  alt="web developement image"
                  width={600}
                  height={600}
                />
              </FlyInLeft>
            </div>
          </div>

          <div className="col d-flex justify-content-center align-items-center">
            <div className={`${classes.bordertalk}`}>
              <Image
                src="/code_circle.svg"
                alt="web developement image"
                width={65}
                height={65}
              />
              <h3 className={`mt-2 ${classes.textrighteous}`}>
                Coding Knowleged
              </h3>
              <h5 className={`mt-2 ${classes.textdosis}`}>
                I have a degree in Computer Science, Information Systems, and
                Web UX/UI, I’ve mastered coding languages, I know a few coding
                stacks, but most importantly I know how to get the job done with
                code!
              </h5>
            </div>
          </div>
        </div>
        <div className={`row ${classes.theblacklineNoMedia}`}>
          <div className="col d-flex justify-content-center align-items-center">
            <div className={`${classes.bordertalk}`}>
              <Image
                src="/protractor_circle.svg"
                alt="web developement image"
                width={65}
                height={65}
              />
              <h3 className={`mt-2 ${classes.textrighteous}`}>UX Design</h3>
              <h5 className={`mt-2 ${classes.textdosis}`}>
                I’m certified in User Experience Design. I’ve studied the
                principles that can get users to buy more products and
                strategies to get more or less attention. Design should be
                functional but also lead with a purpose.
              </h5>
            </div>
          </div>
          <div className="col d-none d-md-block">
            <div className="d-flex justify-content-center align-items-center h-100">
              <FlyInRight>
                <Image
                  src="/design_index.webp"
                  alt="web developement image"
                  width={600}
                  height={600}
                />
              </FlyInRight>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className="col d-none d-md-block">
            <div className="d-flex justify-content-center align-items-center h-100">
              <FlyInLeft>
                <Image
                  src="/other_index.webp"
                  alt="web developement image"
                  width={600}
                  height={600}
                />
              </FlyInLeft>
            </div>
          </div>
          <div
            className={`col d-flex justify-content-center align-items-center`}
          >
            <div className={`${classes.bordertalk}`}>
              <Image
                src="/wand_circle.svg"
                alt="web developement image"
                width={65}
                height={65}
              />
              <h3 className={`mt-2 ${classes.textrighteous}`}>
                Some “Other” Stuff
              </h3>
              <h5 className={`mt-2 ${classes.textdosis}`}>
                I suppose if none of that interests you... I have some talents
                in cooking, writing, drawing, video editing, and tarot reading
                (to name a few hobbies).
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
