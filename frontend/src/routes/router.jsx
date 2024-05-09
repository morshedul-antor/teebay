import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { DashboardPage, LoginPage, HomePage } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/*" element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
            </Route>
        </Route>,
    ),
)
