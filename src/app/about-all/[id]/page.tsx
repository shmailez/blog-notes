import { getArticle } from "@/services/list";
import Link from "next/link";

interface Params {
  id: string; // or number, depending on your use case
}

export default async function listPage({ params }: { params: Params }) {
  const { id } = params;
  const article = await getArticle(id);
  return (
    <>
      {/* <h1>list Page</h1> */}
      <Link href={`/about-all/`}>Go back to List</Link>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>author: {article.userName}</p>
    </>
  );
}
