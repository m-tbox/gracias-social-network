
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
    date: string,
    userId: string,
    likes?: number,
    comments?: string,
}

export type UserTypes = {
    id: string,
    profilePicture?: string,
    username: string,
}