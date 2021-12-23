import Feed from "./Feed"
import Missing from "./Missing"

const NewPost = ({ posts }) => {
    return (
        <main>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                    <Missing message={'No post to display!'}/>
            )}
        </main>
    )
}

export default NewPost
