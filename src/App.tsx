import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import './assets/css/base.css'
import NavLayout from './layout/NavLayout'
import HomePage from './pages/homepage'
import DetailPage from './pages/detailpage'
import ProfilePage from './pages/profilpage'
import SearchPage from './pages/searchpage'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/registerpage'
import ForgotPasswordPage from './pages/forgotpasswordpage'
import ResetPasswordPage from './pages/resetpasswordpage'
import FollowsPage from './pages/followspage'
import { useDispatch, useSelector } from 'react-redux'
import { UserType } from './types/types'
import api from './libs/api'
import { RootState } from './redux/store'
import { setLoggedUser, unsetLoggedUser } from './redux/auth/authSlice'

function App() {
    const loggedUser = useSelector((states: RootState) => states.loggedUser.value)

    const { pathname } = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [pathname])

    useEffect(() => {
        async function isUserLogged() {
            try {
                const loggedUser: UserType = await api.GetLoggedUser()
                dispatch(setLoggedUser(loggedUser))
            } catch (error) {
                dispatch(unsetLoggedUser())
            }
        }
        isUserLogged()
    }, [dispatch])

    if(!loggedUser){
        return (
        <div className="app">
        <Routes>
             <Route path="/*" element={<LoginPage />} />
             <Route path="/register" element={<RegisterPage />} />
             <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
             <Route path="/resetpassword" element={<ResetPasswordPage />} />
        </Routes>
        </div>
        )
    }

    return(
        <div className="app">
        <Routes>
            <Route path="/" element={<NavLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/follows" element={<FollowsPage />} />
                <Route path="/search" element={<SearchPage />} />  
            </Route>
        </Routes>
        </div>
   )
 
}
export default App
