import Cards from './Cards'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

const Home = ({ posts }) => {
    return (
        <>
            <Slider/>
            <Container className='mt-5 px-5'>
                <Row>
                    <Col sm={12} md={4}>
                        <Link to={'/post/1'}><Cards categ={['Life','Work']} posts={posts} id={0} /></Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <Link to={'/post/2'}><Cards categ={['Life','Work']} posts={posts} id={1} /></Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <Link to={'/post/3'}><Cards categ={['Life','Work']} posts={posts} id={2} /></Link>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Link to={'/post/4'}><Cards categ={['Life','Work']} posts={posts} id={3}/></Link>
                    </Col>
                    <Col sm={12} md={6}>
                        <Link to={'/post/5'}><Cards categ={['Life','Work']} posts={posts} id={4}/></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
