import {useState, useEffect} from 'react';

export default function MyBox() {
  const [blue,setBlue] = useState(false);
  const [orange,setOrange] = useState(false);
  const blueChange = () =>{
    setBlue(!blue)
  }
  const orangeChange = () =>{
    setOrange(!orange)
  }

  useEffect(()=>{
    console.log(blue)
  },[blue]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className={`w-1/3 h-1/3 border border-slate-400 rounded-md
                      flex flex-col justify-center items-center
                      p-5 m-5 ${blue ? 'bg-blue-500' : ''}
                      `}>
        <h1 className={`flex justify-center items-center
                       text-3xl font-bold ${blue ? 'text-white' : 'text-blue-500'}
                       border  border-slate-600 rounded-md
                       p-5 m-5`}>Blue</h1>
        <div className='flex justify-center items-center
                        text-xl font-bold 
                        border  border-slate-600 rounded-md
                        p-5 m-5
                        bg-blue-300'
             onClick={blueChange}>
          Blue Toggle
        </div>
      </div>
      <div className={`w-1/3 h-1/3 border border-slate-400 rounded-md
                      flex flex-col justify-center items-center
                      p-5 m-5 ${orange ? 'bg-orange-500' : ''}
                      `}>
        <h1 className={`flex justify-center items-center
                       text-3xl font-bold ${orange ? 'text-white' : 'text-orange-500'}
                       border  border-slate-600 rounded-md
                       p-5 m-5`}>Orange</h1>
        <div className='flex justify-center items-center
                        text-xl font-bold 
                        border  border-slate-600 rounded-md
                        p-5 m-5
                        bg-orange-300'
             onClick={orangeChange}>
          Orange Toggle
        </div>
      </div>
    </div>
  )
}
