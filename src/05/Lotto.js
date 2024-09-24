import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";
import {useState} from "react";

export default function Lotto() {

  // const [n,setN] = useState([]);
  const handleClick1 = () => {
    let arr = []
    while (arr.length < 7) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(num)) arr.push(num);
    }

    let n = arr.map(item => <TailBall n={item} />);

    // setN(n);
    console.log(n);
  };
  const handleClick2 = () => {
    console.log('handleClick2');
  };

  return (
    <div>
      <div className='flex justify-center items-center mb-10'>
        {/* {n} */}
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
