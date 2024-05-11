import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
    HomePage,
    LoginPage,
    RegisterPage,
    DashboardPage,
    MyProductPage,
    SingleProductPage,
    CreateProductPage,
} from '../pages'
import ProtectedRoute from './ProtectedRoute'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:name/:id" element={<SingleProductPage />} />

            <Route path="/*" element={<ProtectedRoute />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="my-products" element={<MyProductPage />} />
                <Route path="create-product" element={<CreateProductPage />} />
            </Route>
        </Route>,
    ),
)
