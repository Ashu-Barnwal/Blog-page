import { Container, Row, Col, Card } from "react-bootstrap"
import { FaCalendarDay } from 'react-icons/fa'

const Cards = ({ posts, id }) => {
    return (
        <>
        <Card className="pCard bg-dark text-white mb-4">
            <Card.Img src={posts[id].img1} alt="Card image" />
            <Card.ImgOverlay className="">
                <Card.Title className="text-uppercase text-center">{posts[id].title}</Card.Title>
                <Card.Text className="text-justify text-muted">
                {posts[id].description}
                </Card.Text>
                <Card.Text><FaCalendarDay/> {posts[id].date}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </>
    )
}

export default Cards
