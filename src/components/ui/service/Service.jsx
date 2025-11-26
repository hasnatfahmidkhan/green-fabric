"use client";
import React, { useState } from "react";
import {
  DollarSign,
  Printer,
  Truck,
  Package,
  ArrowRight,
  Shield,
  SlidersHorizontal,
} from "lucide-react";
import Heading from "@/components/Heading";

export default function Service() {
  const [hoverCard, setHoverCard] = useState(null);
  const features = [
    {
      icon: DollarSign,
      title: "No Die & Plate Charges",
      description:
        "Save on upfront costs with our die and plate-free printing process, making small runs affordable and efficient.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      shadowColor: "rgba(217, 119, 6, 0.3)",
    },
    {
      icon: Printer,
      title: "High Quality Offset Printing",
      description:
        "Achieve sharp, vibrant prints with our state-of-the-art offset printing technology for professional results every time.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      shadowColor: "rgba(37, 99, 235, 0.3)",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description:
        "Your transactions are fully protected with industry-standard encryption and secure payment gateways.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      shadowColor: "rgba(22, 163, 74, 0.3)",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Size & Style",
      description:
        "Choose from a wide range of sizes and styles to create a product that perfectly matches your brand and needs.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      shadowColor: "rgba(37, 99, 235, 0.3)",
    },
    {
      icon: Truck,
      title: "Fast & Free Delivery",
      description:
        "Get your orders delivered quickly and at no extra cost, ensuring you meet deadlines without hassle.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      shadowColor: "rgba(220, 38, 38, 0.3)",
    },
    {
      icon: Package,
      title: "Low Minimum Order Quantity",
      description:
        "Order exactly what you need with low minimums, making it easy for startups and small businesses to get started.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      shadowColor: "rgba(217, 119, 6, 0.3)",
    },
  ];

  return (
    <section>
      <div className="heading-container mb-10">
        <Heading>Our Service</Heading>
        <p className="sub-heading">
          What Makes Green Fabric T-Shirts Different?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
              style={{
                boxShadow:
                  hoverCard === index
                    ? `0 20px 40px ${feature.shadowColor}`
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 "
            >
              <div className="flex mb-4">
                <div className={`p-4 rounded-full ${feature.bgColor}`}>
                  <IconComponent
                    className={`w-8 h-8 ${feature.iconColor}`}
                    strokeWidth={1.3}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-4">
                {feature.title}
              </h3>
              <p className="text-accent text-sm mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div>
                <a
                  href="#"
                  className="text-primary hover:text-teal-600 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
