import { createOpinion as createOpinionApi} from "@/api/opinion"
import { useToast } from "@/hooks/use-toast"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"

function useCreateOpinion() {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const { mutate: createOpinion, isLoading, isError, error } = useMutation({
        mutationFn: createOpinionApi,
        onSuccess: (data: { message: string }) => {
            toast({
                description: data.message,
                variant: "success"
            })
            queryClient.invalidateQueries(['opinions'])
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                toast({
                    description: err.response?.data.message,
                    variant: "destructive"
                })
            }
        }
    })
    return { createOpinion, isLoading, isError, error }
}

export default useCreateOpinion