import { useParams } from "react-router-dom";
import "../../scss/RestaurantDetails.scss";
import MenuCard from "./MenuCard";
import {
  MENU_ITEM_TYPE_KEY,
  SWIGGY_MENU_API_URL,
} from "../constants/constants";
import axios from "axios";
import { useEffect, useState } from "react";
const RestaurantDetails = () => {
  const resId = useParams()?.id;
  const [resDetails, setResDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      const menuAPIURL = `${SWIGGY_MENU_API_URL}${resId}`;
      const response = await axios(menuAPIURL);
      setResDetails(response?.data?.data?.cards);
    }
    fetchData();
  }, []);
  const menuItemCards =
    resDetails?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) => card?.card?.card?.["@type"] == MENU_ITEM_TYPE_KEY
    );
  console.log(resDetails);

  console.log(menuItemCards);

  const {
    name,
    areaName,
    costForTwoMessage,
    avgRatingString,
    cuisines,
    totalRatingsString,
  } = resDetails?.[0]?.card?.card?.info || {};

  return (
    <div className="restuarant-details-container">
      <div className="restaurant-info">
        <div className="restaurant-address-container">
          <h2>{name}</h2>
          <h4>
            {cuisines?.join(", ")} {areaName}
          </h4>
        </div>
        <div className="restaurant-ratings-container">
          <div className="avg-ratings">{avgRatingString}</div>
          <div className="total-ratings">{totalRatingsString}</div>
        </div>
      </div>
      <div className="dotted-line"></div>
      <div>
        <span>{costForTwoMessage}</span>
      </div>

      <div className="offers-container">
        <div className="offer-card"></div>
      </div>
      <div>
        {menuItemCards?.map((card) => (
          <>
            <div class="accordion">
              <div class="accordion-item">
                <div class="accordion-header">{card?.card?.card?.title}</div>
                <div class="accordion-content">
                  {card?.card?.card?.itemCards.map((itemCard) => (
                    <MenuCard
                      key={itemCard?.card?.info?.id}
                      info={itemCard?.card?.info}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* <h3 key={card?.card?.card?.id}>{card?.card?.card?.title}</h3> */}
            {/* {card?.card?.card?.itemCards.map((itemCard) => (
              <MenuCard
                key={itemCard?.card?.info?.id}
                info={itemCard?.card?.info}
              />
            ))} */}
          </>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
