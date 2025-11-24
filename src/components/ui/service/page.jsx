import React from "react";
import {
  DollarSign,
  Printer,
  Truck,
  Package,
  ArrowRight,
  Shield,
  SlidersHorizontal,
} from "lucide-react";

export default function Service() {
  const features = [
    {
      icon: DollarSign,
      title: "No Die & Plate Charges",
      description:
        "Save on upfront costs with our die and plate-free printing process, making small runs affordable and efficient.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Printer,
      title: "High Quality Offset Printing",
      description:
        "Achieve sharp, vibrant prints with our state-of-the-art offset printing technology for professional results every time.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description:
        "Your transactions are fully protected with industry-standard encryption and secure payment gateways.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: SlidersHorizontal,
      title: "Custom Size & Style",
      description:
        "Choose from a wide range of sizes and styles to create a product that perfectly matches your brand and needs.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Fast & Free Delivery",
      description:
        "Get your orders delivered quickly and at no extra cost, ensuring you meet deadlines without hassle.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Package,
      title: "Low Minimum Order Quantity",
      description:
        "Order exactly what you need with low minimums, making it easy for startups and small businesses to get started.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <section>
      <div className="max-w-2xl px-2 mx-auto">
        <h2 className="heading mb-4">Our Service</h2>
        <p className="sub-heading">
          What Makes Green Fabric T-Shirts Different?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md"
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
              <p className="text-base-200 text-sm mb-6 leading-relaxed">
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
