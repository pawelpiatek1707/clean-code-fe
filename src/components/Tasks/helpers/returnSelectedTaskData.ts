import { Task } from "@/api/types/tasks/tasksList";

export const returnSelectedTaskData = (tasks?: Task[], id?: number) => {
    if (!tasks || !id) return
    return tasks.find((task) => task.id === id)
}