import { BrowserRouter, Route, Routes } from "react-router"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Logout } from "../pages/Logout"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { Feed } from "../pages/Feed"
import { BlogPost } from "../pages/BlogPost"
import { AuthLayout } from "../layouts/Auth"
import { NotFound } from "../pages/NotFound"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='auth' element={<AuthLayout/>}>
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                    <Route path='logout' element={<Logout />} />
                </Route>

                <Route path='/' element={<ProtectedRoute />}>

                    <Route index element={<Feed />} />
                    <Route path='blog-post/:slug' element={<BlogPost />} />
                    <Route path="*" element={<NotFound/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}