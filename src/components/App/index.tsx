import { ChangeEvent, useState } from 'react'
import { getLS, TResult, text, shuffle } from '../../utils';
import { TButtonProps } from '../../ui/Button';
import { Textarea } from '../../ui/Textarea';
import { Result } from '../Result';

import './styles.css';
import { Controls } from '../Controls';

function App() {
  const [ gamers, setGamers ] = useState<string>(getLS());
  const [ result, setResult ] = useState<TResult>([]);

  const textareaHandle = (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => text(e, setGamers);

  const controlsConfig: TButtonProps[] = [{
    onClick: () => shuffle(gamers, setResult),
    variant: 'REGROUP',
  },{
    onClick: () => setResult([]),
    variant: 'CLEAR',
  }]

  return (
    <div className='wrap'>
      <div className='left-group'>
        <Controls config={controlsConfig} />
        <Textarea
          value={gamers}
          onChange={textareaHandle}
        />
      </div>

      <Result result={result} />
    </div>
  )
}

export { App }
