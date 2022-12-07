import { ACCESS_TOKEN } from "../consts"

export const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN)
}