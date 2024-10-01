import {useState, useEffect} from 'react';

export default function MyBoxFlag({color}) {
  const [flag,setFlag] = useState(false);

  const colorChange = () =>{
    setFlag(!flag)
  }

  useEffect(()=>{
    console.log(flag)
  },[flag]);

  return (
      <div className={`w-1/3 h-1/3 border border-slate-400 rounded-md
                      flex flex-col justify-center items-center
                      p-5 m-5 ${flag ? `bg-${color}-500` : ''}
                      `}>
        <h1 className={`flex justify-center items-center
                       text-3xl font-bold ${flag ? 'text-white' : `text-${color}-500`}
                       border  border-slate-600 rounded-md
                       p-5 m-5`}>{color}</h1>
        <div className={`flex justify-center items-center
                        text-xl font-bold 
                        border  border-slate-600 rounded-md
                        p-5 m-5
                        bg-${color}-300`}
             onClick={colorChange}>
          {color} Toggle
        </div>
      </div>
  )
}
