import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import useVoting from './use-vote';
import { useState } from 'react';

interface Opinion {
  id: string;
  _id: string;
  content: string;
  createdAt: number;
  upVotes: number;
  downVotes: number;
}

function OpinionCard({ opinion }: { opinion: Opinion }) {
  const [upVotes, setUpVotes] = useState<number>(opinion.upVotes)
  const [downVotes, setDownVotes] = useState<number>(opinion.downVotes)
  const { vote: upVote, isLoading: isUpVoting } = useVoting('upVote')
  const { vote: downVote, isLoading: isDownVoting } = useVoting('downVote')

  const handleUpVote = () => {
    setUpVotes(s => s + 1)
    upVote(opinion._id, {
      onError: () => {
        setUpVotes(s => s - 1)
      }
    })
  }

  const handleDownVote = () => {
    setDownVotes(s => s + 1)
    downVote(opinion._id, {
      onError: () => {
        setDownVotes(s => s - 1)
      }
    })
  }

  return (
    <div className="p-2 ">
      <p className="flex items-center gap-2 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="font-medium">Annonymous1234</span>
        <span className="text-neutral-400">posted {formatDistanceToNow(opinion.createdAt)}</span>
      </p>

      <p>{opinion.content}</p>
      <div className="flex gap-2 mt-2">
        <Button className="min-w-24" size="sm" variant="success" disabled={isUpVoting || isDownVoting} onClick={handleUpVote}><ArrowUp /> {upVotes}</Button>
        <Button className="min-w-24" size="sm" variant="destructive" disabled={isDownVoting || isUpVoting} onClick={handleDownVote}><ArrowDown /> {downVotes}</Button>
      </div>
    </div>
  )
}

export default OpinionCard