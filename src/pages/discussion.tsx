import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Globe, Plus } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import useDiscussion from '@/features/discussion/useDiscussion'
import { formatDistanceToNow } from 'date-fns'
import OpinionList from '@/features/opinion/opinion-list'
import CreateOpinionForm from '@/features/opinion/createOpinionForm'
import { useEffect, useState } from 'react'

function Discussion() {
  const [isOpen, setOpenChange] = useState<boolean>(false)
  const { discussion, isFetching: isFetchingDiscussion } = useDiscussion()

  useEffect(()=>{
    alert("Please note that the project is still in progress. Many features are experimental and may not work as expected.")
  },[])
  return (
    <Layout>

      <section className="p-2 min-w-full">
        {isFetchingDiscussion ? 'loading' : (
          <>
            <div className="bg-neutral-100 p-4 rounded-lg flex-1 min-w-[30rem] basis-[calc(50%-1.6rem)]">
              <h3 className="font-semibold text-xl lg:text-3xl">{discussion?.title}</h3>
              <div className="flex gap-4 items-center mt-2 flex-wrap">
                <p className="text-neutral-400">{discussion?.description}</p>
              </div>

              <div className="mt-4 flex gap-2 items-center">
                <Badge>
                  <Globe />&nbsp;Public
                </Badge>

                <div>
                  <p className="flex items-center gap-2 "> <span className="text-neutral-400">Posted {formatDistanceToNow(discussion?.createdAt || 0)} ago</span>
                  </p>
                </div>
              </div>
            </div>

            <OpinionList />

            <div className="fixed bottom-4 right-4">
              <Drawer open={isOpen} onOpenChange={setOpenChange}>
                <DrawerTrigger><Button size="icon">
                  <Plus />
                </Button></DrawerTrigger>
                <DrawerContent>
                  <CreateOpinionForm onSuccess={setOpenChange}/>
                </DrawerContent>
              </Drawer>
            </div>
          </>
        )
        }
      </section>
    </Layout>
  )
}

export default Discussion