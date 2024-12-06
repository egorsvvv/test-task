import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import React from 'react'
import { getCardsApi } from '../../utils/api';
import { useEffect } from 'react';
import { AppHeader } from '../app-header/app-header';
import { MainPage } from '../pages/main-page/main-page';

export const App = () => {
    useEffect(() => {
        getCardsApi()
    }, [])

    return (
    <BrowserRouter>
        <div>
            <AppHeader />
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </div>
    </BrowserRouter>
    )
}