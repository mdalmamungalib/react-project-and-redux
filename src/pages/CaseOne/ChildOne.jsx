import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../../redux/features/counter/counterSlice";

const ChildOne = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="p-5 text-white border border-orange-600 rounded-lg">
      <button className="text-white rounded-full btn bg-lime-700 g">
        1
      </button>
      <div className="flex items-center justify-center p-20 space-x-3">
        <button
          onClick={() => dispatch(decrement())}
          className="text-white bg-red-500 btn hover:bg-red-400"
        >
          Decrement
        </button>
        <h2>{count}</h2>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="text-white bg-green-500 btn hover:bg-green-400"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="text-white bg-green-500 btn hover:bg-green-400"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default ChildOne;
