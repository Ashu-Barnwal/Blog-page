import Feed from "./Feed"

const NewPost = ({ posts }) => {
    return (
        <main>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                    <p style={{marginTop:"5rem"}}>
                        No posts to display.
                    </p>
            )}
        </main>
    )
}

export default NewPost
