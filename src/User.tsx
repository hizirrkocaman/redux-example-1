interface UserProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const User = ({ user }: UserProps) => {
  return <div>{user.name}</div>;
};

export default User;
