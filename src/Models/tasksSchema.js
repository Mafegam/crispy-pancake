import { Schema, model } from "mongoose";

const tasksSchema = new Schema(
    {
        Your_Task: {type: String, required:true},
        Description: {type: String},
        Task_Number: {type: Number}, 
        Due_Date: {type: Date, required:true},
        Relevance: {type: Number},
        Completed: {type: Boolean}, 
    }
)

export default model("Tasks", tasksSchema)