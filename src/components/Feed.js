import Post from "./Post"

const Feed = ({ posts }) => {
    return (
        <>
            <div className="pt-4 mt-5 h2 text-muted text-center">
                ALL POST
            </div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed
