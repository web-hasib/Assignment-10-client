import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting us. We will get back to you soon!",
      timer: 2000,
      showConfirmButton: false,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  // console.log(formData);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-6 bg-base-200/40 p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input rounded-lg input-bordered w-full"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input rounded-lg input-bordered w-full"
          />
        </div>

        {/* Subject Input */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input rounded-lg input-bordered w-full"
        />

        {/* Message Input */}
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="textarea rounded-lg textarea-bordered w-full"
        ></textarea>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-soft w-full border-blue-300 rounded-2xl px-7 hover:text-white btn-info text-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
