import StaticPage from '.'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Static Page', () => {
  it('should render the static page', () => {
    const { container } = render(<StaticPage />)
    expect(container).toMatchSnapshot()
  })

  it('should render correct page', () => {
    render(<StaticPage />)
    expect(screen.getByText('Covid-19 Cases')).toBeTruthy()
  })

  it('should type value on input', () => {
    render(<StaticPage />)
    const input = screen.getByPlaceholderText('Search by country')
    fireEvent.change(input, { target: { value: 'example' } })
    expect(input.getAttribute('value')).toBe('example')
  })
})
