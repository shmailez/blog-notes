import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const callbackUrl = "/add";

  return (
    <>
      <button
        className="googlebutton"
        onClick={() => signIn("google", { callbackUrl })}
      >
        Sign In with Google
      </button>
    </>
  );
}
