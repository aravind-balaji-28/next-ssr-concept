"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h1>User List</h1>
      {users.map((e) => (
        <div key={e.id}>
          <h4>Name : {e.name}</h4>
          <h4>Email : {e.email}</h4>
        </div>
      ))}
    </>
  );
}
