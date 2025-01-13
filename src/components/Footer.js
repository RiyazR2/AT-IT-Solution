import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shop Location */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-yellow-400">
            Shop Location
          </h2>
          <p>Nirmiti Landmark, Shop Number B8, First Floor,</p>
          <p>Adarsh Nagar, Indira Nagar, Solapur</p>
          <p>Solapur - 413004 (Near Ganesh Nagar)</p>
          <a
            href="https://maps.app.goo.gl/nzTJHX3jzveSDGPZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-yellow-300 block mt-4 transition duration-300"
          >
            View on Google Maps
          </a>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-yellow-400">
            Contact Information
          </h2>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:atit73992@gmail.com"
              className="text-blue-400 hover:text-yellow-300 transition duration-300"
            >
              atit73992@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            Azeem (Solapur):{" "}
            <a
              href="tel:9272003194"
              className="text-blue-400 hover:text-yellow-300 transition duration-300"
            >
              9272003194
            </a>
            <br />
            Azhar (Mumbai):{" "}
            <a
              href="tel:8999770727"
              className="text-blue-400 hover:text-yellow-300 transition duration-300"
            >
              8999770727
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/a.t_it_solution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-yellow-300 transition duration-300"
            >
              @a.t_it_solution
            </a>
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-yellow-400">
            Business Hours
          </h2>
          <p>Open Everyday</p>
          <p>10:00 AM to 8:00 PM</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} AT IT Solution. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
