"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useAppDispatch } from "@/hooks"
import { login } from "./auth-slice"
import { useToast } from "@/hooks/use-toast"
import { AxiosError } from "axios"
import { verifyOtp } from "@/api/auth"
import useToken from "./useToken"

export function InputOTPControlled() {
  const [otp, setOtp] = React.useState<string>("")
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email")
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const navigate = useNavigate()
  const [, setToken] = useToken()
  return (
    <div className="space-y-2 flex items-center justify-center flex-col min-h-screen">
      <InputOTP
        maxLength={6}
        value={otp}
        onChange={async (val) => {
          setOtp(val)
          try {
            if (val.length === 6 && email) {
              const res = await verifyOtp({ email, otp: val })
              dispatch(login(res as unknown as { email: string }))
              toast({
                description: "Logged in",
                variant: "success"
              })
              setToken(res.token)
              navigate('/')
            }

          } catch (err) {
            if (err instanceof AxiosError) {
              toast({
                description: (err.response?.data.message),
                variant: 'destructive',
              });
            }
          }
        }}
      >
        <InputOTPGroup>
          {[...Array(6)].map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {otp === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {otp}</>
        )}
      </div>
    </div>
  )
}
