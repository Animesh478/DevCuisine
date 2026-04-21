import { useParams } from "react-router-dom";
import { useState } from "react";

import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

function RestauratMenu() {
  // state to determine which section card should remain open
  const [expandedSectionIndex, setExpandedSectionIndex] = useState(0);
  const { resId } = useParams();
  const result = useRestaurantMenu(resId);
  const restaurantData = result?.cards[2]?.card?.card?.info;
  const menuData =
    result?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);

  if (!restaurantData) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-10 ">
      {/* //? Restaurant Info Section */}
      <header className="flex flex-col gap-3 min-w-1/2 font-poppins">
        <h1 className="font-bold text-4xl">{restaurantData.name}</h1>
        <div className="border border-stone-400 rounded-lg p-5 shadow-md shadow-stone-300 flex flex-col gap-2">
          <div className="flex gap-5 ">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold">
                {restaurantData.avgRating}
                <span className="text-stone-400 font-semibold text-lg">
                  ({restaurantData.totalRatingsString})
                </span>
              </span>
            </div>
            <div className="text-lg font-semibold flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>{restaurantData.costForTwo}</span>
            </div>
          </div>
          <h3 className="text-md font-semibold text-amber-500">
            {restaurantData.cuisines.join(", ")}
          </h3>
        </div>
      </header>

      {/* //? Menu section */}
      <main className="mt-5 min-w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold font-poppins text-stone-600  text-center">
          Menu
        </h2>
        {menuData.map((menu, index) => {
          return (
            <MenuSection
              key={menu?.card?.card.title}
              info={menu?.card?.card}
              showSection={() => setExpandedSectionIndex(index)}
              toggle={expandedSectionIndex === index ? true : false}
            />
          );
        })}
      </main>
    </div>
  );
}
export default RestauratMenu;
