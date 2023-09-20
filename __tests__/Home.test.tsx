import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('should have "Welcome to My Next.js Starter Template" text', () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByText('Welcome to My Next.js Starter Template') // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })

  it('should contain the text "This is the home page of your starter template."', () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByText('This is the home page of your starter template.') // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })

  it('should have a heading with the text "Fast Performance"', () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByRole('heading', {
      name: 'Fast Performance'
    }) // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })
})
