import { useEffect, useState } from "react";
import BoxOfficeTr from './BoxOfficeTr';

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs,setTrs] = useState();
  const [info,setInfo] = useState();
  const getFetchData = () => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929';

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    //데이터 가져오기,비동기방식으로 움직임,정상적으로 실행될때 then실행, 오류 발생 시 catch실행
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTdata(data.boxOfficeResult.dailyBoxOfficeList)
      })
      .catch(err => console.log(err))
      ;
    console.log('apiKey=', apiKey);
    console.log('url=', url);
  };

  const handleTrClick = (item) => {
    setInfo(item.movieNm)
  }

  //맨 처음 한번 실행
  useEffect(() => {
    getFetchData();
  }, []);

  //fetch 데이터가 채워지면
  useEffect(() => {
    if (!tdata) return;
    console.log(tdata);
    let tm = tdata.map(item => <BoxOfficeTr handleClick = {() => handleTrClick(item)}
                                            key={item.movieCd} rank={item.rank} movieNm={item.movieNm} 
                                            salesAcc={item.salesAcc} audiCnt={item.audiCnt} rankInten={item.rankInten} />)
    setTrs(tm);
  }, [tdata]);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md text-gray-700 uppercase font-bold
           bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg text-center">
                순위
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                영화명
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                매출액
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                관객수
              </th>
              <th scope="col" className="px-6 py-3 text-center rounded-e-lg">
                증감율
              </th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
        <div>
          {info}
        </div>
    </div>
  )
}
