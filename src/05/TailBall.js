
export default function TailBall({n}) {
  const ballColor = {
    'b0' : 'bg-red-800',
    'b1' : 'bg-yellow-400',
    'b2' : 'bg-orange-600',
    'b3' : 'bg-green-500',
    'b4' : 'bg-blue-500'
  }

  return (
    <div className={`w-20 h-20 m-2
                    flex justify-center items-center
                    rounded-full
                   ${ballColor['b' + Math.floor(n/10)]}
                    text-white font-bold text-2xl
                    `}>
      {n}
    </div>
  )
}
