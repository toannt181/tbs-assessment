import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import Header from 'components/Header'
import SearchableInput from 'components/SearchableInput'
import CaseList from './CaseList'
import { CatalogContainer, Content, SearchBox, Notice } from './styles'
import { ICase } from 'types/ICase'
import { IOption } from 'types/IOption'
import getCountries from 'api/getCountries'
import getCases from 'api/getCases'
import { DELAY_TIME, NUMBER_PER_PAGE } from 'constants/config'

const StaticPage = () => {
  const [keyword, setKeyword] = useState('')
  const [cases, setCases] = useState<ICase[]>([])
  const [options, setOptions] = useState<IOption[]>([])
  const [page, setPage] = useState(1)
  const timeoutNumber = useRef(0)

  useEffect(() => {
    const fetchCountries = async () => {
      const data: IOption[] = await getCountries()
      setOptions(data)
    }
    fetchCountries()
  }, [])

  useEffect(() => {
    if (timeoutNumber.current) {
      clearTimeout(timeoutNumber.current)
      timeoutNumber.current = 0
    }

    const fetchCases = async () => {
      const data: ICase[] = await getCases(keyword)
      setCases(data)
    }

    if (keyword) {
      timeoutNumber.current = setTimeout(fetchCases, DELAY_TIME)
    }

    return () => clearTimeout(timeoutNumber.current)
  }, [keyword])

  const limitedCases = useMemo(() => cases.slice(0, NUMBER_PER_PAGE * page), [page, cases])

  const onChangeKeyword = useCallback((value) => {
    setKeyword(value)
  }, [])

  const onReachBottom = useCallback(() => {
    if (page * NUMBER_PER_PAGE >= cases.length) return
    setPage((state) => state + 1)
  }, [page, cases])

  return (
    <CatalogContainer>
      <Header />
      <Content>
        <SearchBox>
          <SearchableInput
            value={keyword}
            options={options}
            keyword={keyword}
            onChangeKeyword={onChangeKeyword}
            placeholder="Search by country"
          />
        </SearchBox>
        {keyword && (
          <>
            <Notice>
              {cases.length === 0
                ? "Can't found Covid-19 Cases data"
                : `Found ${cases.length} cases, from 1 to ${Math.min(page * NUMBER_PER_PAGE, cases.length)}`}
            </Notice>
            {cases.length > 0 && <CaseList cases={limitedCases} onReachBottom={onReachBottom} />}
          </>
        )}
      </Content>
    </CatalogContainer>
  )
}

export default StaticPage
