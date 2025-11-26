"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import {
  Award,
  Leaf,
  Users,
  Target,
  Heart,
  Zap,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { FaLeaf, FaRecycle, FaHandshake } from "react-icons/fa";

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      " To make sustainable, high-quality green fabric t-shirts accessible to everyone, proving that ethical fashion doesn't have to compromise on style or comfort.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    shadowColor: "rgba(217, 119, 6, 0.3)",
  },
  {
    icon: Leaf,
    title: "Our Vision",
    description:
      "To lead the sustainable fashion revolution by creating timeless pieces that respect both people and the planet, inspiring conscious consumerism worldwide.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    shadowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, sustainability, and social responsibility drive every decision we make. We're committed to transparency, quality, and making a positive impact.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    shadowColor: "rgba(22, 163, 74, 0.3)",
  },
];

const certifications = [
  {
    icon: Award, // Represents the icon component name (e.g., from Lucide or Heroicons)
    iconBgColor: "bg-yellow-100",
    iconTextColor: "text-yellow-600",
    title: "GOTS Certified",
    subtitle: "Global Organic Textile Standard",
    shadowColor: "rgba(217, 119, 6, 0.3)",
  },
  {
    icon: Globe,
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
    title: "B-Corp Certified",
    subtitle: "Certified Social Enterprise",
    shadowColor: "rgba(22, 163, 74, 0.3)",
  },
  {
    icon: TrendingUp,
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
    title: "Climate Neutral",
    subtitle: "Carbon Neutral Certified",
    shadowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    icon: Users,
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
    title: "Fair Trade Certified",
    subtitle: "Ethical Labor Practices",
    shadowColor: "rgba(168, 85, 247, 0.3)",
  },
];
export default function About() {
  const [hoverCard, setHoverCard] = useState(null);

  return (
    <Container className="space-y-16 md:space-y-28">
      {/* Hero Section */}
      <div className="space-y-10">
        <div className="heading-container">
          <Heading>About Green Fabric</Heading>
          <p className="sub-heading">Sustainable. Ethical. Essential.</p>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions?.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
                style={{
                  boxShadow:
                    hoverCard === index
                      ? `0 20px 40px ${mission.shadowColor}`
                      : "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
              >
                <div className="flex mb-4">
                  <div className={`p-4 rounded-full ${mission.bgColor}`}>
                    <IconComponent
                      className={`w-8 h-8 ${mission.iconColor}`}
                      strokeWidth={1.3}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4">
                  {mission.title}
                </h3>
                <p className="text-accent text-sm leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Our Story */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 ">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Our Story
        </h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Green Fabric was born from a simple question: Why is sustainable
            fashion so complicated? In 2018, our founder noticed a gap in the
            market for stylish, affordable, and genuinely eco-friendly clothing.
            Traditional t-shirts were either expensive luxury items or produced
            with questionable environmental and ethical practices.
          </p>
          <p>
            We decided to take a different approach. We partnered with certified
            organic cotton farms, worked with eco-conscious manufacturers, and
            spent months perfecting the perfect fit and feel. The result?
            Premium-quality t-shirts that don't compromise on style, comfort, or
            sustainability.
          </p>
          <p>
            Today, we're proud to have served over 50,000 customers across 45
            countries. But our mission remains the same: to make sustainable
            fashion accessible to everyone. Every t-shirt we produce represents
            our commitment to a better future.
          </p>
        </div>
      </div>

      {/* By The Numbers */}
      <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl text-white shadow-lg p-8 md:p-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          By The Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
            <p className="text-emerald-100">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">45</div>
            <p className="text-emerald-100">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
            <p className="text-emerald-100">T-Shirts Shipped</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
            <p className="text-emerald-100">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Certifications & Awards */}
      <div>
        <div className="mb-6">
          <Heading>Certifications & Awards</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon; // Get the actual component
            return (
              <div
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
                style={{
                  boxShadow:
                    hoverCard === index
                      ? `0 20px 40px ${cert.shadowColor}`
                      : "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                key={cert.title}
                className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-50 flex items-center gap-4"
              >
                <div className={`p-4 rounded-xl shrink-0 ${cert.iconBgColor}`}>
                  {/* Render the dynamic icon component */}
                  <IconComponent className={`w-6 h-6 ${cert.iconTextColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{cert.title}</h3>
                  <p className="text-slate-600 text-sm">{cert.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-400 p-8 md:p-12">
        <div className="heading-container mb-6">
          <Heading>Our Commitment to the Future</Heading>
        </div>

        <div className="space-y-4 text-slate-700">
          <p>
            We&apos;re not just making t-shirts—we&apos;re building a better
            future. By 2025, we&apos;re committed to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Achieving 100% renewable energy across all operations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                Implementing fully recyclable or compostable packaging
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Supporting 10 environmental conservation projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                Planting 100,000 trees with our Tree for a T-shirt program
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="heading-container mb-5">
          <Heading>Join the Green Movemen</Heading>
          <p className="sub-heading">
            Discover the difference sustainable fashion can make. Shop our
            collection and become part of a community that cares about the
            planet.
          </p>
        </div>
        <button className="btn btn-primary btn-lg rounded-lg">
          Shop Green Fabric
        </button>
      </div>
    </Container>
  );
}
