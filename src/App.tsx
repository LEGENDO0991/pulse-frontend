
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Discussion from './pages/discussion'
import Home from './pages/campaigns'
import AuthPage from './pages/auth'
import { store } from './store'
import { Provider } from 'react-redux'
import AuthCheck from './features/auth/auth-check'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Toaster } from './components/ui/toaster'
import VerifyOtp from './pages/verify-otp'
import Landing from './pages/landing'

function App() {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthCheck>
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/verify-otp" element={<VerifyOtp />} />
              <Route path="/" element={<Landing />} />
              <Route path="/campaigns" element={<Home />} />
              <Route path="/campaigns/:id" element={<Discussion />} />
            </Routes>
          </BrowserRouter>
        </AuthCheck>
        <Toaster />
      </QueryClientProvider>
    </Provider>
  )
}

export default App


