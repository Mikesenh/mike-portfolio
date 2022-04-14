import Link from "next/link";
import classes from "../pages/util-css.module.css";

export default function NavFoot(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light .fixed-top ${classes.theblacklineNoMedia}`}
      >
        <div className="container">
          <Link href="/">
            <a
              className={`navbar-brand ${classes.theredcolor} ${classes.textrighteous} `}
            >
              Mikesenh
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <ul
                className={`navbar-nav me-auto mb-2 mb-lg-0 ${classes.textrighteous}`}
              >
                <li className="nav-item">
                  <Link href="/aboutme">
                    <a
                      className={`nav-link ${classes.hoverBlue}`}
                      aria-current="page"
                      href="#"
                    >
                      About Me
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/portfolio">
                    <a className={`nav-link ${classes.hoverBlue}`} href="#">
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/hireme">
                    <a className={`nav-link ${classes.hoverBlue}`} href="#">
                      Hire Me!
                    </a>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <>{props.children}</>
      <footer
        className={`container-fluid ${classes.theblacklineNoMediaTop} p-0 ${classes.textrighteous}`}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 col-sm-6 d-none d-sm-block d-lg-block d-xl-block">
              <div className="d-flex align justify-content-center align-items-center flex-column">
                <h3 className="mx-4 mt-5">“Stay hungry. Stay foolish.”</h3>
                <h4>- Steve Jobs</h4>
              </div>
            </div>
            <div
              className={`col-md-5 col-sm-6 d-flex flex-column justify-content-center px-5 ${classes.borderblacklineleft} `}
            >
              <h3>Infomation:</h3>
              <p>
                Salt Lake City, Utah <br></br>
                801-634-7693
              </p>
              <Link href="/aboutme">
                <h6 className={`${classes.hoverBlue}`}>About Me</h6>
              </Link>
              <Link href="/portfolio">
                <h6 className={`${classes.hoverBlue}`}>Portflio</h6>
              </Link>
              <Link href="/hireme">
                <h6 className={`${classes.hoverBlue}`}>Hire Me!</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className={`text-center mt-5 border-top`}>
          <h5 className={`m-0 mt-3 text-danger ${classes.theredcolor}`}>
            Mikesenh
          </h5>
          <p>© 2022-2023 Mikesenh Dev Portfolio, Inc.</p>
        </div>
      </footer>
    </>
  );
}
