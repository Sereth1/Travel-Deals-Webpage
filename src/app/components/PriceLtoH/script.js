import React from "react";

export default function SortedOrder({ sortOrder, setSortOrder }) {
  return (
    <>
      <div className="flex justify-end">
        <div className="w-full max-w-xs">
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="lower-to-higher">Lower to Higher</option>
            <option value="higher-to-lower">Higher to Lower</option>
            <option value="alphabetical">Alphabetical</option>{" "}
          </select>
        </div>
      </div>
    </>
  );
}
