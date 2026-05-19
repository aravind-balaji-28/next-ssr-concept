import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/todo_next_concept";

export async function connectDB() { 
  try {
    await mongoose.connect(MONGODB_URI)
  } catch (error) {
    console.log("error: ", error);
  }  
}
