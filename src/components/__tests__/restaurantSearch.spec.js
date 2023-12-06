import { fireEvent, render, screen } from '@testing-library/react'
import RESTAURANTS_DATA from './mockdata/restaurantsData.json'
import { RestaurantContainer } from '../restaurant/RestaurantContainer'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANTS_DATA)
    }
  })
})

describe('Home page search', () => {
  it('home page search', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RestaurantContainer />
        </BrowserRouter>
      )
    )

    const resCards = screen.getAllByTestId('resCard')
    expect(resCards.length).toBe(20)
  })

  it('should return 3 res cards when search with pizza', async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <RestaurantContainer />
        </BrowserRouter>
      )
    )

    const searchInput = screen.getByTestId('search-input')
    fireEvent.change(searchInput, { target: { value: 'pizza' } })

    const searchBtn = screen.getByRole('button', { name: 'Search' })
    fireEvent.click(searchBtn)

    const resCards = screen.getAllByTestId('resCard')
    expect(resCards.length).toBe(3)
  })
})
