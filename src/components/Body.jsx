import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );
      const data = await response.json();
      console.log(data);
      setListOfRestaurants(
        data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurants(
        data.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
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

  // todo: make a shimmer ui component
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
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
      <div className="grid grid-cols-4 justify-start gap-3 border border-black mx-10 md:mx-20 lg:mx-40 mt-20  px-10">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resInfo={restaurant.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
