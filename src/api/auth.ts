import axios from "@/lib/axios"
import { AxiosError } from "axios"

export const checkAuth = async (): Promise<{ email: string } | undefined> => {
    try {
        const res = await axios.post('/auth/check', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        return res.data.user as { email: string }
    } catch (err) {
        if (err instanceof AxiosError) {
            throw new Error(err.message)
        }
    }
}

export const login = async (data: { email: string }) => {
    try {

        const res = await (await axios.post('/auth/login', data))
        console.log(res)
        return res.data as { email: string }
    } catch (err) {
        if (err instanceof AxiosError) {
            throw new Error(err.message)
        }
    }
}

export const register = async (data: { email: string }) => {
    try {
        const res = await axios.post('/auth/register', data)
        return res.data as { email: string }
    } catch (err) {
        if (err instanceof AxiosError) {
            throw new Error(err.message)
        }
    }
}

export const verifyOtp = async (data: { email: string, otp: string }) => {
    const res = await axios.post('/auth/verify-otp', data)
    return res.data as { email: string, token: string }
}

export const logout = async () => await axios.delete('/auth/logout',)