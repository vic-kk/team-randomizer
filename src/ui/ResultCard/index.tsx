import { FC } from 'react'
import { TResultItem } from '../../utils';
import './styles.css'

type TResultCardProps = {
  pair: TResultItem,
  id: number,
}

const trimUserName = (str: string, length: number) => {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length-3)+'...';
}

const ResultCard: FC<TResultCardProps> = ({ id, pair }) => {
  return (
  <div
    className='card'
    style={{animationDelay: `${id * 250}ms`}}
  >
    <div className='card-head'>
      <div className='card-head-id'>{id}</div>
      <div className='card-head-title'>TEAM</div>
    </div>
    {pair?.map((user, idx) => user && (
      <div
        key={`${user}${idx}`}  
        className='card-gamer'
        title={user}
      >{trimUserName(user, 20)}</div>
    ))}
  </div>
)}

export { ResultCard }
