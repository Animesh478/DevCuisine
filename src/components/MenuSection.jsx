import { CDN_URL } from "../utils/constants";

function MenuSection({ info }) {
  const restaurantMenu = info.itemCards;
  const sectionName = info.title;
  return (
    <div className="flex flex-col w-full mt-2">
      <h1 className="text-xl font-semibold text-center bg-stone-300 rounded-t-lg">
        {sectionName}
      </h1>
      <ul>
        {restaurantMenu &&
          restaurantMenu.map((menuItem) => {
            const menuObj = menuItem.card.info;
            const menuId = menuObj.id;
            const name = menuObj.name;
            const desc = menuObj.description;
            const price = menuObj.price / 100 || menuObj.defaultPrice / 100;
            const img = menuObj.imageId;
            return (
              <li
                key={menuId}
                className="flex items-center justify-between gap-5 m-5"
              >
                <div>
                  <h1 className="text-lg font-bold">{name}</h1>
                  <div className="font-bold">₹{price}</div>
                  <p className="text-stone-500">{desc}</p>
                </div>
                <div>
                  <img
                    src={`${CDN_URL}/${img}`}
                    alt=""
                    className="w-50 h-30 rounded-lg object-cover"
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuSection;
