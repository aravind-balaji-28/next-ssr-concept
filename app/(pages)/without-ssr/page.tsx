"use client";

import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

export default function Page(): React.JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    const getUsers = async (): Promise<void> => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = (await res.json()) as unknown;

        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }

        const usersData: IUser[] = data as IUser[];

        setUsers(usersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    void getUsers(); // ✅ no-floating-promises fix
  }, []);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>User List</h1>
      {users.map((user: IUser) => (
        <div key={user.id}>
          <h4>Name : {user.name}</h4>
          <h4>Email : {user.email}</h4>
        </div>
      ))}
    </>
  );
}
