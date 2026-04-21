import { CDN_URL } from "../utils/constants";

function MenuSection({ info, toggle, showSection }) {
  const restaurantMenu = info.itemCards;
  const sectionName = info.title;
  // console.log(info);

  const handleToggleMenu = function () {
    showSection();
  };
  return (
    <div className="flex flex-col w-full mt-2 ">
      <div
        className="bg-stone-300 rounded-lg flex justify-between items-center px-5 py-2 shadow-md shadow-stone-400 hover:cursor-pointer"
        onClick={handleToggleMenu}
      >
        <h1 className="text-xl font-semibold text-center ">
          {sectionName} ({info.itemCards.length})
        </h1>
        <span className="hover:cursor-pointer">
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
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <ul>
        {restaurantMenu &&
          toggle &&
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
                className="flex items-center justify-between gap-5 my-10"
              >
                <div>
                  <h1 className="text-lg font-bold">{name}</h1>
                  <div className="font-bold">₹{price}</div>
                  <p className="text-stone-500">{desc}</p>
                </div>
                <div className="relative">
                  <img
                    src={`${CDN_URL}/${img}`}
                    alt=""
                    className="w-50 h-30 rounded-lg object-cover"
                  />
                  <button className="border border-stone-400 absolute px-10 py-2 rounded-md bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-green-600 uppercase font-bold hover:bg-stone-200">
                    Add
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuSection;
