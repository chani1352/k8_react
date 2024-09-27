import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import fooddata from './fooddata.json'
import {useState} from "react";

export default function FoodCard({content,content1,content2,content3,content4}) {

  const foodimg = {
    "기초푸드뱅크": bank,
    "광역지원센터": busan,
    "기초푸드마켓": market
  }

  const [isShow,setIsShow] = useState(false);
  const handleClick =()=>{
    setIsShow(!isShow);  //true면 false, false면 true
  }

  return (
    <div className='w-full flex border border-slate-200
                    rounded-md p-5'>
      <div>
        <img src={foodimg[content]} 
        // <img src={content === '광역지원센터' ? busan: content ==='기초푸드뱅크' ? bank : market}
        alt={content} />
      </div>
      <div className='w-full flex flex-col justify-between items-start'>
        <div>
          <div className='text-2xl font-bold'>{content1}</div>
          <div className='font-bold'>{content2}</div>
          <div>{content3}</div>
        </div>
        <div className=' w-full h-8 p-2 flex justify-start items-center
                         bg-slate-600 text-white font-bold'
                         onClick={handleClick}>
          {/* {isShow ? content4 :''} */}
          {/* 둘다 true일때만 실행 */}
          {isShow && content4} 
        </div>
      </div>
    </div>
  )
}
