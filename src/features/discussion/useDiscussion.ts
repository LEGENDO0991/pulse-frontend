import { getCampaign } from "@/api/campaign"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

interface Discussion {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    opinionsCount:number;
}

function useDiscussion() {
    const { id } = useParams()
    const { data: discussion, isError, isFetching, error } = useQuery<Discussion>({
        queryFn: () => getCampaign(id || ""),
        queryKey: ['discussion']
    })
    return {discussion , isFetching, isError, error }
}

export default useDiscussion