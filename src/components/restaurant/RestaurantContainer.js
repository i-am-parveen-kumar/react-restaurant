import { RestaurantCard } from "./RestaurantCard";
import "../../scss/RestaurantContainer.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShimmerRestaurantCard } from "../ShimmerRestaurantCard";
import { Shimmer } from "../shimmer/Shimmer";

const predicates = {
  TOP_RATED_RESTAURANTS: (restaurant) => restaurant?.data?.avgRating > 4,
  SEARCH: (searchText) => (restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()),
};

const compareFunctions = {
  RATINGS_LOW_TO_HIGH: (a, b) => {
    return isNaN(a?.data?.avgRating) || isNaN(b?.data?.avgRating)
      ? 0
      : a?.data?.avgRating - b?.data?.avgRating;
  },
  RATINGS_HIGH_TO_LOW: (a, b) =>
    isNaN(a?.data?.avgRating) || isNaN(b?.data?.avgRating)
      ? 0
      : b?.data?.avgRating - a?.data?.avgRating,
  PRICE_LOW_TO_HIGH: (a, b) =>
    isNaN(a?.data?.costForTwo) || isNaN(b?.data?.costForTwo)
      ? 0
      : a?.data?.costForTwo - b?.data?.costForTwo,
  PRICE_HIGH_TO_LOW: (a, b) =>
    isNaN(a?.data?.costForTwo) || isNaN(b?.data?.costForTwo)
      ? 0
      : b?.data?.costForTwo - a?.data?.costForTwo,
};

const filterRestaurants = (restaurants, predicate) => {
  return restaurants.filter(predicate);
};

const sortRestaurants = (restaurants, compareFn) => {
  return restaurants.sort(compareFn);
};

export const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&page_type=DESKTOP_WEB_LISTING'
        )
        const restaurants = response?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestaurants(restaurants)
        setFilteredRestaurants(restaurants)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const showTopRatedRestaurants = () => {
    setFilteredRestaurants(filterRestaurants(restaurants, predicates.TOP_RATED_RESTAURANTS))
  }

  const showLowToHighRatedRestaurants = () => {
    setFilteredRestaurants([...sortRestaurants(restaurants, compareFunctions.RATINGS_LOW_TO_HIGH)])
  }

  const showHighToLowRatedRestaurants = () => {
    setFilteredRestaurants([...sortRestaurants(restaurants, compareFunctions.RATINGS_HIGH_TO_LOW)])
  }

  const showLowToHighPricedRestaurants = () => {
    setFilteredRestaurants([...sortRestaurants(restaurants, compareFunctions.PRICE_LOW_TO_HIGH)])
  }

  const showHighToLowPricedRestaurants = () => {
    setFilteredRestaurants([...sortRestaurants(restaurants, compareFunctions.PRICE_HIGH_TO_LOW)])
  }

  const handleSearchBoxChange = event => {
    const searchText = event.target.value
    setSearchText(searchText)
  }

  const search = () => {
    setFilteredRestaurants(filterRestaurants(restaurants, predicates.SEARCH(searchText)))
  }

  return (
    <>
      {restaurants?.length === 0 ? (
        <div className="restaurant-container">
          <div className="search-area">
            <Shimmer type={'LINE'} height={'18px'} />
            <Shimmer type={'LINE'} height={'18px'} />

            <Shimmer type={'LINE'} height={'18px'} />

            <Shimmer type={'LINE'} height={'18px'} />

            <Shimmer type={'LINE'} height={'18px'} />

            <Shimmer type={'LINE'} height={'18px'} />
            <Shimmer type={'LINE'} height={'18px'} />
          </div>
          <div className="cards-area">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
              <ShimmerRestaurantCard key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="restaurant-container">
          <div className="search-area">
            <input type="text" value={searchText} onChange={handleSearchBoxChange} />
            <button className="filterBtn" onClick={search}>
              Search
            </button>

            <button className="filterBtn" onClick={showTopRatedRestaurants}>
              TOP RATED RESTAURANTS
            </button>
            <button className="filterBtn" onClick={showLowToHighRatedRestaurants}>
              LOW TO HIGH RATINGS
            </button>
            <button className="filterBtn" onClick={showHighToLowRatedRestaurants}>
              HIGH TO LOW RATINGS
            </button>
            <button className="filterBtn" onClick={showLowToHighPricedRestaurants}>
              LOW TO HIGH PRICE
            </button>
            <button className="filterBtn" onClick={showHighToLowPricedRestaurants}>
              HIGH TO LOW PRICE
            </button>
          </div>
          <div className="cards-area">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
            ))}
          </div>
        </div>
      )}
    </>
  )
};
