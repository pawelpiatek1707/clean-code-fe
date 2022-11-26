import { useRoutes } from "react-router-dom";
import { SignIn } from "../components/SignIn";
import { Tasks } from "../components/Tasks"
import { Events } from "../components/Events"
import { Profile } from "../components/Profile"
import { Error } from "../components/Error"
import { ROUTING_PATHS } from "../enums"

// TODO: add lazy loading and guards

export const useRouter = () => {
    const appRouter = useRoutes([
        {
            path: ROUTING_PATHS.SIGN_IN,
            element: <SignIn />,
        },
        {
            path: ROUTING_PATHS.TASKS,
            element: <Tasks />
        },
        {
            path: ROUTING_PATHS.EVANTS,
            element: <Events />
        },
        {
            path: ROUTING_PATHS.PROFILE,
            element: <Profile />
        },
        {
            path: "*",
            element: <Error />
        }
    ]);

    return appRouter;
}