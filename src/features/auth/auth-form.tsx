import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";
import useAuth from "./useAuth";

export function AuthForm() {
  const [selectedTab, setSelectedTab] = useState<"login" | "register">("login")
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { auth, isLoading } = useAuth(selectedTab)
  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    auth(data)
  }
  if (isAuthenticated) {
    return <Navigate to='/' replace />
  }

  const handleTabChange = (value: string) => {
    if (value === "login" || value === "register") {
      setSelectedTab(value)
    }
  };
  return (
    <section className="flex min-h-screen items-center justify-center p-4">
      <Tabs defaultValue="login" value={selectedTab} className="w-[400px]" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="login" onChange={() => setSelectedTab("login")}>Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login to continue.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                aria-label="Login form"
              >
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full"
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Register Form */}
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Register to continue.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                aria-label="Register form"
              >
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full"
                />
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
