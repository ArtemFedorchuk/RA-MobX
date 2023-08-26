import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const GetPosts = async (): Promise<Post[]> => await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data

class PostsStore {
    posts: Post[] = [];
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    getPostsAction = async () => {
        try {
            this.isLoading = true;
            const response = await GetPosts();

            runInAction(() => {
                this.posts = response;
                this.isLoading = false;
            })
        } catch (e) {
            this.isLoading = false;
            console.log('e', e)
        }
    }
}

export default new PostsStore();
