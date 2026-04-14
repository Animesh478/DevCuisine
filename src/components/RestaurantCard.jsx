import { CDN_URL } from "../utils/constants";

function RestaurantCard({ resInfo }) {
  return (
    <div className="p-2  font-poppins flex flex-col items-center justify-center">
      <img
        src={`${CDN_URL}${resInfo.cloudinaryImageId}`}
        className="w-full md:w-40 lg:w-70 lg:h-50 rounded-md object-cover"
        alt=""
      />
      <h3 className="font-bold">{resInfo.name}</h3>
      <h4 className="text-center">{resInfo.cuisines.join(", ")}</h4>
      <div className="flex gap-2">
        <h4>{resInfo.avgRatingString} stars</h4>
        <h4>{resInfo.sla.deliveryTime} mins</h4>
      </div>
      <h4 className="text-stone-500">{resInfo.areaName}</h4>
    </div>
  );
}

export default RestaurantCard;
