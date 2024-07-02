/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserType {
    id: number
    username: string
    fullname: string
    email: string
    avatar: any
    bio: string | null
    followers: FollowType[]
    followeds: FollowType[]
    totalFollower: number
    totalFollowed: number
    isFollowed: boolean
    threads: ThreadType[]
}

export interface LoginType {
    username: string
    password: string
}
export interface RegisterType {
    username: string
    fullname: string
    email: string
    password: string
}

export interface ForgotType {
    email: string
}

export interface ResetType {
    newPassword: string
    confirmedPassword: string
    general?: string
}

export interface UserTypes {
    id: number
    username: string
    name: string
    email: string
    avatar: string
    bio: string | null
}

export interface ThreadType {
    id: number
    content: string
    image: string | null
    createdAt: string
    userId: number
    totalreplies: number
    totallikes: number
    isLiked: boolean
    user: UserType | undefined
}

export interface DetailThreadType extends ThreadType{
    replies: ThreadType[]
    likes: LikeType[]
}

export interface FollowType {
    id: number
    followerId: number
    followedId: number
}

export interface LikeType {
    id: number
    userId: number
    threadId: number
}

export interface ReplyType {
    id: number
    image: string | null
    content: string
    userId: number
    threadId: number
}

export interface ThreadDataType {
    content: string
    image: any
}

export interface EditUserDataType {
    fullname: string
    username: string
    bio: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    avatar: any
}

export interface EditUserType {
    id: number
    username: string
    fullname: string
    avatar: string
    bio: string | null
}
