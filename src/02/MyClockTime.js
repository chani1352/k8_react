import { useState, useEffect } from 'react';

function MyClockTime() {
  const [cTime, setCTime] = useState(new Date());

  useEffect(()=>{
    const tm =setInterval(()=>{
      setCTime(new Date());
    }, 1000);

    return clearInterval(tm);
  },[]);
  return (
    <div className='w-full flex justify-center items-center
                    text-2xl font-bold'>
      현재 시간 : {cTime.toLocaleTimeString()}
    </div>
  );
}

export default MyClockTime;