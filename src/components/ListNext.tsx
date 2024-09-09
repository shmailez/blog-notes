import Link from "next/link";

async function getData() {
  const responce = await fetch(
    "https://a912654b4478639c.mokky.dev/blog-notes",
    {
      next: { revalidate: 5 },
    }
  );

  return responce.json();
}

export const metadata = {
  title: "BLOG",
};

export default async function ListNext() {
  const post = await getData();

  return (
    <>
      <h1>List Next</h1>
      <ul className="articleList">
        {post.map((x: any) => (
          <li className="articleItem" key={x.id}>
            <Link className="itemTitle" href={`/about-all/${x.id}`}>
              {x.title}
            </Link>
            <p className="itemBody">{x.body}</p>
            {/* <p className="itemUserName">{x.userName}</p>
            <p className="itemUserEmail">{x.userEmail}</p> */}
          </li>
        ))}
      </ul>
    </>
  );
}
