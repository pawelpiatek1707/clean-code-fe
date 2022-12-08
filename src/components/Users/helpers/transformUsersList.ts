import { User } from "@/api/types/user/usersList";
import { TableUser } from "../types";

export const transformUsersList = (usersList?: User[]) => {
    if(!usersList) {
        return []
    }
    const trnsformedUsersList: TableUser[] = usersList.map(({id, name, surname, email, aboutMe, city, country, university}) => {
        return {
            key: id,
            name,
            surname,
            email,
            aboutMe: aboutMe || '-',
            city: city || '-',
            country: country || '-',
            university: university || '-'
        }
    })

    return trnsformedUsersList
}