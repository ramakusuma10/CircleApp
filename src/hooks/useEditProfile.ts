import { useMutation, QueryClient, useQueryClient } from "@tanstack/react-query";
import { UserType, EditUserType, EditUserDataType } from '../types/types'
import { useDispatch } from 'react-redux'
import { setLoggedUser } from '../redux/auth/authSlice'

import api from '../libs/api'

interface useEditProfileParams {
  onClose?: () => void
}

function useEditUser(params: useEditProfileParams = {}): [(data: EditUserDataType) => void] {
  const dispatch = useDispatch()
  const queryClient: QueryClient = useQueryClient()

  
  function onEdit(data: EditUserDataType): void {
    const formData: FormData = new FormData()
    
    formData.append('name', data.fullname)
    formData.append('username', data.username)
    formData.append('bio', data.bio)
    formData.append('avatar', data.avatar[0])
    
    mutation.mutate(formData)
    
    if (params.onClose) params.onClose()
      }
    
    const mutation = useMutation({
        mutationFn: EditProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['editedUser'] })
            dispatchLatestUserData()
        },
    })
  async function EditProfile (data: FormData): Promise<EditUserType> {
      const editUser: Promise<EditUserType> = api.UpdateUser(data)
      
      return editUser
  }

  async function dispatchLatestUserData() {
      const loggedUser: UserType = await api.GetLoggedUser()
      dispatch(setLoggedUser(loggedUser))
  }

  return [onEdit]
}

export { useEditUser }
