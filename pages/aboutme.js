import classes from "./util-css.module.css";
import Image from "next/image";
//timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
//Animation
import FlyInRight from "../components/fly-in-right";
import FlyInLeft from "../components/fly-in-left";
import FadeFrame from "../components/fade-frame";

export default function AboutMe() {
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
            <h1 className={`${classes.colorblue} `}>Hi, I&apos;m Michael!</h1>

            <div
              className={`d-flex flex-column align-items-center justify-content-center`}
            >
              <div className={`${classes.textdosis} w-75`}>
                <p className={``}>
                  I was born and raised in Salt Lake City, Utah, and lived here
                  for my whole life. I am a first-generation college student,
                  one of many in my neighborhood. I always loved drawing ever
                  since I was little and that extends to loving art and design.
                  Although the stigma of pursuing art was frowned upon in my
                  family, I still opted to find a middle ground, programming was
                  that middle ground.
                </p>
                <p className={``}>
                  I grew up with those late 2000s computers with extra thick
                  screens and all they were where good for was surfing the web
                  with very slow dial-up internet. I remember wanting to learn
                  how to code, but nobody knew how to code, so it was not until
                  high school roughly the mid-2010s were their sites were
                  willing to teach coding courses for free. I took the
                  opportunity and it turns out I enjoyed coding.
                </p>

                <p className={``}>
                  Skip to me 2022 graduating with a Web UX & UI Degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.theblacklineNoMediaTop} ${classes.whitebackground}`}
      >
        <h2
          className={`${classes.colorblue} text-center m-4 ${classes.textrighteous}`}
        >
          Education
        </h2>

        <Timeline position="alternate" className="m-0">
          <TimelineItem>
            <TimelineOppositeContent>
              <h6 className={`${classes.textrighteous}`}>
                Spring 2017 - Summer 2020
              </h6>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h6 className={`${classes.textrighteous}`}>
                AS, Computer Science
              </h6>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <h6 className={`${classes.textrighteous}`}>
                AS, Information Technology
              </h6>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h6 className={`${classes.textrighteous}`}>
                Spring 2017 - Summer 2020
              </h6>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <h6 className={`${classes.textrighteous}`}>
                Summer 2020 - Summer 2022
              </h6>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <h6 className={`${classes.textrighteous}`}>BS, Web UX & UI</h6>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div
        className={`container-fluid text-center py-5 text-white ${classes.bluebackground} ${classes.textrighteous}`}
      >
        <h2>Why Me?</h2>
      </div>
      <div className="container">
        <div className="row">
          <div
            className={`col d-flex flex-column justify-content-center ${classes.textdosis} my-5 mx-3`}
          >
            <h2 className={`${classes.textrighteous} ${classes.colorblue}`}>
              Technical Reasons:
            </h2>
            <p> </p>
            <h4 className={`${classes.textrighteous} `}>
              1.{" "}
              <Image
                src="/wand-code.svg"
                alt="web developement image"
                width={40}
                height={20}
              />{" "}
              I’m a Web Dev Wizard.
            </h4>
            <h5>
              I’m well versed in the basics of HTML, CSS & Javascript. This also
              means I can learn any framework (I Love React BTW).
            </h5>
            <h4 className={`${classes.textrighteous}`}>
              2.{" "}
              <Image
                src="/protractor.svg"
                alt="web developement image"
                width={30}
                height={20}
              />{" "}
              Designing is in My Blood.
            </h4>
            <h5>
              Tools such as Figma, Adobe, Affinity I worked with all of them and
              I’ve know the prinicples of design, law of UX and I can sketch out
              my ideas!
            </h5>
            <h4 className={`${classes.textrighteous}`}>
              3.{" "}
              <Image
                src="/shapes.svg"
                alt="web developement image"
                width={20}
                height={20}
              />{" "}
              I Am Organized.
            </h4>
            <h5>
              I have a system to track and ensure that tasks get done. Want
              proof look at my 3.8 GPA!
            </h5>
          </div>
          <div className="col d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div className="d-flex justify-content-center align-items-center h-100">
              <FlyInRight>
                <Image
                  src="/unlock_aboutme.png"
                  alt="web developement image"
                  width={600}
                  height={600}
                />
              </FlyInRight>
            </div>
          </div>
        </div>
        <h2
          className={`text-center ${classes.textrighteous} ${classes.colorblue}`}
        >
          More Reasons:
        </h2>
        <div className={`row ${classes.textdosis} mb-5`}>
          <div className="col-sm-12 col-md-4 ">
            <FlyInLeft>
              <div className={`${classes.bordertalk2}`}>
                <Image
                  src="/microchip.svg"
                  alt="web developement image"
                  width={50}
                  height={50}
                />
                <h4 className={`${classes.textrighteous} mt-2`}>
                  I Got Code Mania
                </h4>
                <p>
                  Good or Bad... I do find myself coding in the dead of night...
                  It’s not contagious or Infectious. (I just get into the zone.)
                </p>
              </div>
            </FlyInLeft>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <FlyInLeft>
              <div className={`${classes.bordertalk2}`}>
                <Image
                  src="/coffee.svg"
                  alt="web developement image"
                  width={50}
                  height={50}
                />
                <h4 className={`${classes.textrighteous} mt-2`}>
                  I Do Not Need Coffee
                </h4>
                <p>
                  I do not need coffee to code, that&apos;s rare in the
                  development world! (and that can save you a pretty penny!
                </p>
              </div>
            </FlyInLeft>
          </div>
          <div
            className={`col-sm-12 col-md-4 d-flex flex-column align-items-center justify-content-center text-center`}
          >
            <FlyInLeft>
              <div className={`${classes.bordertalk2}`}>
                <Image
                  src="/floppy-disk.svg"
                  alt="web developement image"
                  width={50}
                  height={50}
                />
                <h4 className={`${classes.textrighteous} mt-2`}>
                  I Am Very Technical
                </h4>
                <p>
                  I’m not looking for an IT position, but I can definitely fix a
                  computer bug or error. I’ve also repaired some hardware in my
                  day.
                </p>
              </div>
            </FlyInLeft>
          </div>
        </div>
      </div>
    </>
  );
}
