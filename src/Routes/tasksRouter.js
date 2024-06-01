import { Router } from "express";
import tasksController from "../Controllers/tasksController.js"

const tasksRouter = Router();

tasksRouter.post('/', tasksController.createTask)
tasksRouter.get('/', tasksController.seeAllTasks)
tasksRouter.get('/:id', tasksController.seeTaskById)
tasksRouter.get('/relevance/:relevance', tasksController.seeTaskByRelevance)
// tasksRouter.get('/completed/:boolean', tasksController.seeTaskByCompletition)
tasksRouter.put('/:id', tasksController.updateTask)
tasksRouter.delete('/:id', tasksController.deleteTask)

export default tasksRouter;