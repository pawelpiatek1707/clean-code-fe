import { USER_ID } from "../consts"

export const getUserId = () => {
    const userId = localStorage.getItem(USER_ID)
    return userId ? Number(userId) : undefined
}