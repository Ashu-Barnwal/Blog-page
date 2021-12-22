import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaFeatherAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { Row, Col } from "react-bootstrap";

const About = ({posts}) => {
    const url = {

    }
    return (
        <>
            <Container className="mt-5">
                <center>
                    <div className="aboutImg">
                        <img src="https://avatars.githubusercontent.com/u/24194881?v=4" alt="dp" />
                    </div>
                    <div className="aboutDetails">
                        <h1>Asutosh Kumar Barnwal</h1>
                        <p className="px-5">Hi, my name is Asutosh. I'm freelancing as Full Stack Web Developer. Graphic designing is  one of my key skills.</p>
                    </div>
                    <div className="aboutIcons">
                        <IconContext.Provider value={{ 
                            color: "gray", 
                            size: '15px', 
                            className: 'Icon' 
                            }}>

                            <ul>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaGithub />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaLinkedin />
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href={url} className='btn'>
                                <FaInstagram/>
                                </a>
                            </li>
                            <span>| </span>
                            <li className='list-inline-item'>
                                <Link to={'/post'} style={{ color: 'inherit', textDecoration: 'inherit' }}><p> <FaFeatherAlt/> 5 Posts</p></Link>
                            </li>
                            </ul>
                        </IconContext.Provider>
                    </div>
                    <h2 className="text-muted mt-5">LATEST POST</h2>
                </center>
                <Row>
                    <Col sm={12} md={4}>
                        <Link to={'/post/1'}><Cards posts={posts} id={4} /></Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <Link to={'/post/2'}><Cards posts={posts} id={3} /></Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <Link to={'/post/3'}><Cards posts={posts} id={2} /></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
