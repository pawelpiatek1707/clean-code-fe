import { Task } from "@/api/types/tasks/tasksList";
import { TASK_STATUS } from "../enums";
import { TableTask } from "../types";

export const transformTasksList = (tasksList?: Task[]) => {
    if (!tasksList) {
        return []
    }
    const transformedTasksList: TableTask[] = tasksList.map(({ id, title, description, isCheck }) => {
        return {
            key: id,
            title,
            description,
            isChecked: isCheck === 1 ? TASK_STATUS.COMPLETED : TASK_STATUS.IN_PROGRESS
        }
    })

    return transformedTasksList
}