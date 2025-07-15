import { setupWorker } from "msw/browser";
import { handlers as authHandlers } from "./authApi";
import { handlers as currentUserHandlers } from "./currentUserApi";

export const worker = setupWorker(...authHandlers, ...currentUserHandlers);
