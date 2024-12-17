import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DiscussionList from "@/features/discussion/discussion-list";
import CreateDiscussionForm from "@/features/discussion/create-discussion-form";
import { useState } from "react";

export default function Campaigns() {
  const [, setIsOpen] = useState<boolean>(false)
  return (
    <Layout>
      <section className="p-2 min-w-full">
        <h1 className="text-3xl font-bold">Discussions</h1>
        <DiscussionList />
        <div className="fixed bottom-4 right-4">
          <Dialog onOpenChange={setIsOpen}>
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
              <CreateDiscussionForm onSuccess={setIsOpen}/>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>
  )
}
