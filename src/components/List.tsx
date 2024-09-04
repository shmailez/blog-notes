"use client";
import { listStore } from "@/store/store";
import { useEffect } from "react";

export const List = () => {
  useEffect(() => {
    listStore.loadLister();
  }, []);

  return (
    <>
      jjj
      {listStore.lister.map((x: any) => (
        <li key={x.id}>
          <h1>{x.title}</h1>
          <p>{x.body}</p>
          <p>{x.userName}</p>
          <p>{x.userEmail}</p>
        </li>
      ))}
      {/* {listStore.list.map((x) => (
          <li key={x.id}>
            <h1>{x.title}</h1>
            <p>{x.body}</p>
            <p>{x.userName}</p>
            <p>{x.userEmail}</p>
          </li>
        ))} */}
    </>
  );
};
