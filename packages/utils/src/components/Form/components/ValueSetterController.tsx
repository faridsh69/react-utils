import { useEffect } from 'react'
import { Controller } from 'react-hook-form'

const ValueSetter = (props: any) => {
  const { value, onChange } = props
  useEffect(() => {
    onChange(value)
  }, [value])

  return <></>
}

export const ValueSetterController = (props: any) => {
  const { control, name, value } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => <ValueSetter onChange={onChange} value={value} />}
    />
  )
}
