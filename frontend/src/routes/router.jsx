import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from '../pages'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
        </Route>,
    ),
)
