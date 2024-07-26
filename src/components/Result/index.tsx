import { FC } from 'react'
import { ResultCard } from '../../ui/ResultCard';
import { TResult } from '../../utils';

import './styles.css';

type TResultProps = {
  result?: TResult,
}

const Result: FC<TResultProps> = ({ result }) => {
  return (
    <div className='result'>
      {result?.map((pair, idx) => (
        <ResultCard key={idx} pair={pair} id={idx + 1} />
      ))}
    </div>
  )
}

export { Result }
