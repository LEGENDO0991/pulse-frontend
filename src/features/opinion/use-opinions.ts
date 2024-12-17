import { getOpinions } from "@/api/opinion";
import { useQuery } from "react-query"
import { useParams } from "react-router-dom";

interface Opinion {
    id: string;
    _id:string;
    content: string;
    createdAt: number;
    upVotes:number;
    downVotes:number;
  }

function useOpinions() {
    const {id} = useParams()
    const { data:opinions, isError, isFetching, error } = useQuery<Opinion[]>({
        queryFn: () => getOpinions(id || ""),
        queryKey:[ 'opinions'],
    })
    return { opinions, isFetching, isError, error }
}

export default useOpinions