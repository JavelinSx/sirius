import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '@/src/lib/createAppSlice';
import { Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/src/get-dictionary';
import { Dictionary } from '@/i18n-config';
import { User } from './users/usersSlice';

interface AppState {
  lang: Locale;
  dictionary: Dictionary;
  isOpenProfileList: boolean;
  currentProfile: User;
}

const initialState: AppState = {
  lang: i18n.defaultLocale as Locale,
  dictionary: getDictionary(i18n.defaultLocale as Locale),
  isOpenProfileList: false,
  currentProfile: {} as User,
};

export const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<Locale>) {
      state.lang = action.payload;
      state.dictionary = getDictionary(action.payload);
    },
    setStateProfileList(state) {
      state.isOpenProfileList = !state.isOpenProfileList;
    },
    setCurrentProfile(state, action: PayloadAction<User>) {
      state.currentProfile = action.payload;
    },
    setProfileAfterLogout(state, action: PayloadAction<{ currentProfile: User; remainingUsers: User[] }>) {
      const { currentProfile, remainingUsers } = action.payload;
      const nextProfile = remainingUsers.find((user) => user.email !== currentProfile.email);
      state.currentProfile = nextProfile || ({} as User);
    },
  },
  selectors: {
    selectLang: (state) => state.lang,
    selectDictionary: (state) => state.dictionary,
    selectStateProfileList: (state) => state.isOpenProfileList,
    selectCurrentProfile: (state) => state.currentProfile,
  },
});

export const { setLang, setStateProfileList, setCurrentProfile, setProfileAfterLogout } = appSlice.actions;
export const { selectLang, selectDictionary, selectStateProfileList, selectCurrentProfile } = appSlice.selectors;
