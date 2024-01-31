import React, { useState, useEffect } from "react";
import SortedOrder from "../PriceLtoH/script";
import StarRating from "./StarRating";

const HotelCard = ({
  isLoading,
  hotelObj,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortOrder,
  setSortOrder,
  selectedMealPlan,
  setSelectedMealPlan,
  setSelectedRating,
  selectedRating,
}) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    if (!isLoading && hotelObj && hotelObj.length > 0) {
      const hotelData = hotelObj[0].data.map((hotel) => ({
        name: hotel.name,
        price: hotel.price,
        rating: hotel.rating,
        meal_plan: hotel.meal_plan,
        photo: hotel.photo,
      }));
      setHotels(hotelData);
    }
  }, [isLoading, hotelObj]);

  const filteredHotels = hotels.filter((hotel) => {
    const price = parseFloat(hotel.price);
    return (
      (!minPrice || price >= parseFloat(minPrice)) &&
      (!maxPrice || price <= parseFloat(maxPrice)) &&
      (selectedMealPlan === "All" || hotel.meal_plan === selectedMealPlan) &&
      (selectedRating === 0 || hotel.rating >= selectedRating)
    );
  });

  const sortedHotels = filteredHotels.sort((a, b) => {
    if (sortOrder === "lower-to-higher") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOrder === "higher-to-lower") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortOrder === "alphabetical") {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      {minPrice > 0 && maxPrice > 30 && (
        <div>
          <SortedOrder sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedHotels.map((hotel, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl rounded-lg transition duration-500 hover:scale-105"
              >
                <img
                  src={hotel.photo}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 hover:text-blue-600 transition duration-300">
                      {hotel.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      <span className="font-bold">Price:</span> {hotel.price}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-bold">Meal Plan:</span>{" "}
                      {hotel.meal_plan}
                    </p>
                    <div className="text-gray-100 text-sm">
                      <StarRating rating={hotel.rating} />
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300 mt-4">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HotelCard;
