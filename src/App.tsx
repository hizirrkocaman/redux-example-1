import { decrement, increment } from "./redux/counterSlice";
import type { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen flex flex-col items-center pt-16 text-2x bg-amber-50">
      <h2>Hello Redux! </h2>
      <div className="mt-8">{count}</div>
      <div className="flex gap-4 mb-8 mt-8">
        <button
          className="cursor-pointer  bg-red-400 text-white font-extralight  rounded  py-2 px-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="cursor-pointer bg-blue-400 text-white font-extralight  rounded  py-2 px-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <UserList />
    </div>
  );
};

export default App;
