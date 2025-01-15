import '../app.css'
import './style.css'
import Swal from 'sweetalert2'

export default function ContactMe() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cb8053a1-ea57-44c5-9148-08ec81e06243");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successful",
        text: "Your Message sent successfully",
        icon: "success"
      });
    }
  };




  return (
    <section id="Contact" className="contact--section">
      <div>
      <h1 class="skills-section-heading">
  Get In Touch
</h1>
        <p className="text-lg">
        Reach out to us for innovative solutions and seamless communication!
        </p>
      </div>
      <form className="contact--form--container" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          
<textarea
    className="contact--input text-md"
    name="message"
    id="message"
    placeholder="Type your message..."
    rows="6" 
    required
  />
          
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </section>
  );
}
