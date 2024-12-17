import { Textarea } from "@/components/ui/textarea";
import useCreateOpinion from "./useCreateOpinion";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface FormValues {
    content: string;
}

function CreateOpinionForm({onSuccess:handleSuccess}:{onSuccess:(s:boolean)=>void}) {
    const {id}  = useParams()
    const { createOpinion, isLoading } = useCreateOpinion()
    const { handleSubmit, register } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        createOpinion({...data,discussionId:id||""},{
            onSuccess:()=>handleSuccess(false)
        })
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            aria-label="Login form"
        >

            <div className="grid w-full gap-2 p-2">
                <Textarea placeholder="Type your opinion here." {...register("content", { required: true })} />
                <Button disabled={isLoading}>Add opinion</Button>
            </div>
        </form>)
}

export default CreateOpinionForm