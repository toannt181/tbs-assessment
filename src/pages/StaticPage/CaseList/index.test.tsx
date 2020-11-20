import CaseList from '.'
import React from 'react'
import { render, screen } from '@testing-library/react'
import mock from './mock'

global.IntersectionObserver = mock

describe('CaseList Component', () => {
  it('should render the component', () => {
    const props = {
      cases: [],
      onReachBottom: () => {},
    }
    const { container } = render(<CaseList {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should render the list with items', () => {
    const props = {
      cases: [
        {
          id: 1,
          CountryCode: 'CountryCode',
          Country: 'Country',
          Province: 'Province',
          Lat: 'Lat',
          Lon: 'Lon',
          Date: 'Date',
        },
      ],
      onReachBottom: () => {},
    }
    render(<CaseList {...props} />)
    expect(screen.getByTestId('list').children).toHaveLength(1)
  })
})
