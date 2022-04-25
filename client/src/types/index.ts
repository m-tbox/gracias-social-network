
export type UserResponseTypes = {
    userData: object,
    error: boolean,
    errorMsg: string
}

export type PostResponseTypes = {
    post: object,
    error: boolean,
    errorMsg: string
}

export type PostTypes = {
    id: string,
    description?: string,
    image: string,
    createdAt: string,
    likes?: number,
    comments?: string,
    author?: {
        id: number,
        username: string,
        email: string,
        profilePicture?: string,
        coverPicture?: string,
        isAdmin?: boolean,
        description?: string,
        city?: string,
        createdAt?: string,
        updatedAt?: string
    },
    likedBy?: []
}

export type User = {
    id: number
    username: string,
    email: string,
    profilePicture?: string,
    coverPicture?: string,
    isAdmin?: boolean,
    description?: string,
    city?: string,
    createdAt?: string,
    updatedAt?: string
}

export type UserTypes = {
    id: string,
    profilePicture?: string,
    username: string,
    coverPicture?: string,
    description?: string,
    following?: [User]
}