import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"

export const BaseApp = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}