export interface UserProps {
    isLogin: boolean;
    nickname?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImagePorps;
}

export interface ImagePorps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}

export interface GlobalErrorProps {
    status: boolean;
    message?: string; 
}

export interface GlobalDataProps {
    token: string;
    user: UserProps;
    loading: boolean;
    error: GlobalErrorProps;
} 