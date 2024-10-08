import { useEffect, useState,useRef } from "react";
import BoxOfficeTr from './BoxOfficeTr';

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs] = useState();
  const [info, setInfo] = useState();
  
  const dtRef = useRef();

  const getYesterday = () => {
    const yesterday = new Date();  //const라 변경 안됨, 상수
    yesterday.setDate(yesterday.getDate() - 1);  //set 함수로 값 변경
    console.log('yesterday', yesterday);
    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
  
    return `${year}-${month}-${day}`;
  }


  const getFetchData = (dt) => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    // const dt = '20240929';

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
    let tm = `[${item.movieCd}] ${item.movieNm} : 
              누적관객수 ${parseInt(item.audiCnt).toLocaleString()} 입니다.`;
    setInfo(tm);
  }

  //맨 처음 한번 실행
  useEffect(() => {
    const ydt = getYesterday() ;
    console.log(ydt);
    dtRef.current.value = ydt;
    dtRef.current.max = ydt; //어제 날짜 이후는 선택안되게 max설정
    getFetchData(ydt.replaceAll('-',''));
  }, []);

  //fetch 데이터가 채워지면
  useEffect(() => {
    if (!tdata) return;
    console.log(tdata);
    let tm = tdata.map(item => <BoxOfficeTr handleClick={() => handleTrClick(item)}
      key={item.movieCd} rank={item.rank} movieNm={item.movieNm}
      salesAcc={item.salesAcc} audiCnt={item.audiCnt} rankInten={item.rankInten} />)
    setTrs(tm);
  }, [tdata]);

  // const handleDate = ()=> {    함수만들어서 해도 됨
  //   const cdt = dtRef.current.value.replaceAll('-','');
  //   getFetchData(cdt);
  // };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-10/12 h-15 p-5 
                      flex justify-between items-center'>
        <div className='text-xl font-bold'>
          박스오피스
        </div>
        <div className=''>
          <input ref={dtRef} type='date' id='dt' name='dt' onChange={()=> getFetchData(dtRef.current.value.replaceAll('-',''))} />
        </div>
      </div>
      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
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
        <tfoot>
          <tr className='bg-slate-500 text-white w-full
                          text-center items-center
                          h-20 p-2'>
            <td colSpan={5}>
              {info}
            </td>
          </tr>
        </tfoot>
      </table>
      <div>

      </div>
    </div>
  )
}
