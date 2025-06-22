import "@/shared/config/i18n/i18n.ts"
import "@/shared/styles/base/reset.scss"

import { AppRouter } from "@/app/providers/router"
import { AuthProvider } from "@/app/providers/auth"

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
