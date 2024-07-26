import { ChangeEvent, FC } from 'react'
import './styles.css'

type TRangeProps = {
  onChange: (val: number) => void,
  value?: number,
  max?: number,
  members?: number,
}

const Range: FC<TRangeProps> = ({ onChange, value = 2, max = 10, members }) => {
  const length = max - 1;
  const values = Array.from({ length }, (_, idx) => idx + 2);

  const changeHandle = (
    e: ChangeEvent<HTMLSelectElement>,
  ) => onChange?.(+e.currentTarget.value);

  return (
    <div className='range'>
      <div>Team size:</div>
      <select
        className='range-select'
        onChange={changeHandle}
        defaultValue={value}
      >
        {values.map((v) => <option key={v} value={v}>{v}</option>)}
      </select>
      {members && <>
        <div>Active:</div>
        <div>{members}</div>
      </>}
    </div>
  )
}

export { Range, type TRangeProps }
