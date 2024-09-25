import fooddata from './fooddata.json';
import FoodCard from './FoodCard';

export default function FoodMain() {
  console.log(fooddata)
  return (
    <div>
      <FoodCard />
    </div>
  )
}
