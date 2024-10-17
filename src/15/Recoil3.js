import TailButton from "../UI/TailButton";
import { useState,useEffect,useRef } from "react";
import {AtomN,AtomN2} from "./AtomN";
import { useRecoilState } from "recoil";

export default function Recoil3({ x3, y3 }) {
  
  const [x,setX] = useState(x3);
  const [y,setY] = useState(y3);
  const inRef = useRef();

  const [n,setN] = useRecoilState(AtomN);
  const [n1,setN1] = useRecoilState(AtomN2);

  const handleUp = () =>{
    // x를 변경하려면 setX로 변경
    setX(x+1);
    setN(n+1);
  };

  const handleDown = () =>{
    setX(x-1);
    setN(n-1);
  };

  useEffect(()=>{
    setN1(n * 2);
  },[n]);

  useEffect(()=>{
    setY(x * parseInt(inRef.current.value));
  },[x]);

  return (
    <div className='w-full h-4/5 flex flex-col
                    mt-10 p-5 mx-2
                    bg-lime-500 text-black font-bold'>
      Recoil3 (x = {x}, y = {y})
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <input type = 'number'
               ref={inRef} min = {2} max={5}
               defaultValue={2}
               className='form-input' />
               
        <TailButton caption='증가'
          color='blue'
          handleClick = {handleUp}
          size='w-10/12' />
        <TailButton caption='감소'
          color='orange'
          handleClick = {handleDown}
          size='w-10/12' />
      </div>
    </div>

  )
}
