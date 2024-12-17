import { upVote as upVoteApi, downVote as downVoteApi} from "@/api/opinion";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useMutation } from "react-query"

type VoteType = 'upVote' | 'downVote'
function useVoting(voteType:VoteType) {
    const {toast} = useToast()
    const { mutate: vote, isLoading, isError, error } = useMutation({
        mutationFn: voteType === 'upVote'? upVoteApi : downVoteApi,
        onError: (err) => {
            if (err instanceof AxiosError) {
                toast({
                    description: err.response?.data.message,
                    variant: "destructive"
                })
            }
        }
    })
    return { vote, isLoading, isError, error }
}

export default useVoting