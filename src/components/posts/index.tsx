import React from 'react';
import PostsStore from "../../stores/posts-store";
import {observer} from "mobx-react-lite";

export const Posts = observer(() => {
    const { posts, isLoading, getPostsAction } = PostsStore;

    return (
        <div>
            <button onClick={getPostsAction}>Get posts</button>
            {isLoading && <span>Loading...</span>}
            {!isLoading && posts.length && posts?.map(({id, title, body}) => (
                <div key={id}>
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    );
});
