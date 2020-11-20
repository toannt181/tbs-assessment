import React, { InputHTMLAttributes, useCallback, useMemo, useState } from 'react'
import { SearchableContainer, OptionContainer, Option } from './styles'
import Input from '../Input'
import { IOption } from 'types/IOption'

interface ISearchableInput extends InputHTMLAttributes<HTMLInputElement> {
  onChangeKeyword: (s: string) => void
  options: IOption[]
  keyword: string
}

// const timeoutInt = useRef<number>(0)

// const handleOnChange = useCallback(
//   (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (timeoutInt.current) clearTimeout(timeoutInt.current)
//     const text = e.target.value
//     timeoutInt.current = setTimeout(() => {
//       onChangeValue(text)
//       timeoutInt.current = 0
//     }, DELAY_TIME)
//   },
//   [onChangeValue]
// )

const SearchableInput = ({
  value,
  keyword,
  onChangeKeyword,
  options,
  ...rest
}: ISearchableInput) => {
  const [isShowOptions, setShowOptions] = useState(false)
  const matchedOptions = useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(keyword.toLowerCase()))
  }, [options, keyword])

  const onFocusInput = useCallback(() => {
    setShowOptions(true)
  }, [])

  const onBlurInput = useCallback(() => {
    setTimeout(() => setShowOptions(false), 100)
  }, [])

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeKeyword(e.target.value)
    },
    [onChangeKeyword]
  )

  return (
    <SearchableContainer>
      <Input
        value={keyword}
        onChange={handleChangeInputValue}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        {...rest}
      />
      {isShowOptions && matchedOptions.length > 0 && (
        <OptionContainer>
          {matchedOptions.map((option: IOption) => (
            <Option key={option.value} onClick={() => onChangeKeyword(option.label)}>
              {option.label}
            </Option>
          ))}
        </OptionContainer>
      )}
    </SearchableContainer>
  )
}

export default SearchableInput
