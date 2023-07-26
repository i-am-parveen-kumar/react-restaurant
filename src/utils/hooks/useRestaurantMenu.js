import { useEffect, useState } from 'react'
import { MENU_ITEM_TYPE_KEY, SWIGGY_MENU_API_URL } from '../../constants/constants'
import axios from 'axios'
const useRestaurantMenu = id => {
  const [resDetails, setResDetails] = useState({})

  useEffect(() => {
    async function fetchData() {
      const menuAPIURL = `${SWIGGY_MENU_API_URL}${id}`
      const response = await axios(menuAPIURL)
      setResDetails(response?.data?.data?.cards)
    }
    fetchData()
  }, [])

  const menuItemCards = resDetails?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    card => card?.card?.card?.['@type'] == MENU_ITEM_TYPE_KEY
  )
  return { resDetails, menuItemCards }
}

export default useRestaurantMenu
