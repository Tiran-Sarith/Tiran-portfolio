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
        <button className="btn btn-outline-primary"> <img src="./img/github-icon-1.svg" style={{ width: '20px', height: '20px', marginBottom:'-5px'}} /> <img src="./img/github-2.svg" style={{ width: '60px', height: '20px', marginBottom:'-5px'}} />
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Tiran-cover.png"
            alt="About Me" style={{height:'500px', width:'auto'}}/>
      </div>
    </section>
  );
}
