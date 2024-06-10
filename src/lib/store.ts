import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit';
import { authApiSlice } from './features/auth/authApiSlice';
import { appSlice } from './features/appSlice';
import { usersSlice } from './features/users/usersSlice';
import { save, load } from 'redux-localstorage-simple';

// Комбинируем редюсеры
const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [appSlice.name]: appSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
});

// Тип состояния корневого редюсера
export type RootState = ReturnType<typeof rootReducer>;

// Функция для создания store с middleware для сохранения в localStorage
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(authApiSlice.middleware, save({ states: ['users', 'app'] }));
    },
    preloadedState: load({ states: ['users', 'app'] }), // Загружаем состояние из localStorage
  });
};

const store = makeStore();

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action<string>>;
