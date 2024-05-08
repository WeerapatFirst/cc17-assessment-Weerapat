import Router from "./routes/Router"
import AuthenContextProvider from "./context/AuthenContext"

function App() {

  return (
    <AuthenContextProvider>
      <Router />
    </AuthenContextProvider>
  )
}

export default App
