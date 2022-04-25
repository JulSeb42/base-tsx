// Pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

// Type definition
type routeType = {
    path: string
    element: React.FC
}

// Routes
const routes: routeType[] = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },
]

export default routes
