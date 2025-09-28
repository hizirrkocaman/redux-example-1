import { useEffect } from "react";
import { getAllUsers } from "./redux/userSlice";
import type { RootState, AppDispatch } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h3 className="text-xl underline">User List</h3>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
