export default function BoxOfficeTr({handleClick,rank,movieNm,salesAcc,audiCnt,rankInten}) {
  return (
    <>
      <tr onClick={handleClick}
          className="bg-white hover:bg-orange-200 hover:font-bold">
        <td className="px-6 py-4 font-medium
                      text-gray-900 text-center whitespace-nowrap">
          {rank}
        </td>
        <td className="px-6 py-4 text-center">
          {movieNm}
        </td>
        <td className="px-6 py-4 text-center">
          {parseInt(salesAcc).toLocaleString('ko-KR')}원
        </td>
        <td className="px-6 py-4 text-center">
          {parseInt(audiCnt).toLocaleString('ko-KR')}명
        </td>
        <td className="px-6 py-4 text-center">
          {parseInt(rankInten) === 0 ? '-' : parseInt(rankInten) > 0 ? <span className='text-red-500'>{rankInten}  ▲</span> : 
                                                                       <span className='text-blue-700'>{rankInten.slice(1,2)}  ▼</span>}
        </td>
      </tr>
    </>
  )
}
