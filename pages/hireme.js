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
        <Accordian />
      </div>
    </>
  );
}
