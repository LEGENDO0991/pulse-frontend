import { useAppSelector } from "@/hooks"
import { ReactNode } from "react"
import { RootState } from "@/store"
import { Navigate } from "react-router-dom"


function ProtectRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated)
  if (!isAuthenticated) return <Navigate to="/auth" replace />
  return (
    children
  )
}

export default ProtectRoute