import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardsPage from '../Components/pages/CardsPage'
import AboutPage from '../Pages/AboutPage'
import ErrorPage from '../Pages/ErrorPage'
import ROUTES from './routesModel'
import FavoriteCards from '../cards/pages/FavoriteCards'
import MyCards from '../cards/pages/MyCards'
import SandBoxPage from '../sandbox/SandBoxPage'
import LoginPage from '../users/Pages/LoginPage'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
            <Route path={ROUTES.SANDBOX} element={<SandBoxPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes>
    )
}
