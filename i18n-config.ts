export type Dictionary = {
  auth: {
    title: string;
    loginFailed: string;
    email: string;
    password: string;
    rememberMe: string;
    login: string;
    forgotPassword: string;
    loginAsCoach: string;
    noAccount: string;
    register: string;
  };
  // Добавьте остальные разделы словаря здесь...
};

export type Locale = 'en' | 'ru';

export const i18n = {
  defaultLocale: 'ru' as Locale,
  locales: ['en', 'ru'] as Locale[],
};
