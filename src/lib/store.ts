import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit';
import { authApiSlice } from './features/auth/authApiSlice';
import { appSlice } from './features/appSlice';
import { usersSlice } from './features/users/usersSlice';
import { save, load } from 'redux-localstorage-simple';

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [appSlice.name]: appSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Функция для создания store с middleware для сохранения в localStorage
export const makeStore = () => {
  // Проверка на среду браузера для отделения use client от use server
  const preloadedState = typeof window !== 'undefined' ? load({ states: ['users', 'app'] }) : undefined;

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(authApiSlice.middleware, save({ states: ['users', 'app'] }));
    },
    preloadedState, // Загружаем состояние из localStorage, если мы на клиенте
  });
};

const store = makeStore();

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action<string>>;
