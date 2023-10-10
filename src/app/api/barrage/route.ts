// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }

////////////////////////////====================

// import { NextResponse } from "next/server";

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// export async function GET() {
//   const res = await fetch(DATA_SOURCE_URL);
//   const todos = await res.json();
//   return NextResponse.json(todos);
//   //return NextResponse.json({ message: "Hello from Next.js!" });
// }

////////////////////////////====================

import { NextResponse } from "next/server";

import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "/src/app/api/barrage/data.json");
//const dataFilePath = path.join(process.cwd(), "/public/json/data.json");

export async function GET() {
  const jsonData = await fsPromises.readFile(dataFilePath);
  //const file = await fs.readFile("http://localhost:3000/data.json", "utf8");
  //const res = await fetch(DATA_SOURCE_URL);
  //const todos = await res.json();
  return NextResponse.json(JSON.parse(jsonData));
  //return NextResponse.json({ message: "Hello from Next.js!" });
}

////////////////////////////====================
