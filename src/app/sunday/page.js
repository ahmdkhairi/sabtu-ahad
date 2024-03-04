"use client";

import { useCounterStore } from "../store";

export default function Sunday() {
  const count = useCounterStore((state) => state.count);

  return (
    <div className=" min-w-[600px] m-4 ">
      <h1>So this is Sunday</h1>
      <p>{count}</p>
    </div>
  );
}
