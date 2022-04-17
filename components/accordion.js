import classes from "../pages/util-css.module.css";

export default function Accordian() {
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center ${classes.textdosis}`}
      >
        <div className="container m-5">
          <div className="accordion" id="accordionExample">
            <div className={`accordion-item ${classes.blackborderoverride}`}>
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
            <div className={`accordion-item ${classes.blackborderoverride}`}>
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
                  I can do both! In college there were a lot of solo projects
                  that I'd got a perfect score on, the same goes for team
                  projects. I honestly enjoy team projects a bit more as
                  collaboration is more fun and enjoyable.
                </div>
              </div>
            </div>
            <div className={`accordion-item ${classes.blackborderoverride}`}>
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
                  make sure that everything works not caring about how it looks,
                  and then later go back to making it look pretty. Sometimes I
                  do become obsessed and will redo a project to make sure I
                  reorganize and optimize everything!
                </div>
              </div>
            </div>
            <div className={`accordion-item ${classes.blackborderoverride}`}>
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
                  I started to officially learn how to program near the end of
                  high school, I started going on sites like Udemy, SoloLearn,
                  and FreeCodeAcademy to educate myself as my high school did
                  not offer any coding classes. I like it so much I decided to
                  go to get a degree in it!
                </div>
              </div>
            </div>
            <div className={`accordion-item ${classes.blackborderoverride}`}>
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
                  framework includes Vue and React. Database like MongoDB and
                  MySQL. I can make a full-stack application, but I prefer to
                  work on the front-end where things are visual!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
