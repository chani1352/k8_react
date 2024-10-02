import { useState,useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  const [tdata,setTdata] = useState([]);
  const [bts,setBts] = useState();
  const [bts1,setBts1] = useState();

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
  //tdata가 변경되었을때
  useEffect(()=>{

  },[tdata]);

  return (
    <div className='w-full '>
      <TrafficNav data={tdata} category='사고유형대분류'/>
      <br />
      <TrafficNav data={tdata} category='사고유형중분류'/>
    </div>
  )
}
