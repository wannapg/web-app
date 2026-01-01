import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SearchBar } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

export default function DashboardLayout({children}:{children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
            <SearchBar />
            <main className="flex-1 overflow-auto p-6">
            {children}
            </main>
            <AppFooter />
        </div>
      </div>
    </SidebarProvider>
  );
}
