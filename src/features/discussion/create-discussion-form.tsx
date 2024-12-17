import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SubmitHandler, useForm } from 'react-hook-form'
import useCreateDiscussion from './useCreateDiscussion'

interface FormValues {
    title: string;
    description: string;
}

function CreateDiscussionForm({ onSuccess: handleSuccess }: { onSuccess: (open: boolean) => void }) {
    const { createDiscussion, isLoading } = useCreateDiscussion()
    const { handleSubmit, register } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        createDiscussion(data, {
            onSuccess: () => handleSuccess(false)
        })
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            aria-label="Login form"
        >
            <Input
                type="title"
                placeholder="title"
                {...register("title", { required: true })}
                className="w-full"
            />

            <Textarea placeholder="Type your description here." {...register("description", { required: true })} className="w-full"
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
                Create
            </Button>
        </form>)
}

export default CreateDiscussionForm