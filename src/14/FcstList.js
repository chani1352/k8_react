import { useState, useEffect,useRef } from "react";
import { useSearchParams } from "react-router-dom";
import getcode from "./getcode.json";

export default function FcstList() {
  const [tdata, setTdata] = useState([]);
  const [sparams] = useSearchParams();
  const gubun = sparams.get('gubun');
  const X = sparams.get('X');
  const Y = sparams.get('Y');
  const dt = sparams.get('dt');
  const area = sparams.get('area');
  const time = sparams.get('time');
  const gubundata = gubun == 'getUltraSrtFcst' ? '초단기예보' : '단기예보';
  const category = useRef();
  const [cate, setCate] = useState();
  const [info,setInfo] = useState();

  const sky = {'1' : '🌞(맑음)', '3':'⛅(구름많음)', '4' : '☁(흐림)'}
  const rain = {'0' :'🌞(없음)' , '1' : '🌧(비)', '2' : '🌧🌨(비/눈)' , 
                '3' :'🌨(눈)' , '4' : '🌦(소나기)', '5' : '🌦(빗방울)' , 
                '6' : '🌦(빗방울눈날림)' , '7' : '🌦(눈날림)' }

                             


  const getFectchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubun}?serviceKey=`;
    url = `${url}${apikey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=${time}&nx=${X}&ny=${Y}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data['response']['body']['items']['item']);
  };

  useEffect(() => {
    let tm = getcode.filter(item => item['예보구분'] == gubundata);
    tm = tm.map(item => <option key={item['항목값']} value={item['항목명'] + ',' + item['항목값']}>{item['항목명']}({item['항목값']}) </option>);
    setCate(tm);
    getFectchData();
  }, []);

  const handleCate = () => {
    if(!tdata || category.current.value ==="") return;
    const hanEn = category.current.value.split(',');
    let tm = tdata.filter(item=>item['category'] == hanEn[1]);
    let unit = getcode.filter(item => item['항목값'] == hanEn[1])[0];
    console.log('getcode',getcode);
    console.log(unit);
    unit = unit['단위'];
    console.log(unit);
    let i = 0;
    tm = tm.map((item,i)=> <tr key={item.category+i+1} className="bg-white border-b">
                           <td className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap">
                            {hanEn[0]}
                            </td>
                            <td className="px-6 py-4 text-center">
                            {item['fcstDate'].slice(0,4)}-{item['fcstDate'].slice(4,6)}-{item['fcstDate'].slice(6,8)}
                            </td>
                            <td className="px-6 py-4 text-center">
                            {item['fcstTime'].slice(0,2)}:{item['fcstTime'].slice(2,4)}
                            </td>
                            <td className="px-6 py-4 text-center">
                            {hanEn[0] =='하늘상태' ? sky[item['fcstValue']] : 
                             hanEn[0] =='강수형태' ? rain[item['fcstValue']] : item['fcstValue'] + unit} 
                           

                            {/* {hanEn[0] =='하늘상태' ? item['fcstValue'] == 1 ? '🌞(맑음)' : item['fcstValue'] == 3 ? '⛅(구름많음)' : '☁(흐림)' : 
                             hanEn[0] =='강수형태' ? item['fcstValue'] == 0 ? '🌞(없음)' : item['fcstValue'] == 1 ? '🌧(비)' : item['fcstValue'] == 2 ? '🌧🌨(비/눈)' :
                             item['fcstValue'] == 3 ? '🌨(눈)' : item['fcstValue'] == 4 ? '🌦(소나기)' : item['fcstValue'] == 5 ? '🌦(빗방울)' : item['fcstValue'] == 6 ? '🌦(빗방울눈날림)' :
                             '🌦(눈날림)' : item['fcstValue'] + unit} */}
                            </td>
                            </tr>)
    setInfo(tm);            
  };

  return (
    <div className = 'w-4/5'>
      <div className='w-full grid grid-cols-2 gap-2 mt-5'>
        <div className='w-full font-bold text-xl ml-5'>
          {gubundata} : {area} ({dt.slice(0,4)}-{dt.slice(4,6)}-{dt.slice(6,8)})
        </div>
        <div>
          <select ref={category} className='form-select w-full' onChange={handleCate}>
            <option value="">항목선택</option>
            {cate}
          </select>
        </div>
      </div>
      <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
        <thead className="text-md text-gray-700 uppercase font-bold
           bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg text-center">
              항목명
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              예측날짜
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              예측시간
            </th>
            <th scope="col" className="px-6 py-3 text-center rounded-e-lg">
              항목값
            </th>
          </tr>
        </thead>
        <tbody>
          {info}
        </tbody>
      </table>
      </div>

    </div>
  )
}
