import {Input} from "@/components/ui/input"
import {Search} from "lucide-react"


export function SearchBar() {
  return (
    <header className="w-fullshadow p-4">
      <span className="max-w-3xl mx-auto w-full">
      <div className="flex items-center relative w-full max-w-4xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-9 w-full" />
      </div>
      </span>
    </header>
  )
}
