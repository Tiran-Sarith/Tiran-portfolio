import './style.css'


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          
        <h1 class="hero-section-title">
  <span class="hero-section-title-color">Hey, I'm Tiran</span>
  <br />
  Wijerathne
</h1>
<p class="hero-section-description">
  I am currently seeking opportunities to apply my skills in real-world projects.
</p>

        </div>
        <a href="./img/Tiran_Wijerathne.pdf" target="_blank">
  <button className="btn btn-outline-primary">Check Out My CV</button>
</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/Tiran-cover.png"
            alt="About Me" style={{height:'500px', width:'auto', marginRight:'-140px'}}/>
      </div>
    </section>
  );
}
