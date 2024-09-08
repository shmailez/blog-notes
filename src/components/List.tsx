"use client";
import { getList } from "@/services/list";
import { listStore } from "@/store/store";
import { useEffect } from "react";

export const List = () => {
  useEffect(() => {
    listStore.loadLister();
    listStore.lister;
  }, []);

  console.log("list", listStore.lister);

  return (
    <>
      jjj
      <ul className="articleList">
        {listStore.lister.map((x: any) => (
          <li className="article" key={x.id}>
            <h1 className="itemTitle">{x.title}</h1>
            <p className="itemBody">{x.body}</p>
            <p className="itemUserName">{x.userName}</p>
            <p className="itemUserEmail">{x.userEmail}</p>
          </li>
        ))}
      </ul>
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
