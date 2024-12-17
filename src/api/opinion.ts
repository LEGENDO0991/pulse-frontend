import axios from "@/lib/axios"
interface Opinion {
  id: string;
  _id: string;
  content: string;
  createdAt: number;
  upVotes: number;
  downVotes: number;
}

export const createOpinion = async (data: { content: string, discussionId: string }): Promise<{ message: string, }> => (await axios.post("/opinions", {
  opinion: data.content,
  campaignId: data.discussionId
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})).data
export const getOpinions = async (discussionId: string): Promise<Opinion[]> => (await axios.get(`/campaigns/${discussionId}/opinions`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})).data.opinions

export const upVote = async (opinionId: string): Promise<void> => (await axios.patch(`/opinions/${opinionId}/upvote`, {},{
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
}))


export const downVote = async (opinionId: string): Promise<void> => (await axios.patch(`/opinions/${opinionId}/downvote`,{}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
}))
