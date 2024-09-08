// import { listStore } from "@/store/store";
// import { getList } from "@/services/list";
import { Suspense } from "react";
import { List } from "./List";

export default function ListAboutAll() {
  // const lister = await getList();

  // const lis = listStore.loadLister().then();
  // console.log("store", lis);
  // console.log("component", lister);

  return (
    <>
      <h1>About All 87</h1>

      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>

      {/* <ul className="articleList">
        {lister.map((x: any) => (
          <li className="article" key={x.id}>
            <h1 className="itemTitle">{x.title}</h1>
            <p className="itemBody">{x.body}</p>
            <p className="itemUserName">{x.userName}</p>
            <p className="itemUserEmail">{x.userEmail}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
