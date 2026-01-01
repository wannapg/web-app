import {Input} from "@/components/ui/input"
import {Search,Bell, Info, CircleUser, CircleArrowUp} from "lucide-react"
import { Button } from "./ui/button"
import React from "react"

interface IconButtonProps{
  icon: React.ReactNode;
  onClick?: () => void;
  hoverColor?: string;
}

export function IconButton({ icon, onClick, hoverColor = "bg-teal-500" }: IconButtonProps) {
  return (
    <Button className="p-1 rounded-full bg-transparent group hover:bg-teal-600 hover:text-white border-none outline-none focus:outline-none " onClick={onClick}>
      { React.cloneElement(icon as React.ReactElement,{
        className: `h-5 w-5 text-muted-foreground` + ` group-hover:${hoverColor} group-hover:text-white`
      })}
    </Button>
  )
}

export function SearchBar() {
  return (
    <header className="w-full p-4">
      <div className="flex items-center mx-auto w-full max-w-4xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9 w-full" />
          <CircleArrowUp className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
      </div>

      <div className="flex items-center ml-4 space-x-4">
        <IconButton icon={<Bell />} />
        <IconButton icon={<Info />} />
        <IconButton icon={<CircleUser />} />
        <span className="ml-1 font-normal">UserName</span>
      </div>
      </div>
    </header>
  )
}
