/* eslint-disable import/no-anonymous-default-export */
import { MOCK_URL } from 'constants/config'

interface ICountry {
  Slug: string
  Country: string
}

export default async () => {
  try {
    const result = await fetch(`${MOCK_URL}/countries`)
    const countries = await result.json()
    const formatedData = countries.map(({ Slug, Country }: ICountry) => ({
      value: Country,
      label: Slug,
    }))
    return formatedData
  } catch {
    return []
  }
}
