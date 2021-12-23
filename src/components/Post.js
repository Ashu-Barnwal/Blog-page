import { Link } from "react-router-dom"
import Cards from "./Cards"
import { Container } from "react-bootstrap"

const Post = ({ post }) => {
    return (
        <Container className="mt-5">
            <Link to={`/post/${post.id}`}>
                <Cards post={post} count={true} />
            </Link>
        </Container>
    )
}

export default Post
