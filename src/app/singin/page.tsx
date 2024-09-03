"use client";
import GoogleButton from "@/components/GoogleButton";
import { Suspense } from "react";

export default function Singin() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <h1>sing in</h1>
        <GoogleButton />
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
