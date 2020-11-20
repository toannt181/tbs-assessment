import styled from 'styled-components'

export const CaseListContainer = styled.div``

export const Case = styled.li`
  margin: 16px;
  background: #fff;
  box-shadow: 4px 4px 16px #f1f1f1;
  border-radius: 4px;
  transition: 0.25s;
  flex-basis: 100%;
  padding: 16px;
  display: block;

  &:hover {
    box-shadow: 6px 6px 24px #e3e3e3;
  }
`

export const Label = styled.div`
  font-weight: bold;
  display: inline-block;
  margin-right: 16px;
`
