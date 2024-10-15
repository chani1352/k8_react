import {useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import TailButton from '../UI/TailButton';
import getxy from './getxy.json';

export default function Fcst() {
  const [city,setCity] = useState();
  const navigate = useNavigate();
  const ct = useRef();
  const dt = useRef();
  const X = useRef();
  const Y = useRef();


  const handleSel = (gubun,time) => {
    if(dt.current.value ===''){
      alert("날짜를 선택하세요.")
      dt.current.focus();
      return;
    }
    if(ct.current.value ===''){
      alert("지역을 선택하세요.")
      ct.current.focus();
      return;
    }
    navigate(`/FcstList?gubun=${gubun}&X=${X.current}&Y=${Y.current}&dt=${dt.current}&area=${ct.current.value}&time=${time}`);
  }

  const handleCity = () => {
    let tm = getxy.filter(item=> ct.current.value == item['1단계']);
    X.current = tm[0]['격자 X'];
    Y.current = tm[0]['격자 Y'];
  }

  const handleDate = () =>{
    dt.current = dt.current.value.replaceAll('-','');
  }

  useEffect(()=>{
    const today = new Date();
    today.setDate(today.getDate());
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    dt.current.max = `${year}-${month}-${day}`;
    let tm = getxy.map(item=> <option key={item['1단계']} value={item['1단계']}>{item['1단계']}</option>);
    setCity(tm);
  },[]);

  return (
    <div className = 'w-4/5'>
      <div className=' flex justify-start items-center'>
        단기예보 입력정보
      </div>
      <div className='w-full grid grid-cols-2 gap-2 mt-10 mb-10'>
        <input type='date' id='dt' name='dt' ref={dt} onChange={handleDate}
               className='form-select' />
        <select className='form-select' ref={ct} onChange={handleCity}>
          <option value="1">항목선택</option>
          {city}
        </select>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <TailButton caption='초단기예보' color='blue'
          handleClick={()=> handleSel('getUltraSrtFcst','0630')} />
        <TailButton caption='단기예보' color='blue'
          handleClick={()=> handleSel('getVilageFcst','0500')} />
      </div>
    </div>
  )
}
