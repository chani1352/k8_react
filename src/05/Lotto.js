import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";
import { useState } from "react";

export default function Lotto() {

  const [n, setN] = useState([]);
  const handleClick1 = () => {
    let arr = []
    while (arr.length < 7) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(num)) arr.push(num);
    }
    let arr2 = arr.splice(-1);
    arr.sort((a, b) => a - b);
    arr = arr.concat(arr2);  // 배열 합치기 concat

    console.log(arr)

    let tm = arr.map(item => <TailBall key={'b'+ item} n={item} />);

    tm.splice(6,0,<div className='text-3xl mx-2 font-bold' key='sp'>+</div>);

    setN(tm);

    console.log(tm)

  };

  const handleClick2 = () => {
    console.log('handleClick2');
  };

  return (
    <div>
      <div className='flex justify-center items-center mb-10 text-black'>
        {n}
      </div>
      <div>
        <TailButton caption='로또번호생성' color='blue'
          handleClick={handleClick1}
        />
        <TailButton caption='로또번호지우기' color='orange'
          handleClick={handleClick2}
        />
      </div>
    </div>
  )
}
