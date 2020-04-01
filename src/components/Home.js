import React from 'react'
import UserList from './user/UserList'
import PostList from './post/PostList'
import Comments from './Comments/Comments'

 function Home() {
    return (
        <div>
            <UserList />
            <PostList />
            <Comments />
        </div>
    )
}

export default  Home