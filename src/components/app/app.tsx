import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import React from 'react'
import { getCardsApi } from '../../utils/api';
import { useEffect } from 'react';
import { AppHeader } from '../app-header/app-header';
import { MainPage } from '../pages/main-page/main-page';
import { getCards } from '../../services/slices/productListSlices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/store';
import { ProductDetails } from '../product-details/product-details';
import CreateProductForm from '../ui/create-product-form/create-product-form';

export const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch])

    return (
    <BrowserRouter>
        <div>
            <AppHeader />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:id' element={<ProductDetails/>}/>
                <Route path='/create-product' element={<CreateProductForm/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    )
}