import './App.css';
import { IoHome } from "react-icons/io5";

// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';


function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-200'>
      <p className='text-2xl font-bold p-5'>
      K-digital 8기
      </p>
      <p className='text-3xl font-bold p-5'>
        <IoHome />
      </p>
 
      </header>
      <main className='w-full grow
                       flex flex-col items-center
                       overflow-y-auto'>
        {/* <Hello /> */}
        {/* <MyClock /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <BoxOffice /> */}
        {/* <MyBox /> */}
        <Traffic />
      </main>
      <footer className='w-full h-20
                         flex justify-center items-center
                         bg-black text-white'>
        <p>K-digital 8기</p>
      </footer>
    </div>
  );
}

export default App;
