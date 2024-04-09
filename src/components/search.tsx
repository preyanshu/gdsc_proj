import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="flex w-[80vw] space-x-2 ">
      <Input  className="w-[70%]" type="text" placeholder="search here ..." />
      <Button  className="w-[15%]"type="submit">Search</Button>
    </div>
  )
}
