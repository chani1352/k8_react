
export default function TailCard({imgUrl,title,content,kw}) {
  // let kws = [];
  // if (kw.include(',')) {
  //   kws = kw.split(',')
  // }
  // else {
  //   kws.push(kw);
  // }
  const kws = kw.includes(',') ? kw.split(',') : [kw];
 
  const kwTags = kws.map(item=> <span key={item} 
                                      className='inline-flex bg-slate-200
                                                 text-xs font-bold
                                                 p-1 m-1 rounded-xl'>
                                 {item}
                                 </span>)
 
  
  // console.log(kws)
  // const word = (kw)=> {
  //   kw = kw.split(',')
  //   let tm = kw.map(item => <p className='bg-gray-300'>{item}</p>)
  //   console.log(tm)
  //   return tm
  // };
  return (
    <div className="max-w-sm bg-white border 
                  border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg h-60 w-full" 
           src={imgUrl} 
           alt="" />
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mb-3 font-normal text-gray-700">
          {content}
        </p>
        <p className=''>
          {kwTags}
        </p>
      </div>
    </div>
  )
}
