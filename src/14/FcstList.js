import { useState, useEffect } from "react";
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

  const [info, setInfo] = useState([]);


  const getFectchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubun}?serviceKey=`;
    url = `${url}${apikey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=${time}&nx=${X}&ny=${Y}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data['response']['body']['items']['item']);
  };

  useEffect(() => {
    console.log(getcode);
    let tm = getcode.filter(item => item['예보구분'] == gubundata);
    console.log(tm)
    tm = tm.map(item => <option key={item['항목값']} value={item['항목값']}>{item['항목명']}({item['항목값']}) </option>);
    setInfo(tm);
    getFectchData();
  }, []);

  useEffect(() => {

    // console.log("tdata", tdata);
    // let tm = getcode.filter(item => item['예보구분'] == gubundata);
    // tm = [...new Set(tm)];
    // console.log(tm);
    // tm = tm.map(item => <option key={item} value={item}>{item}</option>)
    // setInfo(tm);
  }, [tdata]);


  return (
    <div className = 'w-full'>
      <div className='w-full flex justify-between items-center mt-5'>
        <div className='font-bold text-xl ml-5'>
          {gubundata} : {area} ({dt})
        </div>
        <div>
          <select className='form-select'>
            <option value="1">항목선택</option>
            {info}
          </select>
        </div>
      </div>
      <div>

      </div>

    </div>
  )
}
