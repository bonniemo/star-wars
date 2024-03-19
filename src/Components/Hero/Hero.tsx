import "./Hero.css";
import starBg from "../../images/Space-Bg.jpg";
import yoda from "../../images/yoda.png";

const Hero = () => {
  return (
    <>
    <article className="hero">
      {/* <img src={starBg} alt="" className="star-bg" /> */}
      <section className="heading">
      <h1><span>Find</span> your teacher</h1>
      </section>
      <section className="yoda-wrap">
        <img src={yoda} alt=""/>
      </section>
    <nav>
        <ul>
            <li><a href="#">Search Teacher</a></li>
            <li><a href="#">Search arena</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Log In</a></li>
        </ul>
    </nav>
    </article>
    </>
  );
};

export default Hero;
