import mongoose, { Schema } from "mongoose";
import ITask from "../interfaces/ITask";

const TaskSchema: Schema = new Schema({
    id: { type: String },
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean },
    assignTo: { type: String }
});

export default mongoose.model<ITask>('Task', TaskSchema);