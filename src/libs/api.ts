import axios, { AxiosResponse } from 'axios'
import CONFIG from '../config/config'
import { LoginType, RegisterType, UserType, DetailThreadType, ThreadType, ForgotType, ResetType, EditUserType, ReplyType, FollowType, LikeType } from '../types/types'

class api {
    async Register(data: RegisterType): Promise<AxiosResponse> {
        return await axios.post(`${CONFIG.BASE_URL}/auth/register`, {
            username: data.username,
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        })
    }

    async Login(data: LoginType): Promise<string> {
        const response: AxiosResponse = await axios.post(`${CONFIG.BASE_URL}/auth/login`, {
            username: data.username,
            password: data.password,
        })

        const token: string = response.data.data.token
        this.SET_TOKEN(token)

        return token
    }

    async GetLoggedUser(): Promise<UserType> {
        try {
            const response: AxiosResponse = await axios.get(`${CONFIG.BASE_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async ForgotPassword(data: ForgotType): Promise<string> {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIG.BASE_URL}/auth/forgot`, {
                email: data.email,
            })

            return response.data.data.token
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async ResetPassword(data: ResetType, token: string): Promise<AxiosResponse> {
        try {
            return await axios.patch(
                `${CONFIG.BASE_URL}/auth/reset`,
                {
                    password: data.newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    getThread = async (): Promise<ThreadType[]> => {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/threads`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    

    async CreateThread(data: FormData): Promise<string> {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIG.BASE_URL}/threads`, data, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async FindAllUser(): Promise<UserType[]> {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async GET_USER(id: number): Promise<UserType> {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    async UpdateUser(data: FormData): Promise<EditUserType> {
        try {
            const response: AxiosResponse = await axios.patch(
                `${CONFIG.BASE_URL}/users/profile`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${this.GET_TOKEN()}`,
                    },
                }
            )

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    FindOneThread = async (id: number): Promise<DetailThreadType> => {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/threads/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    CreateReply = async (data: FormData): Promise<ReplyType> => {
        try {
            const response: AxiosResponse = await axios.post(`${CONFIG.BASE_URL}/replies`, data, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    follow = async (followedId: number): Promise<FollowType> => {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/follow/${followedId}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    unfollow = async (followedId: number): Promise<FollowType> => {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/unfollow/${followedId}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }
    like = async (threadId: number): Promise<LikeType> => {
        try {
            const response: AxiosResponse = await axios.post(
                `${CONFIG.BASE_URL}/likes`,
                {
                    threadId: threadId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.GET_TOKEN()}`,
                    },
                }
            )

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    GetUsers = async (keyword: string): Promise<UserType[]> => {
        try {
            const response = await axios.get(`${CONFIG.BASE_URL}/search?keyword=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    DeleteThread = async (targetUd: number): Promise<ThreadType> => {
        try {
            const response = await axios.delete(`${CONFIG.BASE_URL}/thread/${targetUd}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    DeleteReply = async (targetUd: number): Promise<ReplyType> => {
        try {
            const response = await axios.delete(`${CONFIG.BASE_URL}/replies/${targetUd}`, {
                headers: {
                    Authorization: `Bearer ${this.GET_TOKEN()}`,
                },
            })

            return response.data.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error
            }

            throw error
        }
    }

    SET_TOKEN(payload: string): void {
        localStorage.setItem('token', payload)
    }

    GET_TOKEN(): string | null {
        return localStorage.getItem('token')
    }
}


export default new api()
