import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ProtectRoute from "@/features/auth/protect-route"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ProtectRoute>
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </ProtectRoute>
    </SidebarProvider>
  )
}

