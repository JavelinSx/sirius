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
      const findUser = state.users.some((user) => action.payload.some((userCheck) => user.email === userCheck.email));
      if (!findUser) {
        state.users = [...state.users, ...action.payload];
      } else {
        state.users = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<User>) {
      console.log('Deleting user with name:', action.payload.name);
      state.users = state.users.filter((user) => user.name !== action.payload.name);
      console.log('Updated users list:', state.users);
    },
  },
  selectors: {
    selectUsers: (state: UsersState) => state.users,
  },
});

export const { setUser, deleteUser } = usersSlice.actions;
export const { selectUsers } = usersSlice.selectors;
