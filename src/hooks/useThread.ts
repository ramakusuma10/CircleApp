import { ThreadType,ThreadDataType } from '../types/types'
import { useMutation, QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";

import api from '../libs/api'

interface useThreadParams {
  onClose?: () => void
}

function useThread(params: useThreadParams = {}):[ThreadType[] | undefined,(data: ThreadDataType) => void] {
  const queryClient: QueryClient = useQueryClient()
  const { data: threads } = useQuery<ThreadType[]>({
    queryKey: ['threads'],
    queryFn: api.getThread,
})
  
  function onThread(data: ThreadDataType): void {
    const formData: FormData = new FormData()
    
    formData.append('content', data.content)
    formData.append('image', data.image ? data.image[0] : null)

    mutation.mutate(formData)
    
    if (params.onClose) params.onClose()
      }
    
    const mutation = useMutation({
        mutationFn: CreateThread,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['threads'] })
        },
    })
  async function CreateThread (data: FormData): Promise<string> {
      const createThread: Promise<string> = api.CreateThread(data)
      
      return createThread
  }


  return [threads,onThread]
}

export { useThread }
