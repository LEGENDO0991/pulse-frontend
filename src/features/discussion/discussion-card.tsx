import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

interface Discussion {
    id:string;
    _id:string;
    title: string;
    description: string;
    createdAt: string;
    upVotes:number;
    downVotes:number;
    opinionsCount:number;
}
function DiscussionCard({discussion}: {discussion:Discussion}) {
    const navigate = useNavigate()
    return (
        <li className="p-2 border-4 border-black flex-1 min-w-[300px] basis-[calc(50%-16px)] shadow-1-black hover:shadow-hover-black active:shadow-1-black hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer " onClick={() => navigate(discussion._id)}>
            <div className="flex gap-4 items-center mt-2 flex-wrap">
                <p className="font-semibold text-xl w-full">{discussion.title}
                </p>
                <div className="flex items-center justify-center gap-2">

                    <div className="w-[85px] aspect-square bg-neutral-100 flex items-center justify-center p-2 flex-col rounded-md">
                        <span className="font-semibold text-lg">
                            {discussion.opinionsCount}
                        </span>
                        <span className="text-sm capitalize text-neutral-400 font-medium">
                            comments
                        </span>
                    </div>

                    <div className="w-[85px] aspect-square bg-red-400 flex items-center justify-center p-2 flex-col rounded-md">
                        <span className="font-semibold text-red-900 text-lg">
                            {discussion.downVotes}
                        </span>
                        <span className="text-sm capitalize text-red-500 font-medium">
                            Downvotes
                        </span>
                    </div>

                    <div className="w-[85px] aspect-square bg-green-400 flex items-center justify-center p-2 flex-col rounded-md">
                        <span className="text-green-900 font-semibold text-lg">
                            {discussion.upVotes}
                        </span>
                        <span className="text-sm capitalize text-green-600 font-medium">
                            Upvotes
                        </span>
                    </div>
                </div>

            </div>

            <div className="mt-4 flex gap-2 items-center">
                <Badge className="max-md:aspect-square ">
                    <Globe />&nbsp; <span className="hidden md:block">Public</span>
                </Badge>

                <div>
                    <p className="flex items-center gap-2 "> <span className="text-neutral-400">Posted</span></p>
                </div>
                <span className="text-neutral-400">{formatDistanceToNow(discussion.createdAt)} ago</span>
            </div>
        </li>
    )
}

export default DiscussionCard