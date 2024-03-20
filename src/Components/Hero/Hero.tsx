import "./Hero.css";
import yoda from "../../images/yoda.png";

const Hero = () => {
  return (
    <>
      <article className="hero">
        {/* <img src={starBg} alt="" className="star-bg" /> */}
        <section className="heading">
          <h1>
            <span>Your Journey</span>Begins Here
          </h1>
          <p>
            As Master Yoda once said,
            <span>"Do. Or do not. There is no try."</span>
          </p>
          <p>
            Channel the wisdom of your chosen mentors as you traverse the paths
            of both web development and the Force.
          </p>
        </section>
        <section className="yoda-wrap">
          <img src={yoda} alt="" />
        </section>
        <nav>
          <ul >
            <li>
              <a href="#">Search Teacher</a>
            </li>
            <li>
              <a href="#">Search arena</a>
            </li>
            <li>
              <a href="#">Classes</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </article>
      {/* <p>
            With
            Galactic Tutors, you'll be empowered to not only seek knowledge but
            to embrace it fully, channeling the wisdom of your chosen mentors as
            you traverse the paths of both web development and the Force.
          </p> */}
    </>
  );
};

export default Hero;
