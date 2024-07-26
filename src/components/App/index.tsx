import { ChangeEvent, useState } from 'react'
import { getGamersLS, type TResult, text, shuffle, getSizeLS, setSizeLS, filterGamers } from '../../utils';
import { TButtonProps } from '../../ui/Button';
import { Textarea } from '../../ui/Textarea';
import { Result } from '../Result';

import './styles.css';
import { Controls } from '../Controls';
import { Range } from '../../ui/Range';

function App() {
  const [ gamers, setGamers ] = useState<string>(getGamersLS());
  const [ result, setResult ] = useState<TResult>([]);
  const [ lastUpdate, setLastUpdate ] = useState<string>();
  const [ teamSize, setTeamSize ] = useState<number>(getSizeLS());

  const changeHandle = (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => text(e, setGamers);

  const rangeHandler = (size: number) => {
    setSizeLS(size);
    setTeamSize(size);
  }

  const controlsConfig: TButtonProps[] = [{
    onClick: () => {
      setResult([]);
      setTimeout(() => {
        shuffle(gamers, teamSize, setResult);
      }, 150);
      setLastUpdate(new Date().toLocaleString());
    },
    variant: 'REGROUP',
  },{
    onClick: () => {
      setResult([]);
      setLastUpdate('');
    },
    variant: 'CLEAR',
  }]

  return (
    <div className='wrap'>
      <div className='left-group'>
        <Range value={teamSize} onChange={rangeHandler} members={filterGamers(gamers).length} />
        <Controls config={controlsConfig} />
        <Textarea
          value={gamers}
          onChange={changeHandle}
        />
      </div>

      <div>
        {lastUpdate && <div className='time-stamp'>Updated: {lastUpdate}</div>}
        <Result result={result} />
      </div>
    </div>
  )
}

export { App }
