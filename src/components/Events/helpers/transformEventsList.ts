import { Event } from "@/api/types/event/eventsList";
import { TableEvent } from "../types";

export const transformEventsList = (eventsList?: Event[]) => {
    if (!eventsList) {
        return []
    }
    const transformedEventsList: TableEvent[] = eventsList.map(({ id, title, description, startDate, endDate }) => {
        return {
            key: id,
            title,
            description,
            startDate,
            endDate
        }
    })

    return transformedEventsList
}