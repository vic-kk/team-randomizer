import { ChangeEvent, useState } from 'react'
import { getGamersLS, text, shuffle, getSizeLS, setSizeLS, filterGamers } from '../../utils';
import { TButtonProps } from '../../ui/Button';
import { Textarea } from '../../ui/Textarea';
import { ResultTeams } from '../ResultTeams';
import { ControlButtons } from '../ControlButtons';
import { TeamsInfo } from '../TeamsInfo';
import { type TResult } from '../../types';

import './styles.css';

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
    // disabled: !!filterGamers(gamers).length,
    variant: 'REGROUP',
  },{
    onClick: () => {
      setResult([]);
      setLastUpdate('');
    },
    variant: 'RESET',
  }]

  return (
    <div className='wrap'>
      <div className='left-group'>
        <TeamsInfo value={teamSize} onChange={rangeHandler} members={filterGamers(gamers).length} />
        <ControlButtons config={controlsConfig} />
        <Textarea
          value={gamers}
          onChange={changeHandle}
        />
      </div>

      <div>
        {lastUpdate && <div className='time-stamp'>Updated: {lastUpdate}</div>}
        <ResultTeams result={result} />
      </div>
    </div>
  )
}

export { App }
