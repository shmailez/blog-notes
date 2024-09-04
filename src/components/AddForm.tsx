"use client";

import { listStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";

export default function AddForm() {
  const session = useSession();

  console.log(session?.data?.user);

  // const userName = session?.data?.user?.name;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userName, setUserName] = useState(session?.data?.user?.name);
  const [userEmail, setUserEmail] = useState(session?.data?.user?.email);

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    listStore.addNote(title, body, userName, userEmail);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <h1>ADD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={5}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
