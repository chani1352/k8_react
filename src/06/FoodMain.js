import fooddata from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton';
import { useState } from 'react';

export default function FoodMain() {
  const [tag, setTag] = useState();

  let tm = fooddata.map(item => item['운영주체 분류']);
  // new Set(tm)으로 중복 제거, set 사용시 arry변수가 아니라 map 사용 불가 [...~~]으로 arry 변경
  tm = [...new Set(tm)];
  const bts = tm.map(item => <TailButton key={item} caption={item}
    color='blue' handleClick={() => handleFood(item)} />); // item넣어서 보낼때 콜백함수 필수

  const handleFood = (item) => {
    let tagList = fooddata.filter(items => items['운영주체 분류'] == item)
                          .map(item => <FoodCard key={item.사업장명} content={item['구분']} content1={item['사업장명']}
      content2={item['운영주체명']} content3={item['사업장 소재지']} content4={item['연락처(대표번호)']} />)
    setTag(tagList)
  }

  return (
    <div className='w-4/5 flex flex-col justify-start'>
      <div className='w-full h-20 bg-blue-200 
                      flex justify-center items-center'>
        <div>
          {bts}
        </div>
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4'>
        {tag}
      </div>

    </div>
  )
}
