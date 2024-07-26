import { FC } from 'react'
import './styles.css'

const TButtonVariant = {
  REGROUP: 'REGROUP',
  CLEAR: 'CLEAR',
}

type TButtonProps = {
  onClick?: () => void,
  text?: string,
  variant: keyof typeof TButtonVariant,
}

const Button: FC<TButtonProps> = ({ text, onClick, variant }) => {
  const buttonClass = TButtonVariant[variant].toLocaleLowerCase();
  const buttonText = text || buttonClass[0].toUpperCase()+buttonClass.slice(1); 

  const clickButtonHandler = () => {
    onClick?.();
  };

  return (
    <div
      onClick={clickButtonHandler}
      className={`btn btn-${buttonClass}`}
    >
      {buttonText}
    </div>
  )
}

export { Button, type TButtonProps, TButtonVariant }
