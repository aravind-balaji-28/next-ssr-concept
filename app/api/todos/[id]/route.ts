import { connectDB } from "../../../../lib/mongodb";
import Todo from "../../../../models/Todo";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()
  const { id } = await params

  const deletedTodo = await Todo.findByIdAndDelete(id)

  return Response.json({
    success: true,
    deletedTodo,
  })
}


export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {

  await connectDB()
  const { id } = await params
  const body = await req.json()

  const updateTodo = await Todo.findByIdAndUpdate(id,  body ,{new:true})
  console.log("updateTodo: ", updateTodo);
  return Response.json({
    message:"Update Successfully",
    data:updateTodo
  })
}
