// import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react"
import TailCard from "../UI/TailCard";

export default function Gallery() {

  const x = useRef();
  const [getData, setGetData] = useState([]);
  const [info, setInfo] = useState();



  const getFetchData = async () => {
    const keyword = encodeURI(x.current.value);
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=`;
    url = `${url}${process.env.REACT_APP_API_KEY}`;
    url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;


    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => setGetData(data['response']['body']['items']['item']))
    //   .catch(err => console.log(err))

    const resp = await fetch(url);
    const data = await resp.json();
    setGetData(data['response']['body']['items']['item']);
    console.log(data);

  }

  const handleSelect = () => {
    if (x.current.value == '') {
      alert("키워드를 입력하세요.");
      x.current.focus();
      return;
    }
    getFetchData();
  }

  const handleCancel = () => {
    x.current.value = '';
    x.current.focus();
    setInfo('');
  }

  useEffect(() => {
    x.current.focus();
  }, []);

  useEffect(() => {
    let tm = getData.map(item => <TailCard key={item['galContentId']} imgUrl={item['galWebImageUrl']} title={item['galTitle']}
      content={item['galPhotographyLocation']} kw={item['galSearchKeyword']} />)
    setInfo(tm);
  }, [getData]);


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 p-5 flex-col justify-center items-center">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-center items-center">
            <input ref={x} type='text' className="w-10/12 form-input"
              id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailButton caption='확인'
              color='blue'
              handleClick={handleSelect}
              size='w-1/2' />
            <TailButton caption='취소'
              color='blue'
              handleClick={handleCancel}
              size='w-1/2' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
        {info}
      </div>

    </div>
  )
}
