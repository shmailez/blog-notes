"use client";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";

export default function FormNext() {
  const session = useSession();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const id = new Date().toISOString();
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = session?.data?.user?.name;
    const userEmail = session?.data?.user?.email;
    const response = await fetch(
      "https://a912654b4478639c.mokky.dev/blog-notes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, title, body, userName, userEmail }),
      }
    );

    // const response = await addItemToList(formData);

    // Handle response if necessary
    if (response.ok) {
      let data = await response.json();
    }
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" />
      <textarea rows={5} name="body" />
      <button type="submit">Submit</button>
    </form>
  );
}
