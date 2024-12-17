import OpinionCard from "./opinion-card";
import OpinionCardSkeleton from "./opinion-card-skeleton"
import useOpinions from './use-opinions';

function OpinionList() {
    const { opinions, isFetching } = useOpinions()

    if (!isFetching && opinions?.length === 0) return (
        <div className="max-w-[500px] m-auto mt-2">
            <img src="./undraw_empty_re_opql.svg" />
        </div>
    )
    return (

        <ul className="flex gap-6 flex-col  flex-wrap justify-evenly mt-2 px-2 w-full">
            {isFetching && (<>
                <OpinionCardSkeleton />
                <OpinionCardSkeleton />
                <OpinionCardSkeleton />
                <OpinionCardSkeleton />
            </>
            )
            }
            {opinions && opinions.length > 0 && opinions.map(op => <OpinionCard opinion={op} key={op._id} />)}
        </ul>)
}

export default OpinionList