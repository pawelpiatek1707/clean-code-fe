import { User } from "@/api/types/user/usersList";

export const returnelectedUserData = (users?: User[], id?: number) => {
    if (!users || !id) return undefined
    return users.find((user) => user.id === id)
}