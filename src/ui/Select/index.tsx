import { ChangeEvent, FC } from 'react'
import './styles.css'

type TSelectProps = {
  onChange: (val: number) => void,
  value?: number,
  max?: number,
}

const Select: FC<TSelectProps> = ({ onChange, value = 2, max = 10 }) => {
  const length = max - 1;
  const values = Array.from({ length }, (_, idx) => idx + 2);

  const changeHandle = (
    e: ChangeEvent<HTMLSelectElement>,
  ) => onChange?.(+e.currentTarget.value);

  return (
    <select
      className='select'
      onChange={changeHandle}
      defaultValue={value}
    >
      {values.map((v) => <option key={v} value={v}>{v}</option>)}
    </select>
  )
}

export { Select, type TSelectProps }
