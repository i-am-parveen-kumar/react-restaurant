import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../Header'
import { Provider } from 'react-redux'
import appStore from '../../store/appStore'
import { BrowserRouter } from 'react-router-dom'

describe('', () => {
  it('Should render Header component', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('Should render cart with 0 items', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    const cartBtn0 = screen.getByText('Cart (0)')
    expect(cartBtn0).toBeInTheDocument()

    const cartBtn = screen.getByText(/Cart \(\d+\)/)
    expect(cartBtn).toBeInTheDocument()
  })
})
