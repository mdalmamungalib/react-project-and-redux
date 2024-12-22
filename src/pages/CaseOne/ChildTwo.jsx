import { useSelector } from "react-redux";


const ChildTwo = () => {
  const {count} = useSelector((state) => state.counter)
  return (
    <div className="p-5 text-white border border-orange-600 rounded-lg">
      <button className="text-white rounded-full btn bg-lime-700 g">
        2
      </button>
      <div className="flex items-center justify-center p-20 space-x-3">
        <button className="text-white bg-red-500 btn hover:bg-red-400">
          Decrement
        </button>
        <h2>{count}</h2>
        <button  className="text-white bg-green-500 btn hover:bg-green-400">
          Increment
        </button>
      </div>
    </div>
  );
};

export default ChildTwo;
