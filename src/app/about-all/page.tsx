"use client";

import ListAboutAll from "@/components/ListAboutAll";

import { listStore } from "@/store/store";
import { useEffect } from "react";

export default function AboutAll() {
  useEffect(() => {
    listStore.loadLister();
  });

  return (
    <>
      <h1>About All</h1>
      <ListAboutAll />

      {/* {listStore.lister.map((x) => (
        <li key={x.id}>
          <h1>{x.title}</h1>
          <p>{x.body}</p>
          <p>{x.userName}</p>
          <p>{x.userEmail}</p>
        </li>
      ))}

      {listStore.list.map((x) => (
        <li key={x.id}>
          <h1>{x.title}</h1>
          <p>{x.body}</p>
          <p>{x.userName}</p>
          <p>{x.userEmail}</p>
        </li>
      ))} */}
    </>
  );
}
