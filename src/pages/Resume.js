import "./Recipes.css";
import dae from "../images/dae.png";
import byte from "../images/byte.png";
import aasa from "../images/aasa.png";
import girlscode from "../images/girlscode.jpeg";
import gslogo from "../images/gslogo.png";
import ymca from "../images/ymca.png";
import hg from "../images/hg.jpeg";
import strawb from "../images/strawberry.png";

export default function Resume() {
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
        <h1>Resume</h1>
        <img src={dae} width="30%" alt="" class="resume-right" />
        <p align="left">
          <h2>Relevant Work Experience:</h2>
          <h3>University of Georgia DAE</h3>
          <h4>
            <i>Computer Science and Math Peer Tutor,</i> August 2022 - Present
          </h4>
          • Provide individual and group tutoring sessions to students in
          software development, data structures, and web development.<br></br>•
          Explain complex concepts in a clear and understandable manner,
          tailoring teaching methods to meet each student's unique learning
          style.<br></br>• Teach techniques for problem-solving and debugging,
          so students can continue working and learning independently.<br></br>•
          Sharpen students’ understanding of concepts by creating custom
          practice questions.<br></br>• Partner with students to set academic
          goals and develop action plans to achieve them.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={gslogo} width="30%" alt="" class="resume-left" />
          <h3>
            <a href="https://www.goldmansachs.com/">Goldman Sachs</a>
          </h3>
          <h4>
            <i>DevOps Summer Analyst,</i> June 2023 - August 2023
          </h4>
          • Engineered an engine that allows users to configure resources and
          set a schedule for automatic task execution.<br></br>• Designed and
          developed a scalable system using leader-follower and service-oriented
          architectures.<br></br>• Designed and developed REST APIs using
          Node.js, Express.js, and Mongoose for seamless communication between
          the front-end applications and back-end system.<br></br>• Implemented
          and executed unit tests using Jest, ensuring high code coverage and
          reliable software quality.<br></br>• Created and maintained detailed
          technical documentation, including API documentation and database
          schema diagrams.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={dae} width="30%" alt="" class="resume-right" />
          <h3>University of Georgia DAE</h3>
          <h4>
            <i>Peer Learning Assistant,</i> January 2023 - May 2023
          </h4>
          • Worked closely with the professor in weekly meetings to develop
          lesson plans for the Intro Programming course.<br></br>• Strengthened
          students' comprehension of fundamental Java concepts through
          explanations and addressing questions.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={gslogo} width="30%" alt="" class="resume-left" />
          <h3>
            <a href="https://www.goldmansachs.com/">Goldman Sachs</a>
          </h3>
          <h4>
            <i>Engineering Summer Analyst,</i> June 2022 - August 2022
          </h4>
          • Spearheaded the migration of a legacy back-end service, leveraging
          Spring Boot to enhance performance, scalability, and maintainability.
          <br></br>• Ensured the application's reliability by developing a suite
          of comprehensive Junit tests, covering critical functionalities.
          <br></br>• Optimized the transfer process by creating a Docker image
          of the application, ensuring consistent performance across
          environments.<br></br>• Achieved precise and independent deployments
          by encapsulating the landing page's footer as a micro-frontend,
          utilizing Angular, HTML, and CSS (Bootstrap 4).<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Campus Invovlement/Extracirricular:</h2>
          <img src={aasa} width="30%" alt="" class="resume-right" />
          <h3>Asian American Student Association</h3>
          <h4>
            <i>Peer Mentor,</i> August 2022 - May 2023
          </h4>
          • Provided guidance and mentorship to a group of 12 first-year
          students to ease their transition into college life.<br></br>•
          Collaborated with other mentors to organized and lead weekly group
          sessions, addressing academic, personal, and social challenges.
          <br></br>• Engaged closely with the mentoring team to develop and
          implement effective mentoring strategies and initiatives.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={byte} width="30%" alt="" class="resume-left" />
          <h3>
            <a href="https://8.ugahacks.com/">UGAHacks Organizer</a>
          </h3>
          <h4>
            <i>Marketing and Community Engagement and Organizer,</i> July 2021 -
            August 2022
          </h4>
          • Administered social media profiles, maintaining a weekly posting
          schedule to actively interact with hackathon participants.<br></br>•
          Crafted promotional materials and visual content for social media
          platforms through Canva, increasing attendance by 100%.<br></br>•
          Oversaw and provided leadership for 800 students during the 48-hour
          hackathon. This included judging hackathon projects, assisting with
          project development, answering inquiries, and coordinating logistics.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={girlscode} width="30%" alt="" class="resume-right" />
          <h3>Girls.Code()</h3>
          <h4>
            <i>Treasurer,</i> May 2021 - May 2022
          </h4>
          • Managed club finances, overseeing expenses, and maintaining the club
          budget using Excel for accurate financial record-keeping.<br></br>•
          Led and coordinated regular club meetings in collaboration with fellow
          board members.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Other Work Experience:</h2>
          <img src={ymca} width="30%" alt="" class="resume-left" />
          <h3>YMCA</h3>
          <h4>
            <i>Art Teacher,</i> February 2023 - May 2023
          </h4>
          • Developed, led, and instructed art projects to a class of 5- to
          6-year-olds.<br></br>• Taught knowledge and skills in art, including
          drawing, painting, crafts, and art history.<br></br>• Maintained
          discipline in accordance with the rules and disciplinary systems of
          the center.<br></br>• Provided individual and small-group instruction
          to adapt the curriculum to the needs of students with varying
          intellectual and artistic abilities, and to accommodate a variety of instructional activities.
          <br></br>• Communicated with parents regarding student needs and/or
          problems.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={hg} width="30%" alt="" class="resume-right" />
          <h3>Hansel & Gretel</h3>
          <h4>
            <i>Barista,</i> August 2022 - November 2022
          </h4>
          • Welcomed customers, described menu items, took orders, and processed
          payments.<br></br>• Prepared and served hot and cold beverages
          including teas and espresso-based drinks using an espresso machine.
          <br></br>• Washed dishes and restocked bar line for fast service.
          <br></br>• Replenished and rotated bread and cake items, following
          correct food cooling and storage procedures.<br></br>• Decorated and
          maintained freezer and refrigerated showcase. Dynamically sold
          products by providing customers with the information needed to make
          product-related decisions.<br></br>• Managed high-volume workload
          within a fast paced-environment.<br></br>• Handled customer calls,
          responded to inquiries, and resolved ordering conflicts.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </body>

      <div>
        <hr></hr>
        <p class="copyright">&copy; 2023 Jenny Ngo</p>
      </div>
    </>
  );
}
