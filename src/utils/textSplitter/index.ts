import { ChangeEvent } from "react";

export type TResultItem = (string | undefined)[];
export type TResult = TResultItem[];

export const shuffle = (
  gamers: string,
  func: (val: TResult) => void,
) => {
  const init = gamers.split('\n').filter((i) => (!!i.trim() && i[0] !== '-'));
  const b:TResultItem = [];
  const pairs: TResult = [];
  while(init.length > 0) {
    b.push(init.splice(Math.floor(Math.random()*init.length),1)[0]);
  }
  while(b.length > 0) {
    pairs.push([b.shift(), b.shift()])
  }
  func(pairs);
}

export const text = (
  e: ChangeEvent<HTMLTextAreaElement>,
  func: (val: string) => void,
) => {
  const { target: { value : wholeText = '' } } = e;
  setLS(wholeText);
  func(wholeText);
}

export const getLS = () => localStorage.getItem('gamers') ?? '';

export const setLS = (val: string) => localStorage.setItem('gamers', val);