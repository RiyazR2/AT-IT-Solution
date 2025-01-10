import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border mx-auto my-4">
            <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/300x200"
                alt="Laptop"
            />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Dell XPS 15</h3>
                <p className="text-gray-700 text-base">
                    <strong>Price:</strong> $1499
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Processor:</strong> Intel Core i7
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Screen Size:</strong> 15.6"
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Storage:</strong> 512GB SSD
                </p>
                <p className="text-gray-700 text-base">
                    <strong>RAM:</strong> 16GB
                </p>
            </div>
        </div>
    );
};

export default Card;
