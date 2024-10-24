import TailButton from "../UI/TailButton";
import { useState,useEffect,useRef } from "react";

export default function Rest() {

  const [tdata,setTdata] = useState([]);
  const [trs,setTrs] = useState([]);
  const [isUpdate,setIsUpdate] = useState(false); // 입력,수정을 확인
  const [updateId,setUpdateId] = useState(); //수정할 데이터 아이디

  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const url = 'http://localhost:3005/posts';

  const getFetchData = async () => {
    const resp = await fetch(url);  //response가 오기전에 다음 문장이 실행됨. response가 왔을떄 실행하기위해 await로 대기
    console.log('resp=',resp);
    const data = await resp.json();
    console.log('data=',data);
    setTdata(data);
  }

  const handlePost = async () => {
    //입력 확인
    if(txt1Ref.current.value === ''){
      alert("제목을 입력하세요");
      txt1Ref.current.focus();
      return; //함수 종료
    }
    if(txt2Ref.current.value ===''){
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    //보낼 데이터 object로 만들기
    const postData = {
      "title": txt1Ref.current.value,
      "author": txt2Ref.current.value
    }

    const resp = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    //입력된 데이터 반환
    const data = await resp.json();
    console.log(data);
    setTdata([...tdata,data]);
  }

  //삭제하는 사용자 정의 함수
  const handleDelete = async (id) => {
    console.log(id);

    const resp = await fetch(`${url}/${id}`,{
      method: 'DELETE'
    });
    //삭제된 데이터 반환
    const data = await resp.json();
    console.log('delete data', data);

    const tm = tdata.filter(item => item.id !== id);
    setTdata(tm);
  }

  //수정 사용자 정의 함수
  const handleUpdate = (item) => {
    console.log('update',item);
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;
    setIsUpdate(true);
    setUpdateId(item.id);
  }

  const handlePut = async() => {
    console.log('handlePut',updateId);

    if(txt1Ref.current.value === ''){
      alert("제목을 입력하세요");
      txt1Ref.current.focus();
      return; //함수 종료
    }
    if(txt2Ref.current.value ===''){
      alert("작성자를 입력하세요.");
      txt2Ref.current.focus();
      return;
    }

    //보낼 데이터 object로 만들기
    const postData = {
      id: updateId,
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }

    const resp = await fetch(`${url}/${updateId}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    //수정 데이터 반환
    const data = await resp.json();
    console.log(data);
  
    const tm = tdata.map(item=>item.id === updateId ? data : item);
    setTdata(tm);

    setIsUpdate(false);
    setUpdateId('');
    txt1Ref.current.value = '';
    txt2Ref.current.value = '';

    // window.location.reload();  
    // 위에 초기화 안시키고 윈도우 새로고침으로도 가능
  }

  //입력과 수정을 구분하는 사용자 정의 함수
  const handleOk =() => {
    if(!isUpdate) handlePost();
    else handlePut();
  }
  useEffect(()=>{
    getFetchData();
  },[]);

  useEffect(()=>{
    const tm = tdata.map(item=><tr key={item.id} className='boarder-b font-bold text-center'>
                               <td className='text-center'>{item.title}</td>
                               <td className='text-center'>{item.author}</td>
                               <td className='text-center'>
                                <TailButton caption="삭제"
                                            color="orange"
                                            handleClick={()=>handleDelete(item.id)}   //함수 형식으로 id 전달 > 해당 id 열 삭제
                                            size='w-1/2' />
                               </td>
                               <td className='text-center'>
                                <TailButton caption="수정"
                                            color="lime"
                                            handleClick={()=>handleUpdate(item)}
                                            size='w-1/2' />
                               </td>
                               </tr>
  );
  setTrs(tm);
  },[tdata]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text"
            className="form-input  w-full"
            ref={txt1Ref}
             />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref}
            />
        </div>
        <TailButton caption={isUpdate ? '수정' : '입력'}
          color="blue"
          handleClick={handleOk} />
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {trs}
      </tbody>
    </table>
    </div >
  )
}
