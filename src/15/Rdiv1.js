import Rdiv2 from "./Rdiv2"
import Rdiv3 from "./Rdiv3"
import { AtomN,AtomN2 } from "./AtomN";
import { useRecoilValue } from "recoil";  //userecoilvalue는 값만 가져오기   > userecoilState 은 값 변경

export default function Rdiv1() {

  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);

  return (
    <div className='w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-lime-800 text-white font-bold'>
      <div className='w-full h-10  p-5 m-2
                      flex justify-start items-center'>
        Rdiv1 : x = {x}, y = {y}
      </div>
      <div className='w-full h-10 grid grid-cols-2 gap-4 place-items-center'>
        <Rdiv2 />
        <Rdiv2 />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
      <Rdiv3 />
      </div>
    </div>
  )
}
