import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-200 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-lg mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700">
            Discover who we are and what drives us to provide exceptional IT
            solutions.
          </p>
        </div>

        <div className="space-y-12">
          {/* About the Shop */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to{" "}
              <strong className="text-blue-600">AT IT Solution</strong>, your
              one-stop shop for all your laptop and computer repair needs in
              Solapur. With years of experience, we specialize in repairing
              laptops, desktops, and computer peripherals. We pride ourselves on
              offering high-quality services and genuine accessories for our
              customers.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer expert repair services for laptops and desktops, ensuring
              your devices are back in perfect working condition. Our services
              include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Screen replacement</li>
              <li>Battery replacement</li>
              <li>Motherboard repair</li>
              <li>Data recovery</li>
              <li>Software installation</li>
              <li>Virus removal</li>
              <li>Hardware upgrades</li>
              <li>And many more...</li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Our Products
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong className="text-blue-600">AT IT Solution</strong>, we
              stock a wide range of accessories for laptops and desktops,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Printers and scanners</li>
              <li>Antivirus software</li>
              <li>Pendrives</li>
              <li>Laptop batteries</li>
              <li>Computer monitors</li>
              <li>Webcams</li>
              <li>CCTV cameras</li>
              <li>Internal and external hard drives (HDD/SSD)</li>
              <li>Laptop bags</li>
              <li>USB hubs and adapters</li>
              <li>Wireless keyboards and mice</li>
              <li>HDMI cables and Ethernet devices</li>
              <li>Speakers</li>
              <li>Motherboards</li>
              <li>Chargers and cables</li>
            </ul>
          </div>

          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to provide reliable and affordable IT solutions to
              individuals and businesses in Solapur. We focus on quality,
              efficiency, and customer satisfaction, ensuring we remain your
              trusted partner for all IT needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
