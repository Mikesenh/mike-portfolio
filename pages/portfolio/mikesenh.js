import Image from "next/dist/client/image";
import classes from ".././util-css.module.css";

export default function Portfolio() {
  return (
    <>
      <div
        className={`container d-flex align-items-center flex-column ${classes.textdosis}`}
      >
        <h1 className={`${classes.textrighteous} pt-5 mt-5`}>
          Case Study : Mikesenh
        </h1>
        <p>4/1/2022 - 5/1/2022</p>
        <p className={`${classes.width100onsmalland50whenlarge} text-center`}>
          Welcome! this is my first case study on the site of my site mikesenh!
          Anyone serious about web development should make a web portfolio, they
          said and I thought how? with the combination of work and school and
          social life, it’s impossible! not impossible just take a bit of work.
        </p>
        <h2 className={`${classes.textrighteous} text-center mt-5 mb-3`}>
          <span className={`${classes.darkhighlight} p-1 px-5`}>
            Design Inspiration
          </span>
        </h2>
        <Image
          src="/casestudy_image1.png"
          alt="photo of michael tran in a hexigon"
          width={600}
          height={400}
        />
        <p
          className={` ${classes.width100onsmalland50whenlarge} text-center mt-2`}
        >
          The design is inspired by minimalism, as well as a hint of Corporate
          Memphis and Google’s Material Design. I simply like these ideas and
          principles and figured I’d build my first portfolio website based on
          that theme, something that reflects me.
        </p>
        <a href="https://www.figma.com/file/MvWlbZmdBoMhswccoilhpg/My-Jumpstart!?node-id=0%3A1">
          Click Here to Access the Figma File: Wireframe & Prototypes
        </a>
        <h2 className={`${classes.textrighteous} text-center mt-5 mb-3`}>
          <span className={`${classes.darkhighlight} p-1 px-5`}>
            Color Palette
          </span>
        </h2>
        <Image
          src="/casestudy_image2.png"
          alt="photo of michael tran in a hexigon"
          width={500}
          height={500}
        />
        <p
          className={` ${classes.width100onsmalland50whenlarge} text-center mt-2`}
        >
          The goals with the colors were to have any colorwork with the site,
          but a few major colors do pop out. I’d used the color dark cyan
          because it’s a color that invokes thought and intelligence, while
          firebrick red as the logo because of how much it pops!
        </p>
        <h2 className={`${classes.textrighteous} text-center mt-5 mb-3`}>
          <span className={`${classes.darkhighlight} p-1 px-5`}>
            Font Pairings
          </span>
        </h2>
        <Image
          src="/casestudy_image3.png"
          alt="photo of michael tran in a hexigon"
          width={750}
          height={350}
        />
        <p
          className={` ${classes.width100onsmalland50whenlarge} text-center mt-2`}
        >
          There is science behind it, a wanted something retro, but also modern
          something that is simple to fit with the minimalist feel as well as
          get along with Corporate Memphis, so this is what I came up with!
        </p>
        <h2 className={`${classes.textrighteous} text-center mt-5 mb-4`}>
          <span className={`${classes.darkhighlight} p-1 px-5`}>
            Made with React
          </span>
        </h2>
        <Image
          src="/casestudy_image4.png"
          alt="photo of michael tran in a hexigon"
          width={100}
          height={100}
        />
        <p
          className={` ${classes.width100onsmalland50whenlarge} text-center mt-4`}
        >
          Yes, HTML, CSS, and JavaScript are the core web languages with
          React.js as the main driver. I added Next.js for routing, API calling
          ... Sendgrid to send emails from forms. Bootstrap for CSS flavor. I
          wanted to keep it simple seeing that I only had one month to design
          and code it all!
        </p>
        <a
          className="mb-5 pb-5"
          href="https://github.com/Tewinsky/mike-portfolio"
        >
          Click Here for the Github Repo: Code & Developement
        </a>
      </div>
    </>
  );
}
