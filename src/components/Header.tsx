"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const session = useSession();

  return (
    <>
      <header>
        {session?.data && (
          <p className="hellodolly">Привет {session?.data?.user?.name}!</p>
        )}
        <nav>
          <ul>
            <li>
              <Link href={"/"}>На главную</Link>
            </li>
            <li>
              <Link href={"/about-all"}>Все статьи</Link>
            </li>
            {session?.data && (
              <li>
                <Link href={"/add"}>Добавить</Link>
              </li>
            )}

            {session?.data ? (
              <li>
                <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                  Выход
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Войти</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
