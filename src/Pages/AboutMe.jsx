export default function AboutMe() {
    return (
      <section
        id="AboutMe"
        className="about--section flex flex-col items-center py-12 px-4 bg-gray-100 text-gray-800 md:flex-row md:justify-center"
      >
        <div className="about--section--img flex-shrink-0 w-full md:w-1/2 max-w-md">
          <img
            src="./img/Tiran-cover.png"
            alt="About Me"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="hero--section--content--box about--section--box mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
          <div className="hero--section--content text-center md:text-left">

            <h1 className="skills-section--heading text-3xl font-bold text-gray-800 mt-2">
              Who am I?
            </h1>
            <p className="hero--section-description text-lg text-gray-600 mt-4">
            Third year undergraduate studying Computer Engineering at the Department of Computer Engineering,
 University of Ruhuna, with a strong foundation in software development, DevOps practices, and cloud technologies. I am skilled in programming languages such as Python, Java, and JavaScript, with hands-on experience in
 modern tools like Docker, Kubernetes, and Terraform. 
            </p>
            <p className="hero--section-description text-lg text-gray-600 mt-4">
            My goal is to further enhance my knowledge and skills in
 data Science, machine Learning, DevOps, and software engineering, and apply them to push the boundaries of
 computer engineering.
            </p>
          </div>
        </div>
      </section>
    );
  }
  