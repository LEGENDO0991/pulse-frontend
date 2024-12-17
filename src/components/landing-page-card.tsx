import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function LandinPageCard({ title, description }: { title: string, description: string }) {
  return (
    <li className="w-96 h-80 border text-center px-4 my-16 rounded-xl bg-neutral-700">
      <Avatar className="mx-auto w-28 h-28 -translate-y-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-neutral-100">
        <h3 className="font-semibold text-4xl">{title}</h3>
        <p className="mt-4">{description}</p>
      </div>
    </li>)
}

export default LandinPageCard