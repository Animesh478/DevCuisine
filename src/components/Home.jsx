import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(RESTAURANT_LIST_API);
      const result = await response.json();

      const allRestaurants =
        result.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(allRestaurants);
      setListOfRestaurants(allRestaurants);
      setFilteredRestaurants(allRestaurants);
    }
    fetchData();
  }, []);

  function handleFilterTopRestaurants() {
    console.log("hello");
    setFilteredRestaurants(
      listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.5),
    );
  }

  function handleSearchText(event) {
    const text = event.target.value;
    setSearchText(text);
  }

  function handleFilterRestaurants() {
    setFilteredRestaurants(
      listOfRestaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchText}
          className="border border-stone-400 w-100 rounded-sm px-1 outline-0"
          onChange={handleSearchText}
          placeholder="Search restaurants"
        />
        <button
          className="cursor-pointer hover:text-amber-600"
          onClick={handleFilterRestaurants}
        >
          Search
        </button>
      </div>
      <div>
        <button
          className="cursor-pointer mt-3 bg-amber-500 px-2 py-1 rounded-sm font-semibold active:scale-95 hover:bg-amber-400"
          onClick={handleFilterTopRestaurants}
        >
          Top Picks
        </button>
      </div>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-4 justify-start gap-3  mx-10 md:mx-20 lg:mx-40 mt-20  px-10">
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                resInfo={restaurant.info}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Body;
