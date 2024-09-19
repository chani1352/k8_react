function Hello() {
  let today = new Date();
  today = today.toLocaleString();
  return (    //jsx 문법, 무조건 태그 하나 return 필요 (부모 태그 하나, 자식태그는 여러개 상관없음)
    //div 사용 가능 (단순 묶기만 할 경우 fragment 태그, 태그 생성 안됨)
    //class 속성은 반드시 className으로 사용
    <>        
      <p className='p1'>
        Hello react!!
      </p>
      <p className="text-4xl text-amber-300">
        박래찬
      </p>
      <p style={{backgroundColor:'gray',color:'white'}}>
        {/* {new Date().toLocaleString()} */}
        {today}
      </p>
    </>
  );
}

export default Hello;