import TailButton from "../UI/TailButton";
import { useEffect, useState } from 'react';

export default function TrafficNav({ data, category }) {
  const [sel,setSel] = useState();
  const [bts, setBts] = useState();
  const [info,setInfo] = useState();
  // const c = ['차대사람','차대차','차량단독','철길건널목'];

  const handleBtClick = (item) => {
    setSel(item);
  }

  useEffect(() => {
    let tm = data.map(item => item[category]);
    tm = [...new Set(tm)].slice(0,5);
    console.log(tm)
    setBts(tm.map(item => <TailButton key={item} caption={item} color={item == sel ? 'orange': 'blue'} 
                                      handleClick={()=>handleBtClick(item)} />))
  }, [data,sel]);

  

  useEffect(()=>{

    console.log('sel:',sel)
    let tm = data.filter(item => item[category]==sel)
    console.log('tm:',tm)
    setInfo()
  },[sel]);

  return (
    <div className='w-full p-2 m-2
                    flex justify-between items-center'>
      <div className='w-1/5 text-2xl font-bold
                      flex justify-center items-center'>
        {category}
      </div>
      <div className='flex justify-end items-center'>
        {bts}
      </div>
      <div>

      </div>
    </div>
  )
}
