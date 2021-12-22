import Feed from "./Feed"

const NewPost = ({ posts }) => {
    return (
        <main>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                    <p className="h2 text-white text-center" style={{marginTop:"5rem", marginBottom: "25rem"}}>
                        No posts to display.
                    </p>
            )}
        </main>
    )
}

export default NewPost
