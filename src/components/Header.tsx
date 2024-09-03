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
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-all"}>About All</Link>
            </li>
            {session?.data && (
              <li>
                <Link href={"/add"}>Add</Link>
              </li>
            )}

            {session?.data ? (
              <li>
                <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                  Sign Out
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
