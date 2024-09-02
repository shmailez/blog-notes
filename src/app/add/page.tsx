"use client";

import { listStore } from "@/store/store";
import { FormEventHandler, useState } from "react";

// type forAddNote = {
//   title: string;
//   body: string;
// };

export default function Add() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    listStore.addNote(title, body);
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
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
