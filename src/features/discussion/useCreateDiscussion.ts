import { createCampaign as createCampaignApi } from "@/api/campaign"
import { useToast } from "@/hooks/use-toast"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"

function useCreateDiscussion() {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const { mutate: createDiscussion, isLoading, isError, error } = useMutation({
        mutationFn: createCampaignApi,
        onSuccess: (data: { message: string }) => {
            toast({
                description: data.message,
                variant: "success"
            })
            queryClient.invalidateQueries(['discussions'])
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
    return { createDiscussion, isLoading, isError, error }
}

export default useCreateDiscussion