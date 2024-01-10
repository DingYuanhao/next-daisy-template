import ClientSide from "./client";

export async function getData() {
  const res = await fetch("http://api.github.com/zen");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function Fetching() {
  const data = await getData();
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Fetching</h1>
      <div className="w-full h-[300] p-4 m-4 bg-base-100 rounded-md">
        <p>Server Side Data Fetching: </p>
        <p>{data}</p>
        <ClientSide/>
      </div>
    </div>
  );
}
