import { useRecoilValue } from "recoil"
import {AtomN,AtomN2} from "./AtomN";


// export default function Recoil2(props) {
export default function Recoil2({y2}) {

  const n = useRecoilValue(AtomN);
  const n1 = useRecoilValue(AtomN2);

  return (
    <div className='w-1/3 h-4/5 flex flex-col
                    mt-10 p-5 mx-2
                    bg-lime-500 text-white font-bold'>
      Recoil2 (y = {y2}, n = {n}, n1={n1})
    </div>
  )
}
