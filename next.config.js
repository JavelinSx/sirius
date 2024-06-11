/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Экспорт статического сайта
    images: {
        unoptimized: true, // Отключение оптимизации изображений для совместимости с экспортом
    },
    basePath: '/sirius', // Замените 'sirius' на имя вашего репозитория
    assetPrefix: '/sirius/', // Замените 'sirius' на имя вашего репозитория
}

module.exports = nextConfig;