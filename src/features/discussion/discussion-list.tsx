import DiscussionCard from "@/features/discussion/discussion-card"
import useDiscussions from "./useDiscussions"
import DiscussionCardSkeleton from "./discussion-card-skeleton"

function DiscussionList() {
    const { data: discussions, isFetching } = useDiscussions()

    if (!isFetching && discussions?.length === 0) return (
        <div className="max-w-[500px] m-auto">
            <img src="./undraw_empty_re_opql.svg" />
        </div>
    )
    return (

        <ul className="flex gap-6  flex-wrap justify-evenly mt-2 px-2 w-full">
            {isFetching && (<>
                <DiscussionCardSkeleton />
                <DiscussionCardSkeleton />
                <DiscussionCardSkeleton />
                <DiscussionCardSkeleton />
            </>
            )
            }
            {discussions && discussions.length > 0 && discussions.map(disc => <DiscussionCard discussion={disc} key={disc._id}/>)}
        </ul>)
}

export default DiscussionList