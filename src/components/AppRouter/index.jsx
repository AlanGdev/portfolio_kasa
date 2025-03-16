import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Logement from '../../pages/Logement'
import Error from '../../pages/Error'
import routes from '../../routes.json'

function AppRouter() {
    const components = {
        Home: Home,
        Apropos: Apropos,
        Logement: Logement,
        Error: Error,
    }
    return (
        <Routes>
            {routes.map((route, index) => {
                const Component = components[route.element]
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={<Component />}
                    />
                )
            })}
        </Routes>
    )
}
export default AppRouter
