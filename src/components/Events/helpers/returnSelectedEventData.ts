import { Event } from "@/api/types/event/eventsList";

export const returnSelectedEventData = (events?: Event[], id?: number) => {
    if (!events || !id) return
    return events.find((event) => event.id === id)

}