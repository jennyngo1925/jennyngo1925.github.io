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

        {/* <div class="bod">
          <div class="body-container">
            <div class="left">
              <center>
                <h1>
                  Strawberry
                  <br></br>
                  Cupcakes
                </h1>
                <h2>
                  Soft, fluffy, and moist, these fresh Strawberry Cupcakes will
                  melt in your mouth!
                </h2>
                <button class="butt">
                  View Recipe
                </button>
              </center>
            </div>
            <div class="right">
              <img src={strawb} alt="" width="300px" />
            </div>
          </div>
        </div>

        <div class="bod">
          <div class="body-container">
            <div class="right">
              <img src={cookie} alt="" width="300px" />
            </div>
            <div class="left">
              <center>
                <h1>
                  Chocolate Chip
                  <br></br>
                  Cookies
                </h1>
                <h2>
                  These are everything a chocolate chip cookie should be. Crispy
                  and chewy. Doughy yet fully baked. Perfectly buttery and
                  sweet.
                </h2>
                <button onClick={cookie} class="butt">
                  View Recipe
                </button>
              </center>
            </div>
          </div>
        </div>

        <div class="bod">
          <div class="body-container">
            <div class="right">
              <img src={brownies} alt="" width="300px"/>
            </div>
            <div class="left">
              <center>
                <h1>Brownies</h1>
                <h2>
                  The Best Brownie Recipe Ever has the perfect crackly top with
                  bites of fudgy, chewy chocolate goodness. This easy one-bowl
                  recipe means you'll never buy a boxed brownie mix again!
                </h2>
                <button onClick={brownies} class="butt">
                  View Recipe
                </button>
              </center>
            </div>
          </div>
        </div> */}

        {/* <div class="last">
          <img src={pie} alt="" width="300px" />
        </div> */}
      </body>
      {/* 
      <footer class="foot">
        <label class="logo">
          Jenny
          <br></br>
          Ngo
        </label>
        <div class="flex-container">
          <label class="git">Get in Touch</label>

          <div>
            <h1>Mailing Address</h1>
            <h2>
              123 Anywhere St Any City, State,
              <br></br>
              Country 12345
            </h2>
          </div>

          <div>
            <h1>Email Address</h1>
            <h2>jennyngo1925@gmail.com</h2>
          </div>

          <div>
            <h1>Phone Number</h1>
            <h2>(770) 906-3987</h2>
          </div>
        </div>
      </footer> */}

      <div>
        <hr></hr>
        <p class="copyright">&copy; 2023 Jenny Ngo</p>
      </div>
    </>
  );
}
