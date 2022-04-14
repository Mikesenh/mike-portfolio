import Image from "next/dist/client/image";
import classes from ".././util-css.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div class="container">
        <div className="row mt-5 mx-3">
          <div className="col-9 d-flex  justify-content-center flex-column">
            <h1 className={`${classes.textrighteous} `}>
              These Projects where build from the ground up.
            </h1>
            <h4 className={`${classes.textdosis} `}>
              I must confess, It’s a work in progress... with juggling school
              work and family responsibilities, I have not had enough time to
              work on my portfolio.
            </h4>
          </div>

          <div className="col-3 d-flex align-items-center justify-content-end">
            <Image
              src="/dev_portfolio.png"
              alt="photo of michael tran in a hexigon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-3 mb-5">
          <div className="col-sm-12 col-md-6 mt-5 d-flex align-items-center justify-content-center">
            <Image
              src="/mikesenh_thumbnail.png"
              alt="photo of michael tran in a hexigon"
              width={500}
              height={300}
            />
          </div>
          <div className="col mt-3 d-flex justify-content-center flex-column">
            <p className="m-0">
              HTML / CSS / JavaScript / React / Next / Boostrap
            </p>
            <h5 className="m-0">Personal Web Portfolio</h5>
            <small className="my-1">Created: 3/29/2022 - 4/28/2022</small>
            <p>
              Using everything I know about web development that I learned in
              school and creating a web portfolio to show off to future
              employeers...
            </p>
            <Link href="portfolio/mikesenh">
              <a href="">View Case Study</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
