import "./Home.css";
import strawb from "../images/strawberry.png";
import thankyou from "../images/thankyou.gif";

export default function Login() {
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
          <a href="/contact" class="topbutt">
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
        <h1>Contact</h1>
        <img src={thankyou} alt="" width="300px" />
        <br></br>
        <br></br>
        <form action="mailto:jennyngo1925@gmail.com" method="GET">
          <label>Subject: </label>
          <input name="subject" type="text" size="50" />
          <br></br>
          <br></br>
          <label>Email: </label>
          <input name="email" type="text" size="50" />
          <br></br>
          <br></br>
          <label>Message: </label>
          <br></br>
          <textarea rows="10" cols="100"></textarea>
          <br></br>
          <br></br>
          <div>
            <input class="butt" type="submit" value="Send" />
          </div>
        </form>
      </body>
      <br></br>
      <br></br>
      <br></br>

      <div>
        <hr></hr>
        <p class="copyright">&copy; 2023 Jenny Ngo</p>
      </div>
    </>
  );
}
