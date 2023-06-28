export type PostFile = {
    id: number;
    name: string
}
export type PostUser = {
    id: number;
    name: string;
}
export type Post = {
    id: number;
    title: string;
    content: string;
    file: PostFile;
    user: PostFile;
}
export type PostList = Array<Post>;