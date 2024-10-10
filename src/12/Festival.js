import { useState, useEffect, useRef } from "react";
import TailCard from "../UI/TailCard";

export default function Festival() {
  const [tdata, setTdata] = useState([]);
  const [city, setCity] = useState();
  const x = useRef();
  const [info, setInfo] = useState();


  const getFetchData = async () => {
    const apikey = process.env.REACT_APP_API_KEY;
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=38&resultType=json`;
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data['getFestivalKr']['item']);
  };

  const handleCity = () => {
    let tm = tdata.filter(item => item['GUGUN_NM'] == x.current.value);
    setInfo(tm.map(item => <TailCard key={item['UC_SEQ']} imgUrl={item['MAIN_IMG_NORMAL']} title={item['TITLE']}
                                     content={item['TRFC_INFO']} kw={item['USAGE_DAY_WEEK_AND_TIME']} />))
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    let tm = tdata.map(item => item['GUGUN_NM']);
    tm = [...new Set(tm)];
    tm.sort();
    tm = tm.map(item => <option key={item} value={item}>{item}</option>);
    setCity(tm);
  }, [tdata]);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='text-2xl font-bold mb-5'>
        부산 축제 정보
      </div>
      <div className='w-10/12 p-5 flex justify-center items-center'>
        <select className='form-select w-1/2 mb-5'
                ref={x} onChange={handleCity}>
          <option value="" >지역선택</option>
          {city}
        </select>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
        {info}
      </div>
    </div>
  )
}
