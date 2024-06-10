import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '@/src/lib/createAppSlice';

export interface User {
  name: string;
  avatar: string;
  email: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createAppSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User[]>) {
      const findUser = state.users.map((user) => action.payload.map((userCheck) => user.email === userCheck.email));
      if (!findUser) {
        state.users = [...state.users, ...action.payload];
      } else {
        state.users = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<User>) {
      state.users = state.users.filter((user) => user.name !== action.payload.name);
    },
  },
  selectors: {
    selectUsers: (state: UsersState) => state.users,
  },
});

export const { setUser, deleteUser } = usersSlice.actions;
export const { selectUsers } = usersSlice.selectors;
