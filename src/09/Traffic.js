import { useState,useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //전체 데이터
  const [tdata,setTdata] = useState([]);

  //대분류 데이터
  const [c1,setC1] = useState([]);
  const [selC1,setSelC1] = useState();

  //사고 유형 데이터
  const [c2,setC2] = useState([]);
  const [selC2,setSelC2] = useState();

  //데이터 출력
  const [info,setInfo] = useState();

  const getFetchData = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
    url = `${url}page=1&perPage=18&serviceKey=${apiKey}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {setTdata(data.data)})
    .catch(err => console.log(err))
    ;
  };
  //맨처음 한번
  useEffect(()=>{
    getFetchData();   
  },[]);

  //tdata가 변경되었을때 , get~함수 실행시 tdata초기화됐을때 한번, setTdata 실행 시 한번
  //대분류 선정
  useEffect(()=>{
    let tm = tdata.map( item => item['사고유형대분류']);
    tm = [...new Set(tm)];
    setC1(tm);
    console.log(tdata);
  },[tdata]);

  useEffect(()=> {
    console.log(selC1)
    let tm = tdata.filter(item => item['사고유형대분류'] == selC1);
    tm = tm.map(item => item['사고유형']);
    // tm = [...new Set(tm)];
    setC2(tm);
    console.log(c2);
    setInfo('')
  },[selC1])

  useEffect(()=>{

    if (!selC1 || !selC2) return;
      let tm = tdata.filter(item =>item['사고유형대분류']== selC1 && item['사고유형']==selC2);
      tm = tm[0]; //object
      const infoKey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수'];
      let tmk = infoKey.map((item, idx) => <div key={selC1 + selC2 + idx}
                                         className = 'flex justify-center items-center'>
                                        <div className='w-3/5 p-2 bg-lime-700 text-white text-center 
                                                        text-sm font-bold'>
                                          {item}
                                        </div>
                                        <div className='w-2/5 p-2 text-center font-bold'>
                                          {parseInt(tm[item]).toLocaleString()}
                                        </div>
                                    </div>
                                  );
      setInfo(tmk)                            
      

    // console.log(tm && tm['사고건수']);

  },[selC2])

  return (
    <div className='w-full '>
      {c1 && <TrafficNav title='사고유형대분류' c = {c1} sel = {selC1} setSel={setSelC1} />}
      <br />
      {c2 && <TrafficNav title='사고유형' c = {c2} sel = {selC2} setSel={setSelC2}/>}
      <div className='w-11/12 grid grid-cols-5 gap-2'>
        {info}
      </div>
    </div>
  )
}
