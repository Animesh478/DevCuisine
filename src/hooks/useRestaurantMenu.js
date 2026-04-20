import { useEffect, useState } from "react";

import { MENU_API } from "../utils/constants";

const useRestaurantMenu = function (resId) {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${MENU_API}${resId}`);

      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const result = await response.json();
      setRestaurantInfo(result.data);
    }
    fetchData();
  }, [resId]);

  return restaurantInfo;
};

export default useRestaurantMenu;
