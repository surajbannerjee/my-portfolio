"use client";

import React, { useState } from "react";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    "E-mail": "",
    Phone: "",
    Message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Local API error");
      }
    } catch {
      try {
        const web3Data = new FormData();
        web3Data.append("access_key", "a4a14ce6-6913-4d3d-92a0-42ddfd37ec95");
        web3Data.append("subject", "New Contact Form Submission — Suraj Banerjee Portfolio");
        web3Data.append("from_name", "Suraj Banerjee Portfolio");
        web3Data.append("Name", formData.Name);
        web3Data.append("Company", formData.Company);
        web3Data.append("Email", formData["E-mail"]);
        web3Data.append("Phone", formData.Phone);
        web3Data.append("Message", formData.Message);

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: web3Data,
        });

        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }

    setTimeout(() => {
      setStatus("idle");
      setFormData({
        Name: "",
        Company: "",
        "E-mail": "",
        Phone: "",
        Message: "",
      });
    }, 5000);
  };

  return (
    <div className="mxd-section mxd-section-inner-form padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
              <div className="col-12 col-xl-8">
                <div className="mxd-block__content contact">
                  <div className="mxd-block__inner-form loading__fade">
                    <div className="form-container">
                      {/* Reply Messages Start */}
                      <div
                        className={`form__reply centered text-center ${
                          status === "success" ? "is-visible" : ""
                        }`}
                      >
                        <i className="ph-fill ph-smiley-wink reply__icon"></i>
                        <p className="reply__title">Done!</p>
                        <span className="reply__text">
                          Thanks for your message. We&apos;ll get back as soon as possible.
                        </span>
                      </div>

                      <div
                        className={`form__reply centered text-center ${
                          status === "error" ? "is-visible" : ""
                        }`}
                      >
                        <i className="ph-fill ph-warning-circle reply__icon"></i>
                        <p className="reply__title">Error</p>
                        <span className="reply__text">
                          Ooops! Something went wrong. Please try again or reach out directly.
                        </span>
                      </div>
                      {/* Reply Messages End */}

                      {/* Contact Form Start */}
                      <form
                        className={`form contact-form ${
                          status === "success" ? "is-hidden" : ""
                        }`}
                        id="contact-form"
                        onSubmit={handleSubmit}
                      >
                        <div className="container-fluid p-0">
                          <div className="row gx-0">
                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input
                                type="text"
                                name="Name"
                                placeholder="Your name*"
                                required
                                value={formData.Name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input
                                type="text"
                                name="Company"
                                placeholder="Company name"
                                value={formData.Company}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input
                                type="email"
                                name="E-mail"
                                placeholder="Email*"
                                required
                                value={formData["E-mail"]}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                              <input
                                type="tel"
                                name="Phone"
                                placeholder="Phone"
                                value={formData.Phone}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                              <textarea
                                name="Message"
                                placeholder="A few words about your project*"
                                required
                                value={formData.Message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                              <AnimatedButton
                                type="submit"
                                className="btn btn-anim btn-default btn-large btn-opposite slide-right-up"
                                caption={status === "submitting" ? "Sending..." : "Submit"}
                                iconClass="ph-bold ph-arrow-up-right"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* Contact Form End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
