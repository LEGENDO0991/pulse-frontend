import { getCampaigns } from "@/api/campaign"
import { useQuery } from "react-query"

interface Discussion {
    id: string;
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    upVotes:number;
    downVotes:number;
    opinionsCount:number;
}

function useDiscussions() {
    const { data, isError, isFetching, error } = useQuery<Discussion[]>({
        queryFn: getCampaigns,
        queryKey:[ 'discussions']
    })
    return { data, isFetching, isError, error }
}

export default useDiscussions