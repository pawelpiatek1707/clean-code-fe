import { ACCESS_TOKEN } from "../consts"

export const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN)
}