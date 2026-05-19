import { connectDB } from "../../../lib/mongodb";
import Todo from "../../../models/Todo";
import { NextRequest } from "next/server";

export async function GET() {
  await connectDB();

  const result = await Todo.find();

  return Response.json(result);
}

export async function POST(req: NextRequest) {
  await connectDB();

  const body = await req.json();

  const result = await Todo.create(body);

  return Response.json(result);
}

 