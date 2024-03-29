import { Task } from "@/api/types/tasks/tasksList";
import { TableTask } from "../types";

export const transformTasksList = (tasksList?: Task[]) => {
    if (!tasksList) {
        return []
    }
    const transformedTasksList: TableTask[] = tasksList.map(({ id, title, description, isChecked }) => {
        return {
            key: id,
            title,
            description,
            isChecked
        }
    })

    return transformedTasksList
}