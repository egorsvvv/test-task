import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { addCardApi, deleteCardApi, getCardsApi, updateLikeApi } from '../../utils/api';
import { TCard } from '../../utils/types';

type TProductListSlices = {
    product: TCard[];
    loading: boolean;
    error: string | null
}

const initialState: TProductListSlices = {
    product: [],
    loading: false,
    error: null
}

export const getCards = createAsyncThunk<TCard[]>('product/getCards', async () => {
    const response = await getCardsApi();
    return response; 
});

export const deleteCard = createAsyncThunk('product/deleteCard', async (id: string) => {
    await deleteCardApi(id)
    return id
})

export const updateLike = createAsyncThunk('product/updateLike', async ({ id, like }: { id: string; like: boolean }) => {
    const updateCard = await updateLikeApi(id, like)
    return updateCard
})

export const addCard = createAsyncThunk('product/addCard', async (newCard: TCard) => {
    const response = await addCardApi(newCard); // Взаимодействие с API для добавления карточки
    return response;
  });

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCards.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(getCards.fulfilled, (state, action) => {
            state.product = action.payload
            state.loading = false;
        })
        .addCase(getCards.rejected, (state) => {
            state.loading = false;
            state.error = "Ошибка загрузки данных"
        })
        .addCase(deleteCard.fulfilled, (state, action) => {
            state.product = state.product.filter((item) => item.id !== action.payload)
        })
        .addCase(updateLike.fulfilled, (state, action) => {
            const updatedProduct = action.payload;
            state.product = state.product.map((item) =>
              item.id === updatedProduct.id ? updatedProduct : item
            );
        })
        .addCase(addCard.fulfilled, (state, action) => {
            state.product.push(action.payload); // Добавление нового продукта в стейт
            state.loading = false;
        })
    }
})

export default productSlice.reducer;