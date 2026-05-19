import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  
    description: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamps: true,
  },
);

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
