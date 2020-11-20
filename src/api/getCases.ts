/* eslint-disable import/no-anonymous-default-export */
import { MOCK_URL } from 'constants/config'
import { ICase } from 'types/ICase'

export default async (slug: string) => {
  try {
    const result = await fetch(`${MOCK_URL}/country/${slug}/status/confirmed`)
    const cases = await result.json()
    return cases.map((item: ICase, index: number) => ({ ...item, id: index }))
  } catch {
    return []
  }
}
