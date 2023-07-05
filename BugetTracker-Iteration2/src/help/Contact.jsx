export default function Contact() {
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <label className="contact-form-label">
            <span>Your email:</span>
            <input type="email" className="contact-form-input-textarea" name="email" required />
          </label>
          <label className="contact-form-label">
            <span>Your message:</span>
            <textarea name="message" className="contact-form-input-textarea" required></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }