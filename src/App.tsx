import { ChangeEvent, useState } from 'react'
import { tester } from './utils';
import './App.css'

type RType = (string | undefined)[];

function App() {
  const [ splittedSms, setSplittedSms ] = useState<string[]>();
  const [ result, setResult ] = useState<RType[]>();

  const textareaHandle = (
    e:ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const result = tester(e);
    setSplittedSms(result.split('\n'));
    console.log(splittedSms);
  };

  const clickHandler = () => {
    if (!splittedSms || splittedSms?.length < 1) return;
    const init = [ ...splittedSms ];
    const b = [];
    const pairs = [];
    while(init.length > 0) {
        b.push(init.splice(Math.floor(Math.random()*init.length),1)[0]);
    }
    while(b.length > 0) {
        pairs.push([b.shift(), b.shift() || undefined])
    }
    setResult(pairs);
    console.log(pairs);
  }

  const clickClearHandler = () => {
    setResult([]);
  }


  return (
    <div className='wrap'>
      <div>
        <div>
          <div onClick={clickHandler} className='btn'>Random</div>
          <div onClick={clickClearHandler} className='btn'>Clear</div>
          <textarea
            id='text'
            className='textarea'
            onChange={textareaHandle}
          />
        </div>
      </div>

      <div className='result'>
        {result?.map((pair, idx) => (
          <div className='pair'>
            <div>==={idx+1}===</div>
            <hr/>
            <div>{pair[0]}</div>
            <div>{pair[1] || ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
