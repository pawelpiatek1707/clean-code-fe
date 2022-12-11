import { USER_ID } from "../consts"

export const setUserId = (id: number) => {
    localStorage.setItem(USER_ID, id.toString())
}