"use client";

import { listStore } from "@/store/store";

export default function AboutAll() {
  return (
    <>
      <h1>About All</h1>
      {listStore.list.map((x) => (
        <li key={x.id}>
          <h1>{x.title}</h1>
          <p>{x.body}</p>
        </li>
      ))}
    </>
  );
}
