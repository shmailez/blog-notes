import { getArticle } from "@/services/list";
import Link from "next/link";

interface Params {
  id: string;
}

export default async function listPage({ params }: { params: Params }) {
  const { id } = params;
  const article = await getArticle(id);
  return (
    <>
      <Link href={`/about-all/`}>Go back to List</Link>
      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>author: {article.userName}</span>
      </article>
    </>
  );
}
