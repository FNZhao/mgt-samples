import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface ApiContentState {
  value: Array<{ api: string; type: string; }>
}

export const initialState: ApiContentState = {
  value: []
}

export const apiContentSlice = createSlice({
  name: 'apiContent',
  initialState,
  reducers: {
    resetApiContent: state => {
      state.value = [];
    },
    updateApiContent: (state, action) => {
      state.value = [...state.value, action.payload];
    }
  }
});

export const { resetApiContent, updateApiContent } = apiContentSlice.actions;
export const selectContent = (state: RootState) => state.apiContent.value;

export const store = configureStore({
  reducer: {
    apiContent: apiContentSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useApiDispatch: () => AppDispatch = useDispatch;
export const useApiSelector: TypedUseSelectorHook<RootState> = useSelector;

