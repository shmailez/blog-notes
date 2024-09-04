import { listStore } from "@/store/store";
import { observable } from "mobx";
import { useEffect, useLayoutEffect } from "react";
import { List } from "./List";

export default function ListAboutAll() {
  console.log(listStore.lister);

  return (
    <>
      <h1>About All</h1>

      <List />
      {/* 
      {listStore.lister.map((x) => (
        <li key={x.id}>
          <h1>{x.title}</h1>
          <p>{x.body}</p>
          <p>{x.userName}</p>
          <p>{x.userEmail}</p>
        </li>
      ))} */}

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
}
