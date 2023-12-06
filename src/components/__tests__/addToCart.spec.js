import { fireEvent, render, screen } from '@testing-library/react'
import RestaurantDetails from '../restaurant/RestaurantDetails'
import RESTAURANTS_DETAILS_DATA from './mockdata/restaurantDetails.json'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import appStore from '../../store/appStore'
import { Header } from '../Header'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANTS_DETAILS_DATA)
  })
})

describe('', () => {
  it('should add item to cart', async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantDetails />
          </BrowserRouter>
        </Provider>
      )
    )
    expect(screen.getByTestId('header-cart').textContent).toBe(' Cart (0)')
    const addButtons = screen.getAllByRole('button', { name: '+' })
    fireEvent.click(addButtons[0])
    expect(screen.getByTestId('header-cart').textContent).toBe(' Cart (1)')
    fireEvent.click(addButtons[1])
    fireEvent.click(addButtons[2])
    expect(screen.getByTestId('header-cart').textContent).toBe(' Cart (3)')
  })
})
