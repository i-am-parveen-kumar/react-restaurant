import { Link } from "react-router-dom";
import "../../scss/RestaurantCard.scss";
import classnames from "classnames";

export const RestaurantCard = ({ resData }) => {
  const { id, name, costForTwo, cuisines, slaString, avgRating, cloudinaryImageId } = resData

  const avgRatingClass = classnames({
    'res-ratings': true,
    'res-rating-green': avgRating >= 4,
    'res-rating-red': avgRating < 4
  })
  return (
    <Link className="restaurant-card-container elevatable-div" to={`/restaurant/${id}`}>
      <div>
        <img
          src={
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
            cloudinaryImageId
          }
        />
        <div className="res-name">{name}</div>
        <div className="res-cuisine ellipsis">{cuisines.join(', ')}</div>
        <div className="res-usp">
          <span className={avgRatingClass}>{avgRating}</span>
          <div>.</div>
          <div>{slaString}</div>
          <div>.</div>
          <div>{costForTwo}</div>
        </div>
      </div>
    </Link>
  )
};
