import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/src/lib/createAppSlice";
import { Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/src/get-dictionary';
import { Dictionary } from '@/i18n-config';

interface AppState {
  lang: Locale;
  dictionary: Dictionary;
}

const initialState: AppState = {
  lang: i18n.defaultLocale as Locale,
  dictionary: getDictionary(i18n.defaultLocale as Locale),
};

export const appSlice = createAppSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<Locale>) {
      state.lang = action.payload;
      state.dictionary = getDictionary(action.payload);
    },
  },
  selectors: {
    selectLang: (state) => state.lang,
    selectDictionary: (state) => state.dictionary,
  }
});

export const { setLang } = appSlice.actions;
export const { selectLang, selectDictionary } = appSlice.selectors;
