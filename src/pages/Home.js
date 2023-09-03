import "./Home.css";
import me from "../images/me2.jpg";
import strawb from "../images/strawberry.png";

export default function Home() {
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

      <body class="bod">
        <div class="body-container">
          <div class="left">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Hi There!</h1>
            <h2>
              Welcome to Jenny Ngo's website! Navigate to any section on the
              navbar above to learn more about me!
            </h2>

            <center>
              <a href="/Contact">
                <button class="butt">Contact Me!</button>
              </a>
            </center>
          </div>
          <div class="right">
            <img src={me} alt="" width="400px" />
          </div>
        </div>
      </body>
      <div>
        <hr></hr>
        <p class="copyright">&copy; 2023 Jenny Ngo</p>
      </div>
    </>
  );
}
