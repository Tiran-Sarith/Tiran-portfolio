export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tran Wijerathne</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hey I'm Tiran </span>{" "}
            <br />
            Wijerathne
          </h1>
          <p className="hero--section-description">
            I am  currently seeking opportunities to apply my skills in real-world projects.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
