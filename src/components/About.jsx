import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function AboutUs() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const services = [
    {
      title: "IT Infrastructure",
      description:
        "We provide scalable infrastructure management services.",
      list: [
        "Hardware: Servers, desktops, laptops, storage, networking devices.",
        "Software: OS, apps, middleware, and utilities.",
        "Networks: LANs, WANs, and Internet infrastructure.",
        "Data Centers: Facilities hosting critical IT systems.",
        "Other Services: Cloud, virtualization, disaster recovery.",
      ],
    },
    {
      title: "Network Services",
      description:
        "We use 20+ years of experience to deliver strong global networks.",
    },
    {
      title: "Security & Surveillance",
      description:
        "We offer access control, security management, and surveillance solutions.",
    },
    {
      title: "Switches & Routers",
      description:
        "Our switching and routing products help build powerful, reliable networks.",
    },
    {
      title: "Voice & Video",
      description:
        "We provide secure voice and video communication, conferencing, and transcoding services.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">About Us</h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          We provide end-to-end IT solutions tailored to your business needs.
        </p>

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl border border-gray-200 mb-6 transition hover:shadow-xl"
          >
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-blue-50 rounded-t-2xl"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <span className="text-blue-500">
                {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {openSection === index && (
              <div className="px-6 pb-5 animate-fade-in-down">
                <p className="text-gray-700 mb-3">{service.description}</p>
                {service.list && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {service.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
