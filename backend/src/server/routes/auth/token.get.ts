import jwt from "jsonwebtoken";

const PRIVATE_KEY = 'TruLaLaLa'
const PRIVATE_KEY_LONG = 'asdfjhqweiunhwieurcn23r'

export default defineEventHandler(async (event) => {
    const { modelUser } = useDB(event)

    const refresh = getCookie(event, 'refreshToken');

    if (!refresh) {
        throw createError({
            error: "TokenUndefined",
            status: 500,
            statusMessage: "Token undefined",
            message: `Нет токена`,
        });
    }

    const decoded = jwt.verify(refresh, PRIVATE_KEY_LONG);

    const user = await modelUser.findOne({where: { email: decoded.data.email }})

    if (!user) {
        throw createError({
            error: "ValidationError",
            status: 404,
            statusMessage: "Bad Request",
            message: `Пользователь с email '${decoded.data.email}' не найден!`,
        });
    }

    const endDate = Math.floor(Date.now() / 1000) + (60 * 60)
    const accessToken = jwt.sign({
        exp: endDate,
    }, PRIVATE_KEY);

    const endDateLong = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
    const refreshToken = jwt.sign({
        exp: endDateLong,
        data: { email: user.email }
    }, PRIVATE_KEY_LONG);

    await user.update({token: accessToken})

    setCookie(event, "refreshToken", refreshToken, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });

    setResponseHeaders(event, {
        Authorization: `Bearer ${accessToken}`
    });

    return {user}
})