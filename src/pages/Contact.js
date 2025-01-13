import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-200 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-blue-600 drop-shadow-lg mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in delay-100">
            We're here to help! Reach out to us using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-xl p-10 transform hover:scale-105 transition-transform duration-300 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Address:</strong> Nirmiti Landmark, Shop Number B8, First
              Floor, Adarsh Nagar, Indira Nagar, Solapur, Solapur - 413004 (Near
              Ganesh Nagar)
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Working Hours:</strong> 10:00 AM to 8:00 PM (Open
              Everyday)
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:atit73992@gmail.com"
                className="text-blue-500 hover:underline"
              >
                atit73992@gmail.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Contact Numbers:</strong>
              <br />
              Azeem (Solapur):{" "}
              <a
                href="tel:9272003194"
                className="text-blue-500 hover:underline"
              >
                9272003194
              </a>
              <br />
              Azhar (Mumbai):{" "}
              <a
                href="tel:8999770727"
                className="text-blue-500 hover:underline"
              >
                8999770727
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/a.t_it_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @a.t_it_solution
              </a>
            </p>
          </div>

          {/* Google Maps Link Section */}
          <div className="relative bg-white shadow-lg rounded-xl overflow-hidden p-10 transform hover:scale-105 transition-transform duration-300 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Find Us Here
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visit us at our shop or find us on Google Maps for directions.
            </p>
            <a
              href="https://maps.app.goo.gl/nzTJHX3jzveSDGPZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-transform duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
