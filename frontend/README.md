# FilmHub Client

## Установка, конфигурация и запуск

1. Установить пакеты: `npm i`
2. Установить для запуска тестов: `npx playwright istall`
3. Создать `.env` в дериктории `frontend`. В переменной `VITE_API_URL` указать URL по которому доступен сервер. В случае разработки это будет `http://localhost:$PORT`, где `$PORT` зависит от переменной `SERVER_PORT` в файле `backend/.env` в случае если вы зпускаете через Docker
4. Запустить сервер. Для этого перейти в `backend` и запустить `docker compose up`
5. Запустить dev-сервер фронтенда: `npm run dev`

> На данный момент это все неудобно и нуждается в переделке, если возникли проблемы, обращайтесь @paveda

## Библиотека компонентов

Используется [shadcn](https://ui.shadcn.com/)

Если при работе появляется необходимость в базовом компоненте

1. Проследуйте [сюда](https://ui.shadcn.com/docs/components)
2. После установки (он установиться в `src/shared/ui`) экспортируйте этот компонент наружу в файле `src/shared/ui/index.ts`
3. Забирайте его из `@/shared/ui` в любой части приложения

## Тестирование

Для тестирования используется [vitest](https://vitest.dev/). Он настроен наботать в двух режимах: в браузерном окружение через [Browser Mode](https://vitest.dev/guide/browser/) для тестирования компонентов и в окружении Node.js для остального.

- Для того чтобы тест запускался в браузере его имя должно быть с суфиксом `browser.test`, например `SomePretty.browser.test.tsx`
- Для запуска в окружении Node.js суффикс `unit.test`

Для запуска тестов:

```ts
npm run test
```
