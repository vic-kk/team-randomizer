import { FC } from 'react'
import { TResultItem } from '../../utils';
import './styles.css'

type TResultCardProps = {
  pair: TResultItem,
  id: number,
}

const ResultCard: FC<TResultCardProps> = ({ id, pair }) => (
  <div
    className='card'
    style={{animationDelay: `${id * 500}ms`}}
  >
    <div className='card-head'>
      <div className='card-head-id'>{id}</div>
      <div className='card-head-title'>TEAM</div>
    </div>
    {pair?.map((user, idx) => user && (
      <div
        className='card-gamer'
        key={`${user}${idx}`}
      >{user}</div>
    ))}
  </div>
)

export { ResultCard }
