import "./Recipes.css";
import me from "../images/me.jpg";
import strawb from "../images/strawberry.png";
import cookie from "../images/cookie.jpg";
import cakepop from "../images/cakepops.jpg";
import shoes from "../images/shoes.jpg";
import embroidery from "../images/embroidery.jpg";
import bee from "../images/bee.jpg";
import macarons from "../images/macarons.jpg";
import pins from "../images/pins.jpg";
import taiyaki from "../images/tayaki.jpg";
import shell from "../images/shell.jpg";

export default function About() {
  return (
    <>
      <header class="head">
        <a href="/home" class="logo">
          <img src={strawb} alt="" width="60px" class="home-logo" />
          Jenny
          <br></br>
          Ngo
        </a>
        <div class="topbutt">
          <a href="/Contact" class="topbutt">
            Contact
          </a>
          <a href="/Resume" class="topbutt">
            Resume
          </a>
          <a href="/About" class="topbutt">
            About Me
          </a>
          <a href="/home" class="topbutt">
            Home
          </a>
        </div>
      </header>

      <body class="body">
        <h1>About Me</h1>
        <img src={me} alt="" class="experience" />
        <p class="about">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Hi! My name is Jenny Ngo and I am a senior at the University of
          Georgia studying computer science. During both my academic journey and
          professional experience, I have honed my abilities in various
          programming languages, including Java, JavaScript, TypeScript, C#, and
          C++. At Goldman Sachs, I had the opportunity to work on a scheduled
          task automator using Node.js, TypeScript, MongoDB, and Jest. These
          experiences have enabled me to contribute effectively to both
          individual and team-based projects, as well as to deliver high-quality
          software solutions. I'm eager to apply my technical expertise and my
          drive for continuous learning to contribute to make a real impact.
        </p>
      </body>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h2>Hobbies</h2>
      <p>In my free time, I love to bake...</p>
      <img src={cookie} alt="" width="300px" class="about-img"/>
      <img src={cakepop} alt="" width="300px" class="about-img"/>
      <img src={macarons} alt="" width="300px" />
      <p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        sculpt...
      </p>
      <img src={bee} alt="" width="300px" class="about-img"/>
      <img src={taiyaki} alt="" width="300px" class="about-img"/>
      <img src={pins} alt="" width="300px" class="about-img"/>
      <img src={shell} alt="" width="300px" />
      <p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        and paint!
      </p>
      <img src={embroidery} alt="" width="300px" class="about-img"/>
      <img src={shoes} alt="" width="300px" />

      <div>
        <hr></hr>
        <p class="copyright">&copy; 2023 Jenny Ngo</p>
      </div>
    </>
  );
}
