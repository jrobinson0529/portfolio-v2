import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState();

  // GET request to get a user
  useEffect(() => {
    // wait for the useRouter hook to asynchronously get the query id
    if (!id) {
      return;
    }

    const fetchUser = async () => {
      const response = await fetch(`/api/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const user = await response.json();
      setName(user?.name);
    };

    fetchUser();
  }, [id]);

  // POST request to mimic the saving of a user
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("POST: ", data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name ?? ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
