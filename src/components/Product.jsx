import React from 'react'

const Product = () => {
  const products = [
    {
      category: "Enhancing Experiences",
      items: [
        "Amplify the fan Experience",
        "Reliable & Secure Wi-Fi",
        "Elevate the Student Experience",
        "Enabling Connected Cities",
        "Always on wireless Services",
        "Increase Store Productivity",
        "Scale Your Network Effortlessly"
      ]
    },
    {
      category: "IT Infrastructure",
      description:
        "Our IT Infra Services will transform your IT platform with effective infrastructure management solutions.",
      items: [
        {
          title: "Hardware",
          detail:
            "Includes physical devices like servers, desktops, laptops, storage devices, and networking equipment."
        },
        {
          title: "Software",
          detail:
            "Encompasses operating systems, applications, utilities, and middleware that run on the hardware."
        },
        {
          title: "Networks",
          detail:
            "Covers the infrastructure for connecting devices and sharing information, including LANs, WANs, and the Internet."
        },
        {
          title: "Data Centers",
          detail:
            "Physical facilities that house servers, networking equipment, and other IT infrastructure components."
        },
        {
          title: "Other Services",
          detail:
            "Includes cloud computing, virtualization, disaster recovery, and other related services."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">Our Solutions</h1>

        {products.map((section, index) => (
          <div key={index} className="mb-10 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">{section.category}</h2>
            {section.description && (
              <p className="text-gray-700 mb-6">{section.description}</p>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, idx) =>
                typeof item === "string" ? (
                  <div
                    key={idx}
                    className="bg-blue-50 p-4 rounded-md border border-blue-100 hover:shadow-md transition"
                  >
                    <p className="text-blue-800 font-medium">{item}</p>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="bg-blue-50 p-4 rounded-md border border-blue-100 hover:shadow-md transition"
                  >
                    <h4 className="text-blue-800 font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product