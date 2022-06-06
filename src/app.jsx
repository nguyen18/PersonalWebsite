import React from "react";
import "./styles/styles.css";
import "./scripts.js";

function App() {
  return (
    <div>
      <div id="progressbar">
        <a id="progressbarname"> taylor nguyen </a>
      </div>
      <Menu></Menu>

      <button onclick="scrollToTop()" id="totop" title="go to top">
        <a href="#centermain" id="totop">
          <img
            id="totopimage"
            src={
              "https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2F200w.gif?v=1631666423141"
            }
            alt="jump frog!"
          />
          <a id="totop">to top </a>
        </a>
      </button>

      <div id="centermain">
        <div id="messagebox">
          <div id="message">
            <a> Hello, World!</a>
            <a> I'm Taylor :)</a>
            <p> Nice to meet you!</p>
          </div>

          <div id="mainimage">
            <img
              id="mainimage"
              src={
                "https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2Fselfdrawing.PNG?v=1631834961542"
              }
              alt="Girl in a jacket"
            />
          </div>

          <div id="aboutjump"></div>

          <About>
            <p>
              Hello! I’m <Bold>Taylor Nguyen</Bold> and I’m a 4th year{" "}
              <Bold>Computer Science major</Bold> with a minor in
              <Bold> Learning, Design, and Technology</Bold> at{" "}
              <Bold> San Diego State University</Bold>. I have been playing with
              computers since elementary school but I became interested in
              programming in middle school when I played with the HTML on my
              Tumblr account. In high school, I joined 2 all-girls hackathons (
              <Bold>FemHacks ’17 </Bold>& <Bold>SuperPosition II ’18</Bold>) and
              joined <Bold>Girls Who Code</Bold>. In college, I continued to
              attend numerous all-girl hackathons, such as{" "}
              <Bold>AthenaHacks</Bold> and participated in an{" "}
              <Bold>Adobe Creative Jam</Bold> to push my design skills.
              Currently, I have worked on the
              <Bold> Data Center Team</Bold> at my school’s IT department since
              2019 as the
              <Bold> IT Computing Operations Student Assistant</Bold>. Outside
              of programming, I love picking up new hobbies and trying the best
              food in town! Currently, I have been into film photography and
              rock climbing :)
              <br></br>
              <br></br>
              <Bold>Let's Chat!</Bold> taylorjnguyen@gmail.com
              <br></br>
              <br></br>
              <Tags link="https://www.linkedin.com/in/taylor-julihanh-nguyen/">
                LinkedIn
              </Tags>
              <Tags link="https://github.com/nguyen18?tab=repositories&q=&type=public&language=&sort=">
                Github
              </Tags>
              <Tags link="https://www.canvas.com/app/profile/taylor-nguyen-1">
                Canvas
              </Tags>
            </p>
          </About>

          <div id="projectjump"></div>

          <Project
            title="Out of Office System"
            link="Github Repo"
            repo="https://github.com/nguyen18/Out-Of-Office"
          >
            <p>
              A google app scripts that turns a google spreadsheet and form into
              an out of office request and approval system. I aimed to improve
              efficiency of the team's out of office request system and wanted
              to streamline the process for the approver.
            </p>
            <br></br>
            <p style={{ float: "right" }}>
              <Tags>Google App Script</Tags> <Tags>Google Spreadsheets</Tags>{" "}
              <Tags>Google Forms</Tags>
            </p>
          </Project>

          <Project
            title="Ansible Playbooks"
            link="Github Repo"
            repo="https://github.com/nguyen18/AnsiblePlaybooks"
          >
            <p>
              Worked on collection of Ansible playbooks that aimed to improve
              effiency of reptitive tasks to save time for the rest of the team.
              A large collection of these playbooks were created to harden
              servers based off of security audits. In my team, I am one of the
              few people with programming experience so I was able to provide a
              helpful hand by creating these collection of playbooks.
            </p>
            <br></br>
            <p style={{ float: "right" }}>
              <Tags>Ansible</Tags> <Tags>YAML Playbooks</Tags>{" "}
              <Tags>Automation Language</Tags> <Tags>Effiency</Tags>
            </p>
          </Project>

          <Project
            title="WVD-KQL Queries"
            link="Github Repo"
            repo="https://github.com/nguyen18/WVD-KustoQueries"
          >
            <p>
              During the pandemic, many in-person labs had to be moved online,
              limiting access to many important and expensive progrgams that
              students needed in order to complete classs andd receive adequent
              hands-on learning. Our team suggested using Windows Virtual
              Desktop so that students could use these computers from home by
              remoting into them. I was in charge of creating KQL queries that
              monitored the use of these virtual computers in order to prove the
              usefulness to the rest of the department. Today, these virtual
              desktops are still used by staff members and students alike.
            </p>
            <br></br>
            <p style={{ float: "right" }}>
              <Tags>Kusto Query Language</Tags>{" "}
              <Tags>Windows Virtual Desktop</Tags> <Tags>Queries/Logs</Tags>{" "}
              <Tags>Microsoft Azure</Tags>
            </p>
          </Project>

          <Project
            title="Preventative Space"
            link="Github Repo"
            repo="https://github.com/nguyen18/PreventativeSpace"
          >
            <p>
              Created at AthenaHacks 2020, my team created a text-adventure game
              aimed to help spreaad awareness about protecting yourself from
              diseases such as Covid-19. You play as yourself in a first-person
              story game where your decisions matter about the outcome of your
              health. Created using Python and HTML/CSS, we made a website that
              has a console where users can interact with the game through a
              terminal-like setting. TO make it more immersive we wanted to
              implement the Twilio API so that users can receive the text
              messages from in-game.
            </p>
            <br></br>
            <p style={{ float: "right" }}>
              <Tags>Python</Tags> <Tags>HTML/CSS</Tags> <Tags>Game Dev</Tags>{" "}
              <Tags>Hackathon Project</Tags> <Tags>Twilio API</Tags>
            </p>
          </Project>

          <Project
            title="Reality Check"
            link="Presentation"
            repo="https://docs.google.com/presentation/d/1f4YANYCyGNlWnfUbBT2JYpWC34xWSPdMUgU7oO9jeZo/edit#slide=id.p"
          >
            <p>
              "Reality check" is a game that aims to mimic real life in a
              virtual simulation. The game is a text adventure focused on
              players’ decisions. We hope to help teach our players that life
              isn’t about where you were born, who you were born as and what
              social class you come from but rather success and happiness stem
              from your own unique decisions. We were inspired to create this
              game after many of our peers expressed they were faced with
              challenging ideas such as the pursuit of happiness. As high school
              students who are going to college next year/in a couple of years,
              we have pondered what it truly means to be successful and what
              causes success. We have concluded that life will only be as great
              as you want it to be through your own decisions. One feature I am
              particular proud of is the randomization of the player's
              demographics because I think that strongly represents a person's
              real life.
            </p>
            <br></br>
            <p style={{ float: "right" }}>
              <Tags>Python</Tags> <Tags>Repl.it</Tags>
              <Tags>Hackathon</Tags>
            </p>
          </Project>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p id="copyright">
            Taylor Nguyen's Personal Website!
            <br></br> 2021
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

const Links = () => {
  return (
    <div id="links">
      <a href="" id="linkedin" style={{ float: "left" }}>
        <img src="https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2Flinkedin.png?v=1631693156657" />
      </a>
      <a href="" id="github" style={{ float: "right" }}>
        <img src="https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2Fgithub.png?v=1631693164855" />
      </a>
      <a href="" id="mail">
        <img src="https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2Ffree-mail-icon-142-thumb.png?v=1631693162102" />
      </a>
    </div>
  );
};

const Tags = (props) => {
  return (
    <a id="taglink" className="contact_link" target="_blank" href={props.link}>
      <span id="tag">{props.children}</span>
    </a>
  );
};

const Bold = (props) => {
  return <strong id="bold">{props.children}</strong>;
};

const About = (props) => {
  return (
    <div class="aboutentry" id="aboutentry">
      <div id="leftside">
        <a>ABOUT ME</a>
        <img
          id="profilepic"
          src="https://cdn.glitch.com/01080ba4-47b0-4b63-b408-a85a28cb626e%2FIMG_7897.jpg?v=1631694857969"
        ></img>
      </div>
      <div id="rightside">{props.children}</div>
    </div>
  );
};

const Project = (props) => {
  return (
    <div>
      <div class="windowstop">
        <div id="windowbuttons"></div>
        <div id="windowbuttons"></div>
        <div id="windowbuttons"></div>
      </div>
      <div class="projectentry">
        <p id="projectentry">
          <b id="projectentry">{props.title}</b>{" "}
          <a id="projectentry" href={props.repo}>
            {props.link}
          </a>
          {props.children}
        </p>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div class="mainMenu" id="rightsidemenu">
      <MenuButton name="ABOUT" link="#aboutjump"></MenuButton>
      <MenuButton name="PROJECTS" link="#projectjump"></MenuButton>
      <MenuButton
        name="RESUME"
        target="_blank"
        link="https://docs.google.com/document/d/13xzI_8TDeLSUJ3Vc8m3lfTfjgJz_z8W3EE-BwjQv8rg/edit?usp=sharing"
      ></MenuButton>
    </div>
  );
};

const MenuButton = (props) => {
  return (
    <a id="menuButton" href={props.link} target={props.target}>
      {props.name}
    </a>
  );
};

export default App;
