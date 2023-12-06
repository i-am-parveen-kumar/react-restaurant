import { render, screen } from '@testing-library/react'
import { Contact } from '../Contact'
import '@testing-library/jest-dom'

test('Should render contact us page', () => {
  render(<Contact />)
  const heading = screen.getByRole('heading')
  expect(heading).toBeInTheDocument()
})

test('Should load name input', () => {
  render(<Contact />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})
