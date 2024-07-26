import { FC } from 'react'
import { Button, type TButtonProps } from '../../ui/Button';

import './styles.css';

type TControlsProps = {
  config?: TButtonProps[],
}

const Controls: FC<TControlsProps> = ({ config }) => {
  return (
    <div className='controls'>
      {config?.map((item, idx) => 
        <Button key={idx} {...item} />
      )}
    </div>
  )
}

export { Controls }
