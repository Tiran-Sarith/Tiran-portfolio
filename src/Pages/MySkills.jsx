import data from "../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src1} alt="Product Chain" style={{ width: '50px', height: '50px' }}/>
              <img src={item.src2} alt="Product Chain" style={{ width: '50px', height: '50px' }}/>

            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p
  className="skills--section--description"
  style={{
    fontSize: '1.125rem', // Slightly larger font size for readability
    fontWeight: '550', // Regular font weight
    lineHeight: '1.6', // Relaxed line spacing for readability
    color: '#4a5568', // Medium gray color for text
     // Space above and below the paragraph
    fontFamily: 'Arial, sans-serif', // Clean, modern font family
  }}
>
  {item.description}
</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
