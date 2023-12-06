import { render, screen } from '@testing-library/react'
import { RestaurantCard } from '../../restaurant/RestaurantCard'
import RESTAURANT_MOCK_DATA from '../mockdata/restaurantMockData.json'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
describe('RestaurantCard', () => {
  it('Should Render restaurant card with props', () => {
    render(
      <BrowserRouter>
        {' '}
        <RestaurantCard resData={RESTAURANT_MOCK_DATA} />
      </BrowserRouter>
    )
    const restaurantName = screen.getByText('Barbeque Nation')
    expect(restaurantName).toBeInTheDocument()
  })
})
