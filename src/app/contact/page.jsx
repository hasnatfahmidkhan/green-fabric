"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, AlertCircle } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

export default function Contact() {
  const [hoverCard, setHoverCard] = useState(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      contentLines: ["hello@greenfabric.com", "support@greenfabric.com"],
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-500",
      shadowColor: "rgba(37, 99, 235, 0.3)",
    },
    {
      icon: Phone,
      title: "Phone",
      contentLines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      note: "Mon - Fri, 9AM - 6PM EST",
      iconBgColor: "bg-teal-100",
      iconTextColor: "text-teal-500",
      shadowColor: "rgba(94, 234, 212, 0.4)",
    },
    {
      icon: MapPin,
      title: "Location",
      contentLines: ["123 Green Street", "Portland, OR 97214"],
      note: "Visit our sustainable store",
      iconBgColor: "bg-purple-100",
      iconTextColor: "text-purple-500",
      shadowColor: "rgba(94, 234, 212, 0.4)",
    },
  ];

  return (
    <Container className="space-y-16 md:space-y-28">
      <div className="heading-container">
        <Heading>Get In Touch</Heading>
        <p className="sub-heading">
          Have questions about our sustainable green fabric t-shirts? We&apos;d
          love to hear from you!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactMethods.map((item, index) => {
          const IconComponent = item.icon; // Get the actual component
          return (
            <div
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
              style={{
                boxShadow:
                  hoverCard === index
                    ? `0 20px 40px ${item.shadowColor}`
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${item.iconBgColor}`}
              >
                {/* Render the dynamic icon component */}
                <IconComponent className={`w-6 h-6 ${item.iconTextColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Loop through content lines (emails, phone numbers, addresses) */}
              {item.contentLines.map((line, lineIndex) => (
                <p key={lineIndex} className="text-slate-500 mb-1">
                  {line}
                </p>
              ))}

              <p className="text-sm text-slate-500 mt-3">{item.note}</p>
            </div>
          );
        })}
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-slate-500 mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full focus:input-primary transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  className="select select-bordered w-full focus:select-primary transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-issue">Order Issue</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="sustainability">
                    Sustainability Question
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="textarea textarea-bordered w-full focus:textarea-primary transition-all resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="checkbox checkbox-primary mt-1"
                />
                <label htmlFor="newsletter" className="text-sm text-slate-500">
                  Subscribe to our newsletter for exclusive offers and
                  sustainable fashion tips
                </label>
              </div>

              <button className="btn btn-primary w-full h-12 text-base font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Clock className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Business Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Monday - Friday</span>
                <span className="font-medium text-slate-900">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Saturday</span>
                <span className="font-medium text-slate-900">
                  10:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sunday</span>
                <span className="font-medium text-slate-900">Closed</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Follow Us
            </h3>
            <div className="flex items-center lg:grid lg:grid-cols-4 gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-teal-100 hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-teal-100 hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-teal-100 hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-teal-100 hover:bg-teal-500 text-teal-500 hover:text-white rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-linear-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Sustainability Matters
                </h4>
                <p className="text-sm text-slate-500">
                  All our green fabric t-shirts are made from 100% organic
                  cotton with eco-friendly dyes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
