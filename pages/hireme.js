import Image from "next/image";
import classes from "./util-css.module.css";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Mailroom from "../components/mailroom";
import Accordian from "../components/accordion";

export default function HireMe() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
          <Image
            src="/pcrating_hireme.png"
            alt="web developement image"
            width={400}
            height={400}
          />
          <h2 className={`${classes.textrightious}`}>Lets Chat!</h2>
          <p className={`${classes.textdosis}`}>
            If you think I would be a good fit, feel free to contact me!
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <a
              class={`btn btn-dark mx-2 ${classes.bluebackground}`}
              href="https://www.linkedin.com/in/michael-tran-20462112a/"
              role="button"
            >
              Linkedin
            </a>
            <a
              class={`btn btn-dark mx-2 ${classes.bluebackground}`}
              href="https://docs.google.com/document/d/1zGDkm_fd8ZLPLw8e0TPzhI5FS8-Xvpyp/edit?usp=sharing&ouid=112932056368148513921&rtpof=true&sd=true"
              role="button"
            >
              View Resume
            </a>
            <a
              class={`btn btn-dark mx-2 ${classes.bluebackground}`}
              href="https://github.com/Tewinsky"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      {/*Break*/}

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 my-5">
            <div className={`${classes.displaybox} h-100 ${classes.textdosis}`}>
              <div className="text-center pt-5">
                <Image
                  src="/mail_hireme.png"
                  alt="(801) 634-7693"
                  men
                  width={125}
                  height={125}
                />
                <h4 className={`${classes.textrighteous}`}>Contact Me...</h4>
                <p>please feel free to reach out to me first!</p>
              </div>

              <div className=" d-flex align-items-center justify-content-center flex-column pt-3 pb-5">
                <div className="d-flex align-items-center my-2">
                  <Image
                    src="/phone.svg"
                    alt="(801) 634-7693"
                    width={25}
                    height={25}
                  />
                  <h5 className="mx-2">(801) 634-****</h5>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image
                    src="/envelope.svg"
                    alt="michaeltranperson@gmail.com"
                    width={25}
                    height={25}
                  />
                  <h5 className="mx-2">michaeltranperson@gmail.com</h5>
                </div>
                <div className="d-flex align-items-center my-2">
                  <Image
                    src="/location-dot.svg"
                    alt="somewhere in salt lake city, utah"
                    width={25}
                    height={25}
                  />
                  <h5 className="mx-2">Somewhere in Salt Lake City, Utah</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 my-5 ">
            <div className={`${classes.displaybox} `}>
              <div
                className={`d-flex align-items-center justify-content-center flex-column pt-5 ${classes.textrighteous}`}
              >
                <h4>...or Message Me.</h4>
              </div>
              <div
                className={`d-flex flex-column pt-3 pb-5 ${classes.textdosis}`}
              >
                <Mailroom />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid pt-5 mt-5 ${classes.theblacklineNoMediaTop} mb-3`}
      >
        <h3 className={`text-center ${classes.textrighteous}`}>
          Questions I’ll Answer in Advance:
        </h3>
        <>
          <div
            className={`d-flex align-items-center justify-content-center ${classes.textdosis}`}
          >
            <div className="container m-5">
              <div className="accordion" id="accordionExample">
                <div
                  className={`accordion-item ${classes.blackborderoverride}`}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Where Do You Get Your Tech News?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      I mainly get my tech news from YouTube and Google News.
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item ${classes.blackborderoverride}`}
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do You Work Best Alone or as Part of a Team?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      I can do both! In college there were a lot of solo
                      projects that I'd got a perfect score on, the same goes
                      for team projects. I honestly enjoy team projects a bit
                      more as collaboration is more fun and enjoyable.
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item ${classes.blackborderoverride}`}
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Describe Your Quality Control Process.
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      It's a lot of reformatting over and over again, so first I
                      make sure that everything works not caring about how it
                      looks, and then later go back to making it look pretty.
                      Sometimes I do become obsessed and will redo a project to
                      make sure I reorganize and optimize everything!
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item ${classes.blackborderoverride}`}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      How Did You Learn to Program?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      I started to officially learn how to program near the end
                      of high school, I started going on sites like Udemy,
                      SoloLearn, and FreeCodeAcademy to educate myself as my
                      high school did not offer any coding classes. I like it so
                      much I decided to go to get a degree in it!
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item ${classes.blackborderoverride}`}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      What Are Your Salary Expectations?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      In short, I'm looking for a Competitive Salary and I'll
                      impress you, with my work ethic, knowledge, and skills!
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item ${classes.blackborderoverride} ${classes.accordionButtonLast}`}
                >
                  <h2 className={`accordion-header`} id="headingOne">
                    <button
                      className={`accordion-button ${classes.accordionButton} ${classes.textrighteous} collapsed `}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      What Programming Languages do you Know?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      I know the three primary web programming languages:
                      HTML/CSS/JavaScript as well as other languages such as
                      PHP/Java, I know a bit of Python and Visual Basic. The
                      framework includes Vue and React. Database like MongoDB
                      and MySQL. I can make a full-stack application, but I
                      prefer to work on the front-end where things are visual!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
