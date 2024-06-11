import {
  IconHome,
  IconAchievement,
  IconConnection,
  IconLibrary,
  IconPayments,
  IconQuestions,
  IconSettings,
  IconShedule,
  IconTraining,
} from 'icon-sirius';

export const MenuList = [
  { title: 'Главная', icon: IconHome, href: '/dashboard/home' },
  { title: 'Расписание', icon: IconShedule, href: '/dashboard/schedule' },
  { title: 'Оплата', icon: IconPayments, href: '/dashboard/payment' },
  { title: 'Достижения', icon: IconAchievement, href: '/dashboard/achievement' },
  { title: 'Тренажеры', icon: IconTraining, href: '/dashboard/training' },
  { title: 'Библиотека', icon: IconLibrary, href: '/dashboard/library' },
  { title: 'Проверка связи', icon: IconConnection, href: '/dashboard/check-connection' },
  { title: 'Настройки', icon: IconSettings, href: '/dashboard/settings' },
  { title: 'Вопросы', icon: IconQuestions, href: '/dashboard/questions' },
];
