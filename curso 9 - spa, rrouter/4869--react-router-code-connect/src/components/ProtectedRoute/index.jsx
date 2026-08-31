import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Navigate, Outlet, useNavigate } from "react-router"
import { Spinner } from "../Spinner"
import { AppLayout } from "../../layouts/App"

export function ProtectedRoute() {
    const {isAuthenticated, isLoading} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLoading && !isAuthenticated){
            navigate('/auth/login')
            //redirect /auth/login
        }
    }, [isAuthenticated, isLoading, navigate])

    if (isLoading) {
        return <Spinner/>
    }
    if (!isAuthenticated) {
        return <Navigate to="/auth/login" replace/>
    }
    return (
        <AppLayout>
            <Outlet/>
        </AppLayout>
    )
}