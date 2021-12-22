import Cards from './Cards'
import Slider from './Slider'
import { Row, Col, Container } from 'react-bootstrap'

const Home = ({ posts }) => {
    return (
        <>
            <Slider/>
            <Container className='mt-5 px-5'>
                <Row>
                    <Col sm={12} md={4}><Cards posts={posts} id={0} /></Col>
                    <Col sm={12} md={4}><Cards posts={posts} id={1} /></Col>
                    <Col sm={12} md={4}><Cards posts={posts} id={2} /></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={12} md={6}><Cards posts={posts} id={3}/></Col>
                    <Col sm={12} md={6}><Cards posts={posts} id={4}/></Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
