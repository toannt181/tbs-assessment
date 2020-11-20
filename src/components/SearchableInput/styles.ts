import styled from 'styled-components'

export const SearchableContainer = styled.div`
  position: relative;
`

export const OptionContainer = styled.div`
  position: absolute;
  top: 48px;
  background: #fff;
  left: 0;
  right: 0;
  max-height: 250px;
  border: 1px solid #aaa;
  padding: 4px;
  overflow: auto;
`

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: lightblue;
  }
`
