import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(RESTAURANT_LIST_API);
      const response = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9880043&lng=77.6893675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const result = await response.json();
      console.log(result);
      // const allRestaurants = result.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      const allRestaurants =
        result.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(allRestaurants);
      setFilteredRestaurants(allRestaurants);
    }
    fetchData();
  }, []);

  function handleFilterTopRestaurants() {
    setListOfRestaurants(
      listOfRestaurants.filter((restaruant) => restaruant.info.avgRating > 4.2),
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
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          className="border-2 border-amber-600"
          onChange={handleSearchText}
        />
        <button onClick={handleFilterRestaurants}>Search</button>
      </div>
      <div>
        <button onClick={handleFilterTopRestaurants}>Top Picks</button>
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
