import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

function CreateNewDiscussion() {
    return (
          <Dialog>
            <DialogTrigger>
              <Button size="icon">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new Discussion</DialogTitle>
                <DialogDescription>
                Please be respectful and civil in your interactions. Ensure that your discussion topic is constructive, relevant, and free from abusive or offensive language. Let's foster a positive and inclusive environment for everyone.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
)}

export default CreateNewDiscussion