### 🔐 Как запустить:

- yarn install or npm install
- npm run migration
- npm run dev

### 🔐 Auth API

---

#### **POST** `/auth/registration`

**Описание:** Регистрация нового пользователя.
**Тело запроса:**
firstName: string (min 2 chars),
lastName: string (min 2 chars),
email: string,
password: string (min 8 chars),
confirmPassword: string ( confirmPassword === password )

**Ответ запроса:**
id: 9,
email: string,
firstName: string,
lastName: string,
password: string,
updatedAt: string,
createdAt: string,
token: string | null

#### **POST** `/auth/login`

**Тело запроса:**
email: string,
password: string (min 8 chars),

**Ответ запроса:**
id: 9,
email: string,
firstName: string,
lastName: string,
password: string,
updatedAt: string,
createdAt: string,
token: string | null

#### **GET** `/auth/token`

**Описание**: Создает новый токен

#### **GET** `/auth/security`

**Описание**: Для тестов, проверяет работает ли система авторизации
**methods**: GET
