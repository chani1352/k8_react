import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'

export default function FoodCard() {
  const obj =   {
    "구분": "광역지원센터",
    "시군구": "부산시",
    "사업장명": "부산광역푸드뱅크",
    "신고기준": "당연",
    "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    "연락처(대표번호)": "051-791-1377",
    "팩스번호": "051-714-3096",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "부산광역시사회복지협의회"
  };

  const foodimg = {
    "기초푸드뱅크" : bank,
    "광역지원센터" : busan,
    "기초푸드마켓" : market
  }


    


  return (
    <div className='w-full h-full
                    flex justify-center items-center'>
      <div className='border-4 border-solid'>
        <img src={foodimg[obj['구분']]} alt= {obj['구분']}/>
      </div>
      <div className='border-4 border-solid
                      '>
        <p className='border-4 border-solid
                      text-2xl font-bold'>{obj['사업장명']}</p>
        <p className='border-4 border-solid
                      font-bold'>{obj['운영주체명']}</p>
        <p className='border-4 border-solid'>{obj['사업장 소재지']}</p>
      </div>
    </div>
  )
}
