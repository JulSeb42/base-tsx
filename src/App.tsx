// Packages
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// Routes
import routes from "./routes/routes"
import redirects from "./routes/redirect"

const App: React.FC = () => {
    return (
        <Routes>
            {routes.map((route, i) => (
                <Route path={route.path} element={<route.element />} key={i} />
            ))}

            {redirects.length > 0 &&
                redirects.map((route, i) => (
                    <Route
                        path={route.path}
                        element={<Navigate to={route.to} />}
                        key={i}
                    />
                ))}
        </Routes>
    )
}

export default App
