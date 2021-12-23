import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaCalendarDay, FaQuoteLeft, FaFacebookF, FaPinterest, FaSnapchatGhost } from 'react-icons/fa';
import {IconContext} from 'react-icons';
import Missing from "./Missing";

const PostPage = ({ posts }) => {
    const url = '#';
    const {id} = useParams();
    const post =  posts.find(post => (post.id).toString()===id);
    return (
        <main className="mt-5">
            {post &&
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="postImg mt-5">
                            <img src={post.img1} alt="Cover" />
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="postDetails mt-5 text-white">
                            <p><FaCalendarDay/> {post.date}</p>
                            <h1><strong>{post.title}</strong></h1>
                            </div>
                        </Col>
                    </Row>
                    <article className="mt-5 p-5">
                        <p className="text-white text-justify ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ducimus delectus reiciendis ea! Facere atque velit ipsam autem sequi, esse eum temporibus facilis. Corrupti iusto fuga debitis commodi quaerat rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores atque in. Libero sequi architecto delectus, quisquam explicabo aspernatur aliquam repellendus hic odio accusamus et magnam fugit quibusdam soluta obcaecati?</p>
                    </article>

                    <article className="px-5">
                        <p className="text-white h2 text-wrap text-justify"><span className="text-danger"><FaQuoteLeft/></span> {post.body}</p>
                    </article>
                    <center>
                        <div className="moreIcons">
                        <IconContext.Provider value={{ 
                            color: "gray", 
                            size: '30px', 
                            className: 'Icon' 
                            }}>

                            <ul className='pt-2'>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaFacebookF />
                                </a>
                            </li>
                            <span>| </span>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaPinterest />
                                </a>
                            </li>
                            <span>| </span>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaSnapchatGhost/>
                                </a>
                            </li>
                            </ul>
                        </IconContext.Provider>
                        </div>
                    </center>
                    <div className="postImg2 px-4 mt-3">
                        <img src={post.img2} alt="" />
                    </div>
                </Container>
            }
            {!post &&
                <Missing message={'No post found!'}/>
            }
        </main>
    )
}

export default PostPage
