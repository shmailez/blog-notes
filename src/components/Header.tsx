import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-all"}>About All</Link>
            </li>
            <li>
              <Link href={"/add"}>Add</Link>
            </li>
            <li>
              <Link href={"/singin"}>Sing In</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
