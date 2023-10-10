import React from "react";
import { getLink } from "../utils/getUrl";
import absoluteUrl from "next-absolute-url";

async function getData() {
  //const res = await fetch(getLink() + "/api/barrage");

  const res = await fetch("https://barrage-next.vercel.app" + "/api/barrage");
  //const res = await fetch("http://localhost:3000/api/barrage");

  if (typeof res === "undefined") {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function FetchJson() {
  const barrages = await getData();

  return (
    <div className="w-screen h-screen border-2 bg-slate-300  flex flex-col items-center justify-center ">
      {JSON.stringify(barrages)}
      <h1 className=" border-2  w-[600px] ">All Ninjas</h1>

      <div>{getLink()}</div>

      {barrages &&
        barrages.map((barrage: any, key: number) => {
          return (
            <div
              key={key}
              className=" border-2 border-red-300 w-[600px] h-[40px] m-1 flow-root text-blue-500 items-center  "
            >
              <div className="border-0 h-full w-[500px]  border-blue-300 float-left flex items-center p-2">
                {barrage.barrageContent}
              </div>
              <button className="float-right bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
                Delete
              </button>
            </div>
          );
        })}
      <div className="border-2 w-[600px] ">
        <input
          className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        ></input>
        <button className="float-right bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
          Add New
        </button>
      </div>
    </div>
  );
}
