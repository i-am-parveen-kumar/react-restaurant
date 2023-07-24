import "../scss/ShimmerRestaurantCard.scss";
import { Shimmer } from "./shimmer/Shimmer";

export const ShimmerRestaurantCard = () => {
  return (
    <>
      <div className="restaurant-card-container">
        <Shimmer type={"BOX"} height={"150px"} width={"250px"} />

        <div className="res-name">
          <Shimmer type={"LINE"} height={"10px"} width={"250px"} />
        </div>
        <div className="res-cuisine ellipsis">
          <Shimmer type={"LINE"} height={"10px"} width={"250px"} />
        </div>
        <div className="res-usp">
          <Shimmer type={"LINE"} height={"10px"} width={"250px"} />
          <Shimmer type={"LINE"} height={"10px"} width={"250px"} />
        </div>
      </div>
    </>
  );
};
