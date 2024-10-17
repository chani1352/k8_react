import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {

  return (
    <div className='w-4/6 h-4/6
                    flex flex-col justify-center items-center
                    bg-lime-800 text-white font-bold'>
      <div className='w-full h-10  p-5 m-2
                      flex justify-start items-center'>
        MyDiv1 
      </div>
      <MyDiv2 />
    </div>
  )
}
