import { DetailThreadType,ReplyType,ThreadDataType } from '../types/types'
import { useMutation, QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";

import api from '../libs/api'

function useReply(threadId: number):[DetailThreadType | undefined,(data: ThreadDataType) => void] {
  const queryClient: QueryClient = useQueryClient()
  const { data: thread } = useQuery<DetailThreadType>({
    queryKey: ['thread', threadId],
    queryFn: () => api.FindOneThread(threadId),
    })
  
    function onReply(data: ThreadDataType): void {
        const formData: FormData = new FormData()
        
        formData.append('content', data.content)
        formData.append('image', data.image ? data.image[0] : null)
        formData.append('threadId', threadId.toString())

        mutation.mutate(formData)
    }
    
    const mutation = useMutation({
        mutationFn: CreateReply,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['thread'] })
        },
    })

    async function CreateReply (data: FormData): Promise<ReplyType> {
        const createReply: Promise<ReplyType> = api.CreateReply(data)
        
        return createReply
    }


    return [thread,onReply]
}

export { useReply }
