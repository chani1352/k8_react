function MyClockTime(){
  let current = new Date();
  current = current.toLocaleTimeString();
  return (
    <>
    현재 시간 : {current}
    </>
  );
}

export default MyClockTime;