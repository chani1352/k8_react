import './App.css';
import { IoHome } from "react-icons/io5";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


// import Hello from './01/Hello';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';

function App() {

  return (
    <BrowserRouter>
      <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
        <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
          <p className='text-2xl font-bold p-5'>
            K-digital 8기
          </p>
          <ul className='w-2/5 flex justify-between items-center font-bold'>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/'>시계</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/Lotto'>로또</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/FoodMain'>푸드뱅크</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/BoxOffice'>박스오피스</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md' ><Link to='/Traffic'>교통사고</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/Gallery'>관광</Link></li>
            <li className='p-2 hover:bg-blue-500 hover:text-white rounded-md'><Link to='/Festival'>축제</Link></li>
          </ul>
          <p className='text-3xl font-bold p-5'>
          <Link to='/'><IoHome /></Link>
          </p>

        </header>

        <main className='w-full grow
                       flex flex-col items-center
                       overflow-y-auto'>
          <Routes>
            {/* <Hello /> */}
            <Route path='/' element={<MyClock />} />
            {/* <MyDiv1 /> */}
            {/* <MyList /> */}
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/FoodMain' element={<FoodMain />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            {/* <MyBox /> */}
            <Route path='/Traffic' element={<Traffic />} />
            {/* <MyRef /> */}
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Festival' element={<Festival />} />
            {/* <RouteMain /> */}
          </Routes>
        </main>

        <footer className='w-full h-20 flex-shrink-0
                         flex justify-center items-center
                         bg-black text-white'>
          <p>K-digital 8기</p>
        </footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
