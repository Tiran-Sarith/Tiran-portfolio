export default function AboutMe() {
    return (
      <section
        id="AboutMe"
        className="about--section flex flex-col items-center py-12 px-4 bg-gray-100 text-gray-800 md:flex-row md:justify-center"
      >
        <div className="about--section--img flex-shrink-0 w-full md:w-1/2 max-w-md">
          <img
            src="./img/AboutMe.webp"
            alt="About Me"
            className="w-full rounded-lg shadow-lg"
            style={{width:'550px'}}
          />
        </div>
        <div className="hero--section--content--box about--section--box mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
          <div className="hero--section--content text-center md:text-left">

          <h1 class="skills-section-heading">
  Who am I?
</h1>
<p class="hero-section-description">
  I am a third-year undergraduate studying Computer Engineering at the Department of Computer Engineering,
  University of Ruhuna, with a strong foundation in software development, DevOps practices, and cloud technologies. 
  I am skilled in programming languages such as <span class="highlight">Python</span>, 
  <span class="highlight">Java</span>, and <span class="highlight">JavaScript</span>, with hands-on experience in modern tools like 
  <span class="highlight">Docker</span>, <span class="highlight">Kubernetes</span>, and <span class="highlight">Terraform</span>.
</p>
<p class="hero-section-description">
  My goal is to further enhance my knowledge and skills in 
  <span class="highlight">Data Science</span>, <span class="highlight">Machine Learning</span>, <span class="highlight">DevOps</span>, 
  and <span class="highlight">Software Engineering</span>, and apply them to push the boundaries of computer engineering.
</p>

          </div>
          <div className="footer--social--icon--about">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/tiran.sarith"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
            src="./img/FB.png"
            alt="About Me"
            style={{width:'40px'}}
          />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tiran_sarith/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
            src="./img/inster.png"
            alt="About Me"
            style={{width:'40px'}}
          />
              </a>
            </li>
            
            <li>
            <a
                href="https://www.linkedin.com/in/tiran-wijerathne-b2258b227/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
            src="./img/linkedin.png"
            alt="About Me"
            style={{width:'40px'}}
          />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </section>
    );
  }
  