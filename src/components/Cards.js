import { Card } from "react-bootstrap"
import { FaCalendarDay } from 'react-icons/fa'

const Cards = ({ post, posts, id }) => {
    const title = post== null ? posts[id].title : post.title;
    const img = post== null ? posts[id].img1 : post.img1;
    const desc = post== null ? posts[id].description : post.description;
    const date = post== null ? posts[id].date : post.date;
    return (
        <>
        <Card className="pCard bg-dark text-white mb-4">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay className="">
                <Card.Title className="text-uppercase text-center">{title}</Card.Title>
                <Card.Text className="text-justify text-muted">
                {desc}
                </Card.Text>
                <Card.Text><FaCalendarDay/> {date}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </>
    )
}

export default Cards
