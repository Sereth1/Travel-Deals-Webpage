import { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({
  setPriceRange,
  value,
  priceRange,
  setValue,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  selectedMealPlan,
  setSelectedMealPlan,
  setSelectedRating,
  selectedRating,
}) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h2></h2>
        <div className="filter-title">ΕΥΡΟΣ ΤΙΜΗΣ</div>
        <div className="price-range-inputs">
          <input
            type="number"
            placeholder="Από €"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Έως €"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <input
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => {
              const newMaxPrice = parseInt(e.target.value, 10);

              setMaxPrice(newMaxPrice);

              setMinPrice((prevMinPrice) => {
                if (newMaxPrice === 0) {
                  return 0;
                } else {
                  const difference = newMaxPrice - 10;
                  return Math.max(0, Math.abs(prevMinPrice - difference));
                }
              });
            }}
            step="10"
          />
        </div>
        <div className="histogram-range-slider"></div>
        <div className="price-range-options pb-4">
          <label>
            <input
              type="radio"
              name="priceRange"
              value="0-50"
              onChange={() => {
                setMinPrice(10), setMaxPrice(50);
              }}
            />
            Έως 50 €
          </label>
          <label>
            <input
              type="radio"
              name="priceRange"
              value="50-150"
              onChange={() => {
                setMinPrice(50), setMaxPrice(150);
              }}
            />
            50 - 150 €
          </label>
          <label>
            <input
              type="radio"
              name="priceRange"
              value="150-500"
              onChange={() => {
                setMinPrice(150), setMaxPrice(500);
              }}
            />
            150 - 500 €
          </label>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-title"></div>

        {[, "All Inclusive", "Bed Breakfast", "Half Board", "Room Only"].map(
          (plan) => (
            <label key={plan} className="checkbox-container">
              {plan}
              <input
                type="radio"
                value={plan}
                checked={selectedMealPlan === plan}
                onChange={(e) => setSelectedMealPlan(e.target.value)}
              />
              <span className="checkmark"></span>
            </label>
          )
        )}
      </div>
      <div className="filter-section">
        <div className="filter-title">Star Ratings</div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} className="checkbox-container">
            {rating === 0 ? "All Ratings" : `${rating} Stars`}
            <input
              type="radio"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => setSelectedRating(rating)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
        <button
          onClick={() => {
            setSelectedMealPlan("All");
            setSelectedRating(0);
            setMaxPrice(0);
            setMinPrice(0);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-16"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
