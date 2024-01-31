"use client";

import { useState } from "react";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import Navbar from "./components/Navbar/NavBar";
import SegmentedControl from "./components/Navbar/SegmentedControl";
import DataFetcherComponent from "./components/DataFetcher/DataFetcher";
import HotelCard from "./components/HotelRating/HotelCard";
import SortedOrder from "./components/PriceLtoH/script";

export default function Home() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [active, setActive] = useState("excursions");
  const [data, setData] = useState([]);

  const [sortOrder, setSortOrder] = useState("lower-to-higher");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const hotelString = JSON.stringify(data);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [selectedMealPlan, setSelectedMealPlan] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);

  const hotelObj = JSON.parse(hotelString);

  return (
    <main className="p-4 sm:p-9">
      <SegmentedControl active={active} setActive={setActive} />

      <Navbar />
      <DataFetcherComponent
        data={data}
        setData={setData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
      />
      {
        <div className="flex flex-col md:flex-row">
          {/* Filter Sidebar */}

          {!isLoading && (
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
                selectedMealPlan={selectedMealPlan}
                setSelectedMealPlan={setSelectedMealPlan}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
            </div>
          )}

          {/* Hotel Card */}

          <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 p-4 overflow-y-auto">
            <HotelCard
              isLoading={isLoading}
              hotelObj={hotelObj}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setSortOrder={setSortOrder}
              sortOrder={sortOrder}
              selectedMealPlan={selectedMealPlan}
              setSelectedMealPlan={setSelectedMealPlan}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </div>
        </div>
      }
    </main>
  );
}
