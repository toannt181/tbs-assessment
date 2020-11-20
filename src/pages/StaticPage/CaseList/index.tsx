import React, { memo, useRef, useEffect } from 'react'
import { CaseListContainer, Case, Label } from './styles'
import { ICase } from 'types/ICase'

interface ICaseListProps {
  cases: ICase[]
  onReachBottom: () => void
}

const CaseList = ({ cases, onReachBottom }: ICaseListProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loadingRef.current || !containerRef.current) return
    const loadingDom = loadingRef.current as Element

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onReachBottom()
        }
      })
    }
    const observer = new IntersectionObserver(callback)

    observer.observe(loadingDom)

    return () => observer.unobserve(loadingDom)
  }, [onReachBottom])

  return (
    <CaseListContainer ref={containerRef}>
      <ul data-testid="list">
        {cases.map((item) => (
          <Case key={item.id}>
            <div>
              <Label>Country</Label>
              {item.Country}
            </div>
            <div>
              <Label>CountryCode</Label>
              {item.CountryCode}
            </div>
            <div>
              <Label>Province</Label>
              {item.Province}
            </div>
            <div>
              <Label>Latitude</Label>
              {item.Lat}
            </div>
            <div>
              <Label>Longitude</Label>
              {item.Lon}
            </div>
            <div>
              <Label>Date</Label>
              {item.Date}
            </div>
          </Case>
        ))}
      </ul>
      <div ref={loadingRef} />
    </CaseListContainer>
  )
}

export default memo(CaseList)
