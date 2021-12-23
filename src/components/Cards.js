import { Card } from "react-bootstrap";
import { FaCalendarDay } from 'react-icons/fa';
import Badge from "./Badge";
import Profile from "./Profile";

const Cards = ({ post, posts, id, count }) => {
    const title = post== null ? posts[id].title : post.title;
    const img = post== null ? posts[id].img1 : post.img1;
    const desc1 = post== null ? posts[id].description : post.description;
    const desc = desc1.length<=70 ? desc1 : `${desc1.slice(0, 70)}...`
    const date = post== null ? posts[id].date : post.date;
    const handleCateg = () => {
        const name = ['life', 'work', 'art', 'tech', 'note', 'rest'];
        const index = Math.floor(Math.random()*6);
        return name[index];
      }
    return (
        <>
        <Card className="pCard bg-dark text-white mb-4">
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay className="">
                <Card.Text><FaCalendarDay/> {date}</Card.Text>
                <Card.Title className="text-uppercase">{title}</Card.Title>
                <Card.Text className="text-muted">
                {desc}
                </Card.Text>
                <Card.Text><Profile/>
                    <Badge handleCateg={handleCateg}/>
                    {count &&
                        <Badge handleCateg={handleCateg}/>
                    }
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </>
    )
}

export default Cards
