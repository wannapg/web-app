import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from "@/assets/logo.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className ="flex items-enter gap-3 py-10">
            <a
              href="/"
              className="flex items-center gap-3 hover: opacity-80 transition-opacity"
            > 
              <img 
                src = {logo}
                alt ="logo"
                className = "h-18 w-18"
              />
              <div className="flex flex-col leading-tight"> 
                <span className="text-lg font-semibold text-teal-600 text-primary"> Smart </span>
                <span className="text-lg font-semibold text-teal-600 text-foreground"> Home </span>
              </div>
            </a>
            </SidebarGroupLabel>
          <SidebarGroupContent className="mt-3">
            <SidebarMenu className="space-y-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    className="
                      text-lg 
                      text-muted-foreground 
                      hover:text-teal-600 
                      font-semibold
                    " 
                  asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}