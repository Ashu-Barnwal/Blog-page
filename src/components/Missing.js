import { Container } from "react-bootstrap"
import { BsGearWideConnected } from "react-icons/bs";
import { GiTerror } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Missing = ({message='Error, no page found!'}) => {
    return (
        <Container className="mt-5 pt-5">
            <center>
                <span className="missLogo">
                <IconContext.Provider value={{ 
                    color: "crimson", 
                    size: '90px', 
                    className: 'footerIcon' 
                    }}>
                    <BsGearWideConnected/>
                </IconContext.Provider>
                </span>
                <div className="mb-5 mt-5 text-white">
                    <h1><GiTerror/> {message}</h1>
                    <Link to={'/Blog-page'} style={{ color: 'crimson', textDecoration: 'inherit' }}><h5>Go to Home</h5></Link>
                </div>
            </center>
        </Container>
    )
}

export default Missing
