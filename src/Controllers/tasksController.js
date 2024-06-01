import tasksSchema from "../Models/tasksSchema.js";

const tasksController = {
    createTask: async (request, answer) => {
        try {
            const newTask = new tasksSchema(request.body);
            const taskCreated = await newTask.save();
            if (taskCreated._id) {
                answer.json({
                    result: "Successful",
                    message: "Task successfully created",
                    data: taskCreated._id
                })
            }
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error creating the task" });
        }
    },

    seeAllTasks: async (request, answer) => {
        try {
            const allTasks = await tasksSchema.find()
            answer.json({
                result: "Successful",
                message: "Here are all your tasks: ",
                data: allTasks
            })
            console.log("In Postman");
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error retrieving your tasks" });
        }
    },

    seeTaskById: async (request, answer) => {
        try {
            const taskFound = await tasksSchema.findById(request.params.id);
            answer.json({
                result: "Successful",
                message: "Here's your task: ",
                data: taskFound
            })
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error retrieving the task" });
        }
    },

    seeTaskByRelevance: async (request, answer) => {
        try {
            console.log(request.params.relevance);
            const taskFound = await tasksSchema.find({ Relevance: request.params.relevance });
            answer.json({
                result: "Successful",
                message: "Here are the tasks: ",
                data: taskFound
            })
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error retrieving the task" });
        }
    },

    // seeTaskByCompletition: async (request, answer) => {
    //     try {
    //         const completedTask = await tasksSchema.find({ Relevance: request.params.completed });
    //         answer.json({
    //             result: "Successful",
    //             message: "Here are the tasks: ",
    //             data: completedTask
    //         })
    //     } catch (error) {
    //         console.log("Error: ", error);
    //         answer.json({ error: true, message: "There was an error retrieving the task" });
    //     }
    // },

    

    updateTask: async (request, answer) => {
        try {
            const taskUpdated = await tasksSchema.findByIdAndUpdate(
                request.params.id,
                request.body
            );
            if (taskUpdated._id) {
                answer.json({
                    restult: "Successful",
                    message: "Task updated",
                })
            }
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error updating the task" });
        }
    },

    deleteTask: async (request, answer) => {
        try {
            const taskDeleted = await tasksSchema.findByIdAndDelete(request.params.id);
            if (taskDeleted._id) {
                answer.json({
                    result: "Successful",
                    message: "Task removed!",
                });
            }
        } catch (error) {
            console.log("Error: ", error);
            answer.json({ error: true, message: "There was an error removing the task" });
        }
    }

}


export default tasksController;