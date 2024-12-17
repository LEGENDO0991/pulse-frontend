import { useAppDispatch } from "@/hooks"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { login } from "./auth-slice"
import { checkAuth } from "@/api/auth"
function AuthCheck({children}:{children:ReactNode}) {
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const f = useCallback(async () => {
    try {
      const res = await checkAuth()
      if (res?.email) {
        dispatch(login(res))
      }
      setIsLoading(false)
    } catch {
      setIsLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    f()
  }, [f])

  if(isLoading)return 'loading.  it might take a minute or two due to cold start'
  return (
    children
  )
}

export default AuthCheck