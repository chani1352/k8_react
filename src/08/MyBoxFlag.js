import {useState, useEffect} from 'react';

export default function MyBoxFlag({color}) {
  const [flag,setFlag] = useState(false);
  const colorObj = {
    'blue' : {
      'bg300' : 'bg-blue-300',
      'bg500' : 'bg-blue-500',
      'text500' : 'text-blue-500'
    },
    'orange' :{
      'bg300' : 'bg-orange-300',
      'bg500' : 'bg-orange-500',
      'text500' : 'text-orange-500'
    },    
    'red' :{
      'bg300' : 'bg-red-300',
      'bg500' : 'bg-red-500',
      'text500' : 'text-red-500'
    }
  }
  const obj = colorObj[color];

  const colorChange = () =>{
    setFlag(!flag)
  }

  useEffect(()=>{
    console.log(flag)
  },[flag]);

  return (
      <div className={`w-1/3 h-1/3 border border-slate-400 rounded-md
                      flex flex-col justify-center items-center
                      p-5 m-5 ${flag ? obj.bg500 : ''}
                      `}>
        <h1 className={`flex justify-center items-center
                       text-3xl font-bold ${flag ? 'text-white' : obj.text500}
                       border  border-slate-600 rounded-md
                       p-5 m-5`}>{color}</h1>
        <div className={`flex justify-center items-center
                        text-xl font-bold 
                        border  border-slate-600 rounded-md
                        p-5 m-5
                        ${obj.bg300}`}
             onClick={colorChange}>
          {color} Toggle
        </div>
      </div>
  )
}
