import { useReducer } from "react";

// useState: 状態を定義する。状態の更新は利用者に託す。
// useReducer: 状態を定義する。状態の更新も定義する。

export const App = () => {
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch(type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
      default:
        throw new Error('不明な値です');
    }

    // if(type === '+') {
    //   return prev + step;
    // } else if(type === '-') {
    //   return prev - step;
    // }
  }, 0);

  const countUp = () => {
    dispatch({ type: '+', step: 2 });
  }
  const countDown = () => {
    dispatch({ type: '-', step: 3 });
  }

  return (
    <>
      <p>rstate: {rstate}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}