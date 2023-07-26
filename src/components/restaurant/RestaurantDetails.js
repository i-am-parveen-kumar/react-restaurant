import { useParams } from "react-router-dom";
import "../../scss/RestaurantDetails.scss";
import MenuCard from "./MenuCard";
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu'
const RestaurantDetails = () => {
  const { id } = useParams()
  const { resDetails, menuItemCards } = useRestaurantMenu(id)
  console.log(resDetails)
  console.log(menuItemCards)

  const { name, areaName, costForTwoMessage, avgRatingString, cuisines, totalRatingsString } =
    resDetails?.[0]?.card?.card?.info || {}

  return (
    <div className="restuarant-details-container">
      <div className="restaurant-info">
        <div className="restaurant-address-container">
          <p className="restaurant-name">{name}</p>
          <p className="area-name">{areaName}</p>
          <p className="cuisines">{cuisines?.join(', ')}</p>
        </div>
        <div className="restaurant-ratings-container">
          <div className="avg-ratings">{avgRatingString}</div>
          <div className="total-ratings">{totalRatingsString}</div>
        </div>
      </div>
      <div className="dotted-line"></div>
      <div className="cost-for-two">{costForTwoMessage}</div>

      <div className="offers-container">
        <div className="offer-card"></div>
      </div>
      <div>
        {menuItemCards?.map(card => (
          <>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-header">{card?.card?.card?.title}</div>
                <div className="accordion-content">
                  {card?.card?.card?.itemCards.map(itemCard => (
                    <MenuCard key={itemCard?.card?.info?.id} info={itemCard?.card?.info} />
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
  )
}

export default RestaurantDetails;
