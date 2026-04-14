function RestaurantCard({ resInfo }) {
  return (
    <div className="p-2 border-2 text-center border-amber-400 font-poppins">
      <img src={resInfo.cloudinaryImageId} alt="" />
      <h3>{resInfo.name}</h3>
      <h4>{resInfo.cuisines.join(", ")}</h4>
      <h4>{resInfo.avgRatingString} stars</h4>
      <h4>{resInfo.sla.deliveryTime} mins</h4>
    </div>
  );
}

export default RestaurantCard;
