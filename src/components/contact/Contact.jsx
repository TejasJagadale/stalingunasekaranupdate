import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import "../../styles/contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      alert("தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.");
      return;
    }

    alert("உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!");
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="info-card">
        <div className="info-item">
          <MapPin className="icon" />
          <div className="left">
            <h3>முகவரி</h3>
            <p>த.ஸ்டாலின் குணசேகரன், தலைவர்</p>
            <p>மக்கள் சிந்தனை பேரவை,</p>
            <p>ஏ - 47, சம்பத் நகர், ஈரோடு 638 011.</p>
          </div>
        </div>

        <div className="info-item">
          <Phone className="icon" />
          <div className="left">
            <h3>தொலைபேசி</h3>
            <a className="cnt" href="tel:04242269186">
              0424 - 2269186
            </a>
          </div>
        </div>

        <div className="info-item">
          <Mail className="icon" />
          <div className="left">
            <h3>மின்னஞ்சல்</h3>
            <a className="cnt" href="mailto:stalingunasekaran.t@gmail.com">
              stalingunasekaran.t@gmail.com
            </a>
          </div>
        </div>

        <div className="info-item">
          <Clock className="icon" />
          <div className="left">
            <h3>அலுவலக நேரம்</h3>
            <p>திங்கள் - வெள்ளி: காலை 10:00 - மாலை 6:00</p>
            <p>சனி: காலை 10:00 - மதியம் 2:00</p>
            <p>ஞாயிறு: விடுமுறை</p>
          </div>
        </div>

        <div className="social-icons">
          <a
            className="cnt"
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            className="cnt"
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            className="cnt"
            href="https://linkedin.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            className="cnt"
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>

      <div className="form-card">
        <h2>உங்கள் செய்தியை அனுப்புங்கள்</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">பெயர்</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">மின்னஞ்சல்</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">தொலைபேசி</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">தலைப்பு</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">செய்தி</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            அனுப்பு
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
