import App from "./app/App.tsx";
import {createRoot} from "react-dom/client";

import {ThemeProvider} from "./app/providers/theme";
import {LanguageProvider} from "./app/providers/i18n/";
import {BrowserRouter} from "react-router-dom";

const data = JSON.stringify({
    email: 'test@test-a.com',
    password: '11111111',
})

const resp = await fetch("http://localhost:4444/auth/login", {
    method: 'POST',
    body: data,
    headers: {
        "Content-Type": "application/json",
    }
})

const resp1 = await resp.json()
console.log(resp1)

const respS = await fetch("http://localhost:4444/auth/security", {
    method: 'GET',
    headers: {
        "Authorization": `Bearer ${resp1.access}`
    }
})

console.log(respS)

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <LanguageProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </LanguageProvider>
    </BrowserRouter>
);
