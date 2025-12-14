type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Page() {
  const users = await getUsers();
  console.log(users, ">users");
  return (
    <>
      <h1>User List</h1>
      {users &&
        users.length &&
        users.map((e) => {
          return (
            <div key={e.id}>
              <h4 >Name : {e.name}</h4>
              <h4>Email : {e.email}</h4>
            </div>
          );
        })}
    </>
  );
}
