'use client';

import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

async function getData() {
  const res = await fetch("http://api.github.com/zen");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default function ClientSide() {
  const [data, setData] = useState("");
  useEffectOnce(() => {
    getData().then((res) => {
      setData(res);
    });
  });
  const handleFetch = () => {
    getData().then((res) => {
      setData(res);
    });
  };

  return (
    <div className="mt-4" >
      <p>Client Side Data Fetching: </p>
      <p>{data}</p>
      <button className="btn" onClick={handleFetch}>
        fetch
      </button>
    </div>
  )
}