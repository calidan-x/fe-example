interface Props {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export const Input = ({ value, defaultValue, onValueChange }: Props) => {
  return (
    <input
      style={{ border: '1px solid black', padding: '10px' }}
      value={value}
      defaultValue={defaultValue}
      onChange={evt => {
        onValueChange && onValueChange(evt.target.value)
      }}
    />
  )
}
