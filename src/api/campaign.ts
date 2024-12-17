import axios from "@/lib/axios"
interface Discussion {
    id: string;
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    upVotes:number;
    downVotes:number;
    opinionsCount:number;
}

export const createCampaign = async (data: { title: string, description: string }): Promise<{ message: string, }> => (await axios.post("/campaigns", data, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})).data

export const getCampaigns = async (): Promise<Discussion[]> => (await axios.get("/campaigns", {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})).data.campaigns

export const getCampaign = async (discussionId:string): Promise<Discussion> => (await axios.get(`/campaigns/${discussionId}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})).data.campaign

export const upVote = async (discussionId:string): Promise<Discussion> => (await axios.get(`/campaigns/${discussionId}/upvote`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}))


export const downVote = async (discussionId:string): Promise<Discussion> => (await axios.get(`/campaigns/${discussionId}/downvote`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}))
