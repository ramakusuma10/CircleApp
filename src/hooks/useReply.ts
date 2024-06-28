import { DetailThreadType,ReplyType,ThreadDataType } from '../types/types'
import { useMutation, QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";

import api from '../libs/api'

function useReply(threadId: number | null = null ):[DetailThreadType | null | undefined,(data: ThreadDataType) => void, (threadId: number) => void] {
    const queryClient: QueryClient = useQueryClient()
    const { data: thread } = useQuery<DetailThreadType | null >({
        queryKey: ['thread', threadId],
        queryFn: () => {
            if (threadId) {
                return api.FindOneThread(threadId)
            }
            return null
        },
    })
  
    function Reply(data: ThreadDataType): void {
        const formData: FormData = new FormData()
        if(threadId){
            formData.append('content', data.content)
            formData.append('image', data.image ? data.image[0] : null)
            formData.append('threadId', threadId.toString())
    
            createReply.mutate(formData)

        }
    }

    function onDelete(threadId: number): void {
        deleteReply.mutate(threadId)
    }
    
    const createReply = useMutation({
        mutationFn: CreateReply,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['thread'] })
        },
    })

    const deleteReply = useMutation({
        mutationFn: DeleteReply,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['thread'] })
        },
    })

    async function CreateReply (data: FormData): Promise<ReplyType> {
        const createReply: Promise<ReplyType> = api.CreateReply(data)
        
        return createReply
    }

    async function DeleteReply(threadId: number): Promise<ReplyType> {
        const deleteReply: Promise<ReplyType> = api.DeleteReply(threadId)

        return deleteReply
    }


    return [thread,Reply,onDelete]
}

export { useReply }
