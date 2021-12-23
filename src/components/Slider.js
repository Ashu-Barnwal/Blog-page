import wall1 from './../img/wall1.jpg';
import wall2 from './../img/wall2.jpg';
import wall3 from './../img/wall3.jpg';
import { 
    Carousel
} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { FaFeatherAlt, FaLinux } from 'react-icons/fa'

const Slider = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={wall1}
                alt="First slide"
                />
                <Carousel.Caption>
                <p>My Blog page</p>
                <h4>This is a simple demonstration of blog page to showcase the react concept</h4>
                {/* <div className="btn btn-slider">Posts</div> */}
                <div style={{height: '8rem'}}></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={wall2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <p>Checkout My Latest Post</p>
                <h4>You can click the button below or search for a post in search bar.</h4>
                <Link to={'/Blog-page/post'}>
                    <div className="btn btn-slider"><FaFeatherAlt/> POSTS</div>
                </Link>
                <div style={{height: '8rem'}}></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={wall3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p>Created with REACT</p>
                <h4>This project is created with react & Bootstrap</h4>
                <Link to={'/Blog-page/about'}><div className="btn btn-slider"><FaLinux/> READ ABOUT</div></Link>
                <div style={{height: '8rem'}}></div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  
        </>
    )
}

export default Slider
