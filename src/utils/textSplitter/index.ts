import { ChangeEvent } from "react";

export const tester = (
  e:ChangeEvent<HTMLTextAreaElement>,
) => {
  const { target: { value : wholeText = '' } } = e;  
  
  return wholeText;
}