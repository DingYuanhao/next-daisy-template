'use client';

import { useState } from "react";
import { getData } from "./page";
import { useEffectOnce } from "usehooks-ts";

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