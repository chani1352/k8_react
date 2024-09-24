import {useState} from "react";

export default function MyListItem({title,content,imgUrl}) {
  const [n,setN] = useState(0);
  const handleHclick = ()=> {
    setN(n+1);
    console.log(n);
  }
  return (
      <div className='w-full h-full
                      border border-gray-300
                      flex justify-center items-center'>
        <div className='w-1/3 h-3/4 flex justify-start items-center'>
          <img src={imgUrl} alt={title}/>
        </div>
        <div className='w-2/3 h-full p-5 flex flex-col justify-start item-center'>
          <div className='flex flex-col h-3/4'>
            <div className='font-bold text-2xl mb-2 '>
              {title}
            </div>
            <div className='text-sm'>
              {content}
            </div>
          </div>
          <div className='flex w-full h-1/4
                          justify-end items-end'>
            <span className='text-2xl cursor-pointer'
            onClick={handleHclick}>🧡
            </span>
            <span className='mx-3 font-bold'>좋아요</span>
            <span>{n}</span>
          </div>
        </div>
      </div>
  )
}

