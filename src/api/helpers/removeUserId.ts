import { USER_ID } from "../consts"

export const removeUserId = () => {
    localStorage.removeItem(USER_ID)
}