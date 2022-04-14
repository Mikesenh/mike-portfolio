import Image from "next/image";
import classes from "./util-css.module.css";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function HireMe() {
  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
          <h2 className={`${classes.textrightious}`}>Let's Chat!</h2>
          <p className={`${classes.textdosis}`}>
            If you think I'd be a good fit, feel free to contact me!
          </p>
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
                  <h5 className="mx-2">(801) 634-7693</h5>
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
                <form className="mx-5">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name / Company</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1"> Contact Info</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Title / Topic</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
