import React from "react";

const Contact = () => {
    return (
        <div className="p-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
            <div className="text-lg text-gray-700 text-center">
                <p>
                    📍 Address: Nirmiti Landmark, Shop Number B8, First Floor, Adarsh Nagar, Solapur
                </p>
                <p>📞 Contact: 9272003194 (Azeem - Solapur) / 8999770727 (Azhar - Mumbai)</p>
                <p>📧 Email: atit73992@gmail.com</p>
                <p>📸 Instagram: <a href="https://www.instagram.com/a.t_it_solution" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Visit us on Instagram</a></p>
            </div>
            <iframe
                title="Shop Location"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="300"
                className="mt-6 border rounded-md"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Contact;
