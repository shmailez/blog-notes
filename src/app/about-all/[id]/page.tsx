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
      <Link className="goBack" href={`/about-all/`}>
        Вернуться к статьям
      </Link>
      <article>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>автор: {article.userName}</span>
      </article>
    </>
  );
}
